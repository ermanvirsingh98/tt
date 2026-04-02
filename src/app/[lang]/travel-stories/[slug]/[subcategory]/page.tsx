import Breadcrumb from "@/components/Breadcrumb";
import CardGrid from "@/components/CardGrid";
import { getAllArticles } from "@/lib/contentful/article";
import {
  getCategryBySlug,
  getSubcategoryBySlug,
} from "@/lib/contentful/category";
import {
  localeMap,
  generateSubcategoryPaths,
} from "@/utils/getStaticPathsWithLang";
import { notFound } from "next/navigation";
import React from "react";

export const revalidate = 3600;

export async function generateStaticParams() {
  const subcategories = await generateSubcategoryPaths();
  return [
    ...subcategories.map((s) => ({
      lang: s.lang,
      slug: s.category,
      subcategory: s.subcategory,
    })),
  ];
}

const Page = async ({
  params,
}: {
  params: Promise<{
    lang: string;
    subcategory: string;
    slug: string;
  }>;
}) => {
  const { lang, subcategory, slug } = await params;

  const locale = localeMap[lang];

  const category = await getCategryBySlug(slug, locale);
  const categoryName = category?.fields.name as string | undefined;

  const subcategoryData = await getSubcategoryBySlug(subcategory, locale);

  if (!subcategoryData) {
    return notFound();
  }

  const artilces = await getAllArticles({
    locale,
    limit: 6,
    query: {
      "fields.subcategories.sys.id[in]": subcategoryData.id,
    },
  });

  const breadcrumbs = [
    { label: "Travel Stories", href: `/${lang}/travel-stories` },
    {
      label: categoryName ?? "",
      href: `/${lang}/travel-stories/${slug}`,
    },
    {
      label: subcategoryData.name,
    },
  ];

  return (
    <div>
      <Breadcrumb items={breadcrumbs} />

      <section>
        <h1>{subcategoryData.heading}</h1>
        <CardGrid
          columns={3}
          items={artilces.map((post: any) => {
            const { name, slug: defautSlug, author } = post;
            return {
              name,
              slug: `/${lang}/travel-stories/${defautSlug}`,
              imageUrl: "https://placehold.co/400",
              author: author?.fields?.name,
            };
          })}
        />
      </section>
    </div>
  );
};

export default Page;
