import { Entry } from "contentful";
import { Document } from "@contentful/rich-text-types";
import { getEntries } from "./client";
import {
    TypeBlogCategorySkeleton,
    TypeBlogSubcategorySkeleton,
    TypeResponsiveBannerSkeleton,
} from "./types";

// Get landing page
interface LandingPage {
    name: string;
    slug: string;
    heroImage: Entry<TypeResponsiveBannerSkeleton>;
    subcategories: Entry<TypeBlogCategorySkeleton>[];
}
export async function getLandingPage(locale: string): Promise<LandingPage> {
    const entries = await getEntries<TypeBlogCategorySkeleton>("blogCategory", {
        "fields.slug": "all",
        locale,
    });

    const subcategories = entries[0]?.fields
        ?.subcategories as Entry<TypeBlogCategorySkeleton>[];
    // const subcategoriesArray = Array.isArray(subcategories) ? subcategories : [];

    const data: LandingPage = {
        name: entries[0].fields.name,
        slug: entries[0].fields.slug,
        heroImage: entries[0].fields
            .heroImage as Entry<TypeResponsiveBannerSkeleton>,
        subcategories,
    };
    return data;
}

// Get all categories exclude slug="all"
interface Category {
    id: string;
    name: string;
    slug: string;
    subcategories: { id: string; slug: string }[];
}
export const getCategories = async (locale: string): Promise<Category[]> => {
    const entries = await getEntries<TypeBlogCategorySkeleton>("blogCategory", {
        locale,
        "fields.slug[ne]": "all",
    });

    const data = entries.map(
        (post: Entry<TypeBlogCategorySkeleton>): Category => {
            const { name, slug, subcategories } = post.fields;

            const formatedSubcategories = Array.isArray(subcategories)
                ? subcategories.map((sub: any) => ({
                    id: sub.sys.id,
                    slug: sub.fields.slug,
                }))
                : [];

            return {
                id: post.sys.id,
                name: name as string,
                slug: slug as string,
                subcategories: formatedSubcategories,
            };
        }
    );

    return data;
};
// get category by slug
export const getCategryBySlug = async (
    slug: string,
    locale: string
): Promise<Entry<TypeBlogCategorySkeleton> | undefined> => {
    const entries = await getEntries<TypeBlogCategorySkeleton>("blogCategory", {
        "fields.slug": slug,
        locale,
    });
    return entries[0];
};
// get subcategory by slug

interface Subcategory {
    id: string;
    name: string;
    slug: string;
    heading: string;
    description: Document;
}
export const getSubcategoryBySlug = async (
    slug: string,
    locale: string
): Promise<Subcategory> => {
    const entries = await getEntries<TypeBlogSubcategorySkeleton>(
        "blogSubcategory",
        {
            "fields.slug": slug,
            locale,
        }
    );
    return {
        id: entries[0]?.sys.id,
        name: entries[0]?.fields.name,
        slug: entries[0]?.fields.slug,
        heading: entries[0]?.fields.heading,
        description: entries[0]?.fields.description,
    };
};

// get category by subcategory)
export const getCategoryBySubId = async (id: string, locale: string) => {
    const entries = await getEntries("blogCategory", {
        "fields.subcategories.sys.id": id,
        locale,
    });
    return entries[0];
};
