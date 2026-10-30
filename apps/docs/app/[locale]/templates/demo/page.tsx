import { notFound } from "next/navigation";
import { Templates } from "../../../templates/templates";
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "vi" }];
}
export default async function TemplateDemo({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (locale !== "en" && locale !== "vi") notFound();
  return <Templates key={locale} locale={locale} />;
}
