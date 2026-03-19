import { routing } from "@/i18n/routing";
import { ReactNode } from "react";
import { Locale, hasLocale, NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getLang } from "@/utils/getLang";

export const revalidate = 60;

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: getLang(locale) }));
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
