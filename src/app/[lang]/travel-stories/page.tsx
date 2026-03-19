import { routing } from "@/i18n/routing";
import { getLandingPage } from "@/lib/functions/category";
import { GetStaticPaths } from "next";
import { use } from "react";

export const revalidate = 50;

export default async function LandingPage({ params }: { params: any }) {
  // const { lang } = use(params);
  // const { locales } = routing;
  const paramss = await params;

  // const { locale } = params;

  // console.log("lang", locale);
  // console.log("locales", locales);

  // const data = await getLandingPage(`${locale}-CA`);

  return <pre>{JSON.stringify(paramss, null, 2)}</pre>;
}
