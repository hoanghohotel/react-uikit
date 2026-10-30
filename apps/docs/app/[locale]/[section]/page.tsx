import { ResponsivePreview } from "../../responsive-preview";
import api from "../../api.json";
import { notFound } from "next/navigation";
import Link from "next/link";
import { sections, type Locale, type Section } from "../../content";
import { DocNav } from "../../doc-nav";
import { CodeBlock } from "../../code-block";
import { Demo } from "../../preview";
export function generateStaticParams() {
  return ["en", "vi"].flatMap((locale) =>
    Object.keys(sections).map((section) => ({ locale, section })),
  );
}
export default async function Documentation({
  params,
}: {
  params: Promise<{ locale: string; section: string }>;
}) {
  const { locale, section } = await params;
  if (!["en", "vi"].includes(locale) || !Object.hasOwn(sections, section))
    notFound();
  const lang = locale as Locale;
  const key = section as Section;
  const [title, heading, body] = sections[key][lang];
  return (
    <div lang={lang}>
      <header>
        <Link href="/">React UIKit</Link>
        <span>{title}</span>
      </header>
      <main className="doc-layout">
        <DocNav locale={lang} current={key} />
        <article>
          <p className="eyebrow">{title}</p>
          <h1 className="doc-title">{heading}</h1>
          <p>{body}</p>
          {[
            "installation",
            "getting-started",
            "tokens",
            "theming",
            "components",
          ].includes(key) && (
            <CodeBlock
              locale={lang}
              code={
                key === "tokens"
                  ? `@import "tailwindcss";\n@import "@react-uikit/tokens/theme.css";\n@import "@react-uikit/tokens/tailwind.css";`
                  : key === "theming"
                    ? '<div data-theme="dark">…</div>'
                    : `import '@react-uikit/tokens/theme.css';\nimport { Button } from '@react-uikit/core';\n\n<Button onClick={() => console.log('Continue')}>Continue</Button>`
              }
            />
          )}
          {["components", "glass"].includes(key) && (
            <ResponsivePreview locale={lang}>
              <Demo locale={lang} />
            </ResponsivePreview>
          )}
          {key === "components" && (
            <section
              aria-label={lang === "vi" ? "Tham chiếu API" : "API reference"}
            >
              <h2>API</h2>
              {api.map((entry) => (
                <details key={entry.package + entry.name}>
                  <summary>
                    {entry.name} <small>(@react-uikit/{entry.package})</small>
                  </summary>
                  <p>{entry.inherits}</p>
                  <div
                    className="uik-table-scroll"
                    tabIndex={0}
                    role="region"
                    aria-label={entry.name}
                  >
                    <table className="uik-table">
                      <thead>
                        <tr>
                          <th scope="col">Prop</th>
                          <th scope="col">Type</th>
                          <th scope="col">
                            {lang === "vi" ? "Bắt buộc" : "Required"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {entry.props.map((prop) => (
                          <tr key={prop.name}>
                            <td>
                              <code>{prop.name}</code>
                            </td>
                            <td>
                              <code>{prop.type}</code>
                            </td>
                            <td>{prop.required ? "Yes" : "No"}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <p>
                    <code>{entry.source}</code>
                  </p>
                </details>
              ))}
            </section>
          )}
          {key === "templates" && (
            <Link href={`/${lang}/templates/demo`}>
              {lang === "vi"
                ? "Mở mẫu tương tác"
                : "Open interactive templates"}
            </Link>
          )}
        </article>
      </main>
    </div>
  );
}
