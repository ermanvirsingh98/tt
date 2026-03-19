import { getArticleBySlug } from "@/lib/functions/article";
import { getCategryBySlug } from "@/lib/functions/category";
import {
  generateCategoryPaths,
  generateArticlePaths,
  localeMap,
  generateSubcategoryPaths,
} from "@/utils/getStaticPathsWithLang";
import React from "react";

export async function generateStaticParams() {
  const articles = await generateArticlePaths();
  const categories = await generateCategoryPaths();

  // const subcategories = await generateSubcategoryPaths();

  return [
    ...articles.map((article) => ({ lang: article.lang, slug: article.slug })),
    ...categories.map((category) => ({
      lang: category.lang,
      slug: category.category,
    })),
    // ...subcategories.map((subcategory) => ({
    //   lang: subcategory.lang,
    //   slug: subcategory.subcategory,
    // })),
  ];
}

const Page = async ({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) => {
  const { lang, slug } = await params;

  console.log("lang", localeMap[lang]);

  const locale = localeMap[lang];

  // Check stories first (or use a unified API)
  const article = await getArticleBySlug(slug, locale);
  if (article)
    return (
      <div>
        <div>Article {slug}</div>
        <pre>{JSON.stringify(article, null, 2)}</pre>
      </div>
    );

  const category = await getCategryBySlug(slug, locale);
  if (category)
    return (
      <div>
        <div>Category {slug}</div>
        <pre>{JSON.stringify(category, null, 2)}</pre>
      </div>
    );

  // notFound(); // 404 if neither

  return <div>Not found</div>;
};

export default Page;
