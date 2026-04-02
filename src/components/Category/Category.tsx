// @ts-nocheck

import React from "react";
import Breadcrumb from "../Breadcrumb";
import { Entry } from "contentful";
import {
  TypeBlogCategorySkeleton,
  TypeResponsiveBannerSkeleton,
} from "@/lib/contentful/types";
import {
  getAllArticles,
  getHighlightedArticle,
} from "@/lib/contentful/article";
import Link from "next/link";
import CardGrid from "../CardGrid";

const Category = async ({
  category,
  lang,
  locale,
}: {
  category: Entry<TypeBlogCategorySkeleton>;
  lang: string;
  locale: string;
}) => {
  const subcategories =
    (category.fields?.subcategories as Entry<TypeBlogCategorySkeleton>[]) ?? [];

  const subcategoryIds = Array.isArray(subcategories)
    ? subcategories.map((sub) => sub?.sys.id)
    : [];

  const latestArtilces = await getAllArticles({
    locale,
    limit: 6,
    query: {
      "fields.subcategories.sys.id[in]": subcategoryIds,
    },
  });

  // get highlight article
  const highlightArticle = getHighlightedArticle(category);

  const heroBanner = category.fields
    .heroImage as Entry<TypeResponsiveBannerSkeleton>;

  const sections = category.fields?.sections as any;

  const renderSections = () => {
    if (!sections) {
      return null;
    }

    return (
      <div>
        {sections.map((section: any) => (
          <div>
            <h2>{section.fields.bannerTitle}</h2>
            <p>{section.fields.bannerDescription}</p>

            <div className="banner">
              <img
                width={"100%"}
                src={section.fields.banners?.[0].fields.cloudinaryAsset[0].url}
              />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="banner">
        <img
          width={"100%"}
          src={heroBanner.fields.banners?.[0].fields.cloudinaryAsset[0].url}
        />
        <h2>{heroBanner.fields.bannerTitle}</h2>
        <p>{heroBanner.fields.bannerDescription}</p>
      </div>

      <div>
        <Breadcrumb
          items={[
            { label: "Travel Stories", href: `/${lang}/travel-stories` },
            { label: `${category.fields.name}` },
          ]}
        />
      </div>

      <span>{category.fields.name as string}</span>
      {highlightArticle && (
        <section>
          <h1>Highlighed article</h1>
          <div className="highlight-article">
            <img
              src="https://placehold.co/400"
              alt={highlightArticle.name as string}
            />
            <div>
              <h2>{highlightArticle?.name as string}</h2>
              {/* <p>{highlightArticle?.description}</p> */}
              <Link href={highlightArticle.slug}>Read more</Link>
            </div>
          </div>
        </section>
      )}
      <section>
        <h1>Latest articles goes here lorem ipsum H2</h1>
        <CardGrid
          columns={3}
          items={latestArtilces.map((post: any) => {
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
      <section>
        <h1>{category.fields?.subcategoryHeading as string}</h1>

        <div>
          {subcategories.map((sub: any) => (
            <Link
              className="sub-button"
              href={`/${lang}/travel-stories/${category.fields.slug}/${sub.fields.slug}`}
              key={sub.sys.id}
            >
              {sub.fields.name}
            </Link>
          ))}
        </div>
      </section>
      <section>{renderSections()}</section>
    </div>
  );
};

export default Category;
