

import { getEntries } from '../client';


// Get landing page
export async function getLandingPage(locale: string): Promise<any> {
    const entries = await getEntries("blogCategory", {
        "fields.slug": "all",
        locale,
    });

    const subcategories = entries[0]?.fields?.subcategories || [];
    const subcategoriesArray = Array.isArray(subcategories) ? subcategories : [];

    const data = {
        name: entries[0].fields.name,
        slug: entries[0].fields.slug,
        displayImage: entries[0].fields.displayImage,
        subcategories: subcategoriesArray
    }
    return data
}
// Get all categories exclude slug="all"
export const getCategories = async (locale: string): Promise<any> => {
    const entries = await getEntries("blogCategory", {
        locale,
        "fields.slug[ne]": "all",
    });

    const formatCategories = entries.map((post: any) => {
        const { name, slug, subcategories } = post.fields;

        const formatedSubcategories = subcategories.map((sub: any) => {
            const { slug } = sub.fields;
            return {
                id: sub.sys.id,
                slug,
            };
        })

        return {
            id: post.sys.id,
            name,
            slug,
            subcategories: formatedSubcategories

        };
    })
    return formatCategories
}
// get category by slug
export const getCategryBySlug = async (slug: string, locale: string): Promise<any> => {
    const entries = await getEntries("blogCategory", {
        "fields.slug": slug,
        locale,
    });
    return entries[0];
}
// get subcategory by slug
export const getSubcategoryBySlug = async (slug: string, locale: string): Promise<any> => {
    const entries = await getEntries("blogSubcategory", {
        "fields.slug": slug,
        locale,
    });
    return {
        id: entries[0]?.sys?.id,
        name: entries[0]?.fields?.name,
        slug: entries[0]?.fields?.slug,
        heading: entries[0]?.fields?.heading,
        description: entries[0]?.fields?.description
    }
}

// get category by subcategory)
export const getCategoryBySubId = async (id: string, locale: string) => {
    const entries = await getEntries("blogCategory", {
        "fields.subcategories.sys.id": id,
        locale,
    });
    return entries[0];
}

// get highlight article
export const getHighlightArticle = (data: any) => {

    if (!data?.fields?.highlightArticle) return null;

    const article = data.fields.highlightArticle.fields;


    return {
        name: article.name,
        slug: article.slug,
        pageSections: article.pageSections,
        publishDate: article.publishDate,
        author: article.author,
        SEO: article.SEO,
    };
};




