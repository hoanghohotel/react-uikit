"use client";
import { useState } from "react";
import Link from "next/link";
import { sections, type Locale, type Section } from "./content";
export function DocNav({
  locale,
  current,
}: {
  locale: Locale;
  current: Section;
}) {
  const [query, setQuery] = useState("");
  const entries = Object.entries(sections).filter(([, value]) =>
    value[locale][0].toLocaleLowerCase().includes(query.toLocaleLowerCase()),
  );
  return (
    <aside>
      <label className="uik-field">
        <span>{locale === "vi" ? "Tìm tài liệu" : "Search documentation"}</span>
        <input
          className="uik-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type="search"
        />
      </label>
      <nav aria-label={locale === "vi" ? "Tài liệu" : "Documentation"}>
        <ul className="doc-nav">
          {entries.map(([key, value]) => (
            <li key={key}>
              <Link
                aria-current={key === current ? "page" : undefined}
                href={`/${locale}/${key}`}
              >
                {value[locale][0]}
              </Link>
            </li>
          ))}
        </ul>
        {entries.length === 0 && (
          <p role="status">
            {locale === "vi" ? "Không có kết quả" : "No results"}
          </p>
        )}
      </nav>
      <Link
        href={`/${locale === "en" ? "vi" : "en"}/${current}`}
        lang={locale === "en" ? "vi" : "en"}
      >
        {locale === "en" ? "Tiếng Việt" : "English"}
      </Link>
    </aside>
  );
}
