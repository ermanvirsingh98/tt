import { getEntries } from "../contentful/client";

import type { Document } from "@contentful/rich-text-types";
import { getCategoryBySubId } from "./category";
import { Entry } from "contentful";
import { TypeBlogArticleSkeleton, TypeBlogAuthorSkeleton, TypeBlogCategorySkeleton, TypeBlogSubcategorySkeleton, TypeResponsiveBannerSkeleton } from "./types";
import { TypeSeoMetaComponentSkeleton } from "./types/TypeSeoMetaComponent";



export interface Article {
    id: string;
    name: string;
    slug: string;
    publicationDate: string;
    author?: Entry<TypeBlogAuthorSkeleton>;
    relation: {
        category: Entry<TypeBlogCategorySkeleton> | undefined;
        subcategory: Entry<TypeBlogSubcategorySkeleton> | undefined
    };
    content?: Document;
    subcategories?: Entry<TypeBlogSubcategorySkeleton>[];
    seo: Entry<TypeSeoMetaComponentSkeleton>;
    heroImage?: Entry<TypeResponsiveBannerSkeleton>;
};

export async function getAllArticles({ locale, limit, query }: {
    locale: string;
    limit?: number;
    query?: any;
}): Promise<Article[]> {
    const articles = await getEntries<TypeBlogArticleSkeleton>("blogArticle", {
        order: "-sys.createdAt",
        locale,
        limit,
        ...query,
    });


    return Promise.all(
        articles.map((post) =>
            formatArticle(post, locale)
        )
    );
}
export async function getArticleBySlug(slug: string, locale: string): Promise<Article | null> {
    const entries = await getEntries<TypeBlogArticleSkeleton>("blogArticle", {
        "fields.slug": slug,
        locale,
    });

    if (entries.length === 0) return null
    return formatArticle(entries[0], locale);
}
async function formatArticle(
    post: Entry<TypeBlogArticleSkeleton>,
    locale: string
): Promise<Article> {

    const primarySubcategory = (post.fields.subcategories as Entry<TypeBlogSubcategorySkeleton>[])?.[0]
    const primarySubcategoryId = primarySubcategory?.sys?.id as string
    const primaryCateogory = await getCategoryBySubId(primarySubcategoryId, locale) as Entry<TypeBlogCategorySkeleton>;

    const relation = {
        category: primaryCateogory,
        subcategory: primarySubcategory
    }

    return {
        id: post.sys.id,
        name: post.fields.name as string,
        slug: post.fields.slug as string,
        seo: post.fields.seo as Entry<TypeSeoMetaComponentSkeleton>,
        heroImage: post.fields.heroImage as Entry<TypeResponsiveBannerSkeleton> | undefined,
        content: post.fields.content as Document,
        author: post.fields.author as Entry<TypeBlogAuthorSkeleton> | undefined,
        publicationDate: post.fields.publicationDate as string,
        relation
    };
}

// get highlight article
export const getHighlightedArticle = (data: Entry<TypeBlogCategorySkeleton>) => {
    if (!data?.fields?.highlightedArticle) return null;

    const article = data.fields.highlightedArticle as Entry<TypeBlogArticleSkeleton>;

    return {
        name: article?.fields.name,
        slug: article?.fields.slug,
        publishDate: article?.fields.publicationDate,
        author: article?.fields.author,
        seo: article?.fields.seo,
    };
};
