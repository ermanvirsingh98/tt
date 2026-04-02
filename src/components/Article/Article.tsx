"use client";
import { formatDate } from "@/utils/formatDate";
import { getReadTime } from "@/utils/getReadTime";
import RichText from "../RichText";
import Breadcrumb from "../Breadcrumb";
import { Heading } from "@sunwing/wvi-components";

const Article = ({ article, lang }: any) => {
  const breadcrumbs = [
    { label: "Travel Stories", href: `/${lang}/travel-stories` },
    {
      label: article.relation?.category?.fields?.name,
      href: `/${lang}/travel-stories/${article.relation?.category?.fields?.slug}`,
    },
    {
      label: article.relation?.subcategory?.fields?.name,
      href: `/${lang}/travel-stories/${article.relation?.category?.fields?.slug}/${article.relation?.subcategory?.fields?.slug}`,
    },
    {
      label: article?.name,
    },
  ];
  return (
    <div>
      <Breadcrumb items={breadcrumbs} />
      <section>
        <div className="banner">
          <img
            width={"100%"}
            src={
              article?.heroImage.fields.banners?.[0].fields.cloudinaryAsset[0]
                .url
            }
          />
          <h2>{article?.heroImage.fields.bannerTitle}</h2>
          <p>{article?.heroImage.fields.bannerDescription}</p>
        </div>
      </section>
      <section>
        <Heading Tag="h1">{article.name}</Heading>
        {/* <h1>{article.name}</h1> */}
        <div className="meta">
          <span>{article?.author?.fields?.name}</span> |
          <span>{formatDate(article.publicationDate)}</span> |
          <span>{getReadTime(article.content).text}</span>
        </div>
        <RichText content={article.content} />
      </section>
    </div>
  );
};

export default Article;
