"""Install verified Debian 13 browser libraries into a user-owned directory.

This does not modify system packages or vendor browser files. Install the
Playwright browsers first. Other platforms should use playwright install-deps.
"""
import json
import os
from pathlib import Path
import platform
import pwd
import shlex
import subprocess
import sys

system = Path('/etc/os-release').read_text()
if 'ID=debian' not in system or 'VERSION_ID="13"' not in system or platform.machine() != 'x86_64':
    raise SystemExit('This helper supports Debian 13 x86_64 only. Use playwright install --with-deps on other systems.')
root = Path(sys.argv[1] if len(sys.argv) > 1 else '/workspace/browser-libs').resolve()
if any(char in str(root) for char in ['\n', '\r', '"']):
    raise SystemExit('Choose a directory without quotes or newlines.')
apt = root / 'apt'
for folder in ['etc/parts', 'etc/sources.list.d', 'etc/preferences.d', 'state/lists/partial', 'cache/archives/partial', 'log']:
    (apt / folder).mkdir(parents=True, exist_ok=True)
(apt / 'etc/sources.list').write_text('deb [signed-by=/usr/share/keyrings/debian-archive-keyring.gpg] https://deb.debian.org/debian trixie main\n')
(apt / 'state/status').write_bytes(Path('/var/lib/dpkg/status').read_bytes())
config = apt / 'apt.conf'
config.write_text(f'''Dir "{apt}";
Dir::Etc "etc";
Dir::Etc::sourcelist "sources.list";
Dir::Etc::sourceparts "sources.list.d";
Dir::Etc::parts "parts";
Dir::State "state";
Dir::State::status "status";
Dir::Cache "cache";
Dir::Log "log";
APT::Sandbox::User "{pwd.getpwuid(os.getuid()).pw_name}";
''')
env = os.environ.copy()
env['APT_CONFIG'] = str(config)
for protocol in ['http', 'https']:
    if env.get(protocol.upper() + '_PROXY'):
        env[protocol + '_proxy'] = env[protocol.upper() + '_PROXY']
subprocess.run(['apt-get', 'update'], env=env, check=True)
subprocess.run(['apt-get', '--download-only', '--no-install-recommends', '-y', 'install', 'libgtk-4-1', 'libgraphene-1.0-0', 'libharfbuzz-icu0', 'libmanette-0.2-0', 'libhyphen0', 'libgles2'], env=env, check=True)
for package in (apt / 'cache/archives').glob('*.deb'):
    subprocess.run(['dpkg-deb', '-x', str(package), str(root / 'root')], check=True)
libdir = root / 'root/usr/lib/x86_64-linux-gnu'
env['LD_LIBRARY_PATH'] = str(libdir) + (':' + env['LD_LIBRARY_PATH'] if env.get('LD_LIBRARY_PATH') else '')
subprocess.run([sys.executable, '-c', 'import ctypes; [ctypes.CDLL(name) for name in '+repr(['libgtk-4.so.1','libgraphene-1.0.so.0','libharfbuzz-icu.so.0','libmanette-0.2.so.0','libhyphen.so.0','libGLESv2.so.2'])+']'], env=env, check=True)
repo = Path(__file__).resolve().parents[1]
webkit = subprocess.check_output(['node', '--input-type=module', '-e', "import {webkit} from '@playwright/test'; console.log(webkit.executablePath())"], cwd=repo, text=True).strip()
bundle = Path(webkit).parent / 'minibrowser-wpe'
if not (bundle / 'bin/MiniBrowser').exists():
    raise SystemExit('Install Playwright WebKit before running this helper.')
launcher = root / 'webkit.sh'
launcher.write_text(f'''#!/bin/sh
bundle={shlex.quote(str(bundle))}
libraries={shlex.quote(str(libdir))}
export WEBKIT_EXEC_PATH="$bundle/bin"
export WEBKIT_INJECTED_BUNDLE_PATH="$bundle/lib"
export WEBKIT_INSPECTOR_RESOURCES_PATH="$bundle/share"
export WEBKIT_FORCE_COMPLEX_TEXT=1
export LD_LIBRARY_PATH="$bundle/lib:$bundle/sys/lib:$libraries"
exec "$bundle/bin/MiniBrowser" "$@"
''')
launcher.chmod(0o755)
print(json.dumps({'library_path': str(libdir), 'webkit_launcher': str(launcher)}))
