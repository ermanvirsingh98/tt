// @ts-nocheck
import CardGrid from "@/components/CardGrid";
import { getTranslations } from "next-intl/server";
import { getAllArticles } from "@/lib/contentful/article";
import { getLandingPage } from "@/lib/contentful/category";
import { localeMap } from "@/utils/getStaticPathsWithLang";

export const revalidate = 3600;

export default async function LandingPage({ params }: { params: any }) {
  const { lang } = await params;

  const locale = localeMap[lang];

  const data = await getLandingPage(locale);
  const latestArtilces = await getAllArticles({
    locale,
    limit: 6,
  });

  // translations
  const t = await getTranslations("HomePage");

  return (
    <div>
      <div className="banner">
        <img
          width={"100%"}
          src={
            data?.heroImage.fields.banners?.[0].fields.cloudinaryAsset[0].url
          }
        />
        <h2>{data?.heroImage.fields.bannerTitle}</h2>
        <p>{data?.heroImage.fields.bannerDescription}</p>
      </div>
      <section>
        <h1>Category section- {t("title")}</h1>
        <CardGrid
          variant="category"
          columns={3}
          items={data.subcategories.map((post: any) => {
            const { name, slug: defautSlug } = post.fields;
            return {
              name,
              slug: `/${lang}/travel-stories/${defautSlug}`,
              imageUrl: "https://placehold.co/400",
            };
          })}
        />
      </section>
      <section>
        <h1>Latest Articles section (Top 6)</h1>

        <CardGrid
          variant="horizontal"
          columns={3}
          items={latestArtilces.map((post: any) => {
            const { name, relation, slug: defautSlug, author } = post;

            return {
              name,
              category: relation.category?.fields?.name,
              slug: `/${lang}/travel-stories/${defautSlug}`,
              imageUrl: "https://placehold.co/400",
              author: author?.fields?.name,
            };
          })}
        />
      </section>
    </div>
  );
}
