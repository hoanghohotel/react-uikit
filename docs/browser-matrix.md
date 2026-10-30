# Browser and state coverage

Automated browser projects use Chromium desktop, Chromium mobile emulation, Firefox and Linux WebKit. They are not physical-device tests or manual assistive-technology certification.

## Glass preference regression

The preference rules previously had lower specificity than material and enhanced-level selectors. Before the fix, three Chromium tests failed: increased contrast in light/dark themes and reduced transparency. The subtle material still computed `backdrop-filter: blur(8px)`.

The preference selectors now match the material/level specificity and occur later in the stylesheet. Tests exercise the shipped CSS for all six combinations of subtle/regular/prominent and basic/enhanced. Each fallback must remove blur and the highlight gradient and use an opaque background.

| Behavior | Chromium desktop/mobile | Firefox / WebKit |
| --- | --- | --- |
| Increased contrast, light and dark | Native browser media emulation | Native browser media emulation |
| Reduced transparency | Chromium DevTools media emulation; matchMedia asserted | Shipped media rule activated through CSSOM; OS integration unverified |
| Unsupported blur | Conditional enhancement removed via CSSOM | Conditional enhancement removed via CSSOM |
| Reduced motion | Native media emulation; pointer highlight remains stationary | Native media emulation; pointer highlight remains stationary |
| Forced colors | Native browser media emulation | Native browser media emulation |

The unsupported-blur case is deliberately simulated: all installed browsers support backdrop-filter. It verifies the base CSS rather than an actual legacy browser.

## Added Storybook states

| Component | Added states |
| --- | --- |
| Checkbox | Checked, checked and disabled |
| Select | Selected, disabled |
| TextField | Read-only, invalid |
| Slider | Minimum, maximum |
| Stepper | Minimum, maximum, disabled |
| RadioGroup | Selected, disabled group, disabled option |
| Dialog | Open |
| GlassSheet | Open in light and dark |
| GlassPopover | Open in light and dark |

These 19 additions bring the gallery to 185 stories. The gallery sweep verifies rendering and uncaught errors. It does not establish exhaustive state coverage or replace review of visual diffs. New snapshots and existing Chromatic differences remain subject to review; no automatic acceptance is enabled.
