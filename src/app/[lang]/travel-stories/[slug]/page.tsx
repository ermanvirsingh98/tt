import Link from "next/link";
import { notFound } from "next/navigation";
import { Entry } from "contentful";

import CardGrid from "@/components/CardGrid";
import Article from "@/components/Article/Article";
import Breadcrumb from "@/components/Breadcrumb";

import { TypeBlogCategorySkeleton } from "@/lib/contentful/types";
import {
  getArticleBySlug,
  getAllArticles,
  getHighlightedArticle,
} from "@/lib/contentful/article";
import { getCategryBySlug } from "@/lib/contentful/category";
import {
  generateCategoryPaths,
  generateArticlePaths,
  localeMap,
} from "@/utils/getStaticPathsWithLang";
import Category from "@/components/Category/Category";

export const revalidate = 3600;

export async function generateStaticParams() {
  const articles = await generateArticlePaths();
  const categories = await generateCategoryPaths();

  return [
    ...articles.map((article) => ({
      lang: article.lang,
      slug: article.slug,
    })),
    ...categories.map((category) => ({
      lang: category.lang,
      slug: category.category,
    })),
  ];
}

const Page = async ({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) => {
  const { lang, slug } = await params;

  const locale = localeMap[lang];

  const category = await getCategryBySlug(slug, locale);
  if (category) {
    return <Category category={category} lang={lang} locale={locale} />;
  }

  const article = await getArticleBySlug(slug, locale);
  if (article) return <Article article={article} lang={lang} />;

  return notFound();
};

export default Page;
