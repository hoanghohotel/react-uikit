import { Demo } from "./preview";
export default function Page() {
  return (
    <>
      <header>
        <a href="#main">React UIKit</a>
        <nav aria-label="Main">
          <a href="/en/introduction">Documentation</a>
          <a href="/templates">Templates</a>
          <a href="#components">Components</a>
          <a href="#glass">Glass</a>
          <a href="/vi/introduction" lang="vi">
            Tiếng Việt
          </a>
        </nav>
      </header>
      <main id="main">
        <section className="hero">
          <p className="eyebrow">INDEPENDENT · OPEN SOURCE · REACT</p>
          <h1>
            Interfaces that
            <br />
            feel considered.
          </h1>
          <p>
            Accessible controls. Adaptive surfaces. A foundation for your next
            interface.
          </p>
          <a className="uik-button" href="#installation">
            Start building ↗
          </a>
        </section>
        <section id="installation">
          <p className="eyebrow">01 / GET STARTED</p>
          <h2>A shared foundation.</h2>
          <p>
            This project is under development. Packages are not yet published.
            Inside this workspace, add the packages using the workspace protocol
            and import the stylesheet once.
          </p>
          <pre tabIndex={0} aria-label="Installation code">
            <code>{`import '@react-uikit/tokens/theme.css';
import { Button } from '@react-uikit/core';

<Button>Continue</Button>`}</code>
          </pre>
        </section>
        <Demo />
        <section>
          <h2>Designed for the web.</h2>
          <p>
            Native form semantics, visible keyboard focus, system fonts, and
            light or dark appearance. Glass uses a solid fallback when blur is
            unavailable or reduced transparency is preferred.
          </p>
          <p>
            Browser accessibility verification is still pending. This
            independent project is not affiliated with Apple.
          </p>
        </section>
      </main>
      <footer>React UIKit · Early development</footer>
    </>
  );
}
