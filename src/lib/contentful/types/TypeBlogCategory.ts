import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogArticleSkeleton } from "./TypeBlogArticle";
import type { TypeBlogSubcategorySkeleton } from "./TypeBlogSubcategory";
import type { TypeResponsiveBannerSkeleton } from "./TypeResponsiveBanner";

/**
 * Fields type definition for content type 'TypeBlogCategory'
 * @name TypeBlogCategoryFields
 * @type {TypeBlogCategoryFields}
 * @memberof TypeBlogCategory
 */
export interface TypeBlogCategoryFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized true
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'slug' (Slug)
     * @name Slug
     * @localized true
     */
    slug: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized true
     */
    image?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'heroImage' (Hero Image)
     * @name Hero Image
     * @localized false
     */
    heroImage?: EntryFieldTypes.EntryLink<TypeResponsiveBannerSkeleton>;
    /**
     * Field type definition for field 'highlightedArticle' (Highlighted Article)
     * @name Highlighted Article
     * @localized false
     * @summary Enable this only for category pages. Do not enable if the slug is "all"
     */
    highlightedArticle?: EntryFieldTypes.EntryLink<TypeBlogArticleSkeleton>;
    /**
     * Field type definition for field 'subcategoryHeading' (Subcategory Heading)
     * @name Subcategory Heading
     * @localized true
     * @summary Subcategory heading only accepted for Category page. Do not use when the slug is "all"
     */
    subcategoryHeading?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subcategoryDescription' (Subcategory Description)
     * @name Subcategory Description
     * @localized true
     * @summary Subcategory description only accepted for Category page. Do not use when the slug is "all"
     */
    subcategoryDescription?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'subcategories' (Subcategories)
     * @name Subcategories
     * @localized false
     * @summary Categories only accepted for Landing page (Only Top 3 are used)
     */
    subcategories?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogCategorySkeleton | TypeBlogSubcategorySkeleton>>;
    /**
     * Field type definition for field 'sections' (Sections)
     * @name Sections
     * @localized false
     * @summary Only for Categories pages
     */
    sections?: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeResponsiveBannerSkeleton>>;
}

/**
 * Entry skeleton type definition for content type 'blogCategory' (⚙ Blog Category)
 * @name TypeBlogCategorySkeleton
 * @type {TypeBlogCategorySkeleton}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-20T16:18:55.979Z
 * @version 65
 */
export type TypeBlogCategorySkeleton = EntrySkeletonType<TypeBlogCategoryFields, "blogCategory">;
/**
 * Entry type definition for content type 'blogCategory' (⚙ Blog Category)
 * @name TypeBlogCategory
 * @type {TypeBlogCategory}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-20T16:18:55.979Z
 * @version 65
 */
export type TypeBlogCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogCategorySkeleton, Modifiers, Locales>;

export function isTypeBlogCategory<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogCategory<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogCategory'
}

export type TypeBlogCategoryWithoutLinkResolutionResponse = TypeBlogCategory<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogCategoryWithoutUnresolvableLinksResponse = TypeBlogCategory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogCategoryWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogCategory<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogCategoryWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogCategory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogCategoryWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogCategory<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
