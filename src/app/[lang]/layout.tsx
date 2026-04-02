import { ReactNode } from "react";
import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Header";
import Footer from "@/components/Footer";

import "@/styles/index.scss";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ lang: locale }));
}

export default async function Layout({
  children,
  params,
}: {
  children: ReactNode;
  params: any;
}) {
  const { lang } = await params;
  return (
    <html lang={lang}>
      <body className="container">
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
