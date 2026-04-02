import { routing } from "@/i18n/routing";
import { getAllArticles } from "@/lib/contentful/article";
import { getCategories } from "@/lib/contentful/category";

export const locales = routing.locales

// Map route lang to Contentful locale
export const localeMap: Record<string, string> = {
    en: "en-CA",
    fr: "fr-CA",
};

export async function generateCategoryPaths() {
    // Map langs to promises fetching their categories
    const allPaths = await Promise.all(
        locales.map(async (locale) => {

            const categories = await getCategories(localeMap[locale]);
            return categories.map((cat: any) => ({
                lang: locale, category: cat.slug,
            }));
        })
    );


    // Flatten the array of arrays into a single array
    return allPaths.flat();
}

export async function generateSubcategoryPaths() {
    const allPaths = await Promise.all(
        locales.map(async (locale) => {

            const categories = await getCategories(localeMap[locale]);
            return categories.flatMap((cat: any) =>
                cat.subcategories.map((subcat: any) => ({
                    lang: locale, category: cat.slug, subcategory: subcat.slug,

                }))
            );
        })
    );


    return allPaths.flat();
}


export const generateArticlePaths = async (): Promise<{ lang: string; slug: string }[]> => {
    const allPaths = await Promise.all(
        locales.map(async (locale) => {
            const articles = await getAllArticles({ locale: localeMap[locale] });

            return articles.map((article) => ({
                lang: locale, slug: article.slug,
            }));
        })
    );


    return allPaths.flat();

};