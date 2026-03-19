import { getEntries } from "../client";
import { getCategoryBySubId } from "./category";

import type { Document } from "@contentful/rich-text-types";


export type Article = {
    id: string;
    name: string;
    slug: string;
    publicationDate: string;
    author: any;
    imageUrl: string;
    heroImage?: any;
    relation: {
        category: any;
        subcategory: any
    };
    content?: Document;
    subcategories?: any
    seo: any
};

export async function getArticles({ locale, limit, query }: {
    locale: string;
    limit?: number;
    query?: any;
}): Promise<Article[]> {
    const articles = await getEntries("blogArticle", {
        order: "-sys.createdAt",
        locale,
        limit,
        ...query,
    });


    return Promise.all(
        articles.map((post: any) =>
            formatArticle(post, locale as string)
        )
    );
}
export async function getArticleBySlug(slug: string, locale: string) {
    const entries = await getEntries("blogArticle", {
        "fields.slug": slug,
        locale,
    });

    if (entries.length === 0) return null
    return formatArticle(entries[0], locale);
}
async function formatArticle(
    post: any,
    locale: string
): Promise<Article> {

    const { name, slug, seo, heroImage, content, publicationDate, author, imageUrl } = post.fields;

    // Format the article here
    const primarySubcategory = post.fields.subcategories?.[0] as any
    const primaryCateogory = await getCategoryBySubId(primarySubcategory?.sys?.id, locale);
    const relation = {
        category: primaryCateogory,
        subcategory: primarySubcategory
    }

    return {
        id: post.sys.id,
        name,
        slug,
        seo,
        imageUrl,
        heroImage,
        content,
        author,
        publicationDate,
        relation
    };
}
