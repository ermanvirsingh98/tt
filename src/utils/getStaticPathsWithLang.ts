import { routing } from "@/i18n/routing";
import { getArticles } from "@/lib/functions/article";
import { getCategories } from "@/lib/functions/category";
import { getLang } from "./getLang";

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

            const categories = await getCategories(locale);
            return categories.map((cat: any) => ({
                lang: getLang(locale), category: cat.slug,
            }));
        })
    );

    console.log("all category paths", allPaths.flat());

    // Flatten the array of arrays into a single array
    return allPaths.flat();
}

export async function generateSubcategoryPaths() {
    const allPaths = await Promise.all(
        locales.map(async (locale) => {

            const categories = await getCategories(locale);
            return categories.flatMap((cat: any) =>
                cat.subcategories.map((subcat: any) => ({
                    lang: getLang(locale), category: cat.slug, subcategory: subcat.slug,

                }))
            );
        })
    );

    return allPaths.flat();
}


export const generateArticlePaths = async () => {
    const allPaths = await Promise.all(
        locales.map(async (locale) => {
            const articles = await getArticles({ locale });

            return articles.map((article) => ({
                lang: getLang(locale), slug: article.slug,
            }));
        })
    );
    console.log("all article paths", allPaths.flat());


    return allPaths.flat();

};