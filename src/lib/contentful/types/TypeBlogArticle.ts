import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeBlogAuthorSkeleton } from "./TypeBlogAuthor";
import type { TypeBlogSubcategorySkeleton } from "./TypeBlogSubcategory";
import type { TypeResponsiveBannerSkeleton } from "./TypeResponsiveBanner";
import type { TypeSeoMetaComponentSkeleton } from "./TypeSeoMetaComponent";

/**
 * Fields type definition for content type 'TypeBlogArticle'
 * @name TypeBlogArticleFields
 * @type {TypeBlogArticleFields}
 * @memberof TypeBlogArticle
 */
export interface TypeBlogArticleFields {
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
     * Field type definition for field 'seo' (SEO)
     * @name SEO
     * @localized false
     */
    seo: EntryFieldTypes.EntryLink<TypeSeoMetaComponentSkeleton>;
    /**
     * Field type definition for field 'heroImage' (Hero Image)
     * @name Hero Image
     * @localized false
     */
    heroImage?: EntryFieldTypes.EntryLink<TypeResponsiveBannerSkeleton>;
    /**
     * Field type definition for field 'content' (Content)
     * @name Content
     * @localized true
     */
    content: EntryFieldTypes.RichText;
    /**
     * Field type definition for field 'author' (Author)
     * @name Author
     * @localized false
     */
    author?: EntryFieldTypes.EntryLink<TypeBlogAuthorSkeleton>;
    /**
     * Field type definition for field 'subcategories' (Subcategories)
     * @name Subcategories
     * @localized false
     */
    subcategories: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeBlogSubcategorySkeleton>>;
    /**
     * Field type definition for field 'publicationDate' (Publication Date)
     * @name Publication Date
     * @localized false
     */
    publicationDate: EntryFieldTypes.Date;
}

/**
 * Entry skeleton type definition for content type 'blogArticle' (📄 Blog Article)
 * @name TypeBlogArticleSkeleton
 * @type {TypeBlogArticleSkeleton}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-20T17:20:42.619Z
 * @version 55
 */
export type TypeBlogArticleSkeleton = EntrySkeletonType<TypeBlogArticleFields, "blogArticle">;
/**
 * Entry type definition for content type 'blogArticle' (📄 Blog Article)
 * @name TypeBlogArticle
 * @type {TypeBlogArticle}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-20T17:20:42.619Z
 * @version 55
 */
export type TypeBlogArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogArticleSkeleton, Modifiers, Locales>;

export function isTypeBlogArticle<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogArticle<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogArticle'
}

export type TypeBlogArticleWithoutLinkResolutionResponse = TypeBlogArticle<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogArticleWithoutUnresolvableLinksResponse = TypeBlogArticle<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogArticleWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogArticle<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogArticleWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogArticle<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogArticleWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogArticle<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
