import { getLocale, getTranslations } from "next-intl/server";
import Link from "next/link";

export default async function NotFound() {
  const locale = await getLocale();
  const t = await getTranslations("NotFound");

  return (
    <div>
      <h1>{t("title")}</h1>
      <p>{t("description")}</p>
      <Link href={`/${locale}`}>{t("backHome")}</Link>
    </div>
  );
}
