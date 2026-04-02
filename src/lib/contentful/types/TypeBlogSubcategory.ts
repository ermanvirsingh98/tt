import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeBlogSubcategory'
 * @name TypeBlogSubcategoryFields
 * @type {TypeBlogSubcategoryFields}
 * @memberof TypeBlogSubcategory
 */
export interface TypeBlogSubcategoryFields {
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
     * Field type definition for field 'heading' (Heading)
     * @name Heading
     * @localized true
     */
    heading: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description: EntryFieldTypes.RichText;
}

/**
 * Entry skeleton type definition for content type 'blogSubcategory' (⚙ Blog Subcategory)
 * @name TypeBlogSubcategorySkeleton
 * @type {TypeBlogSubcategorySkeleton}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-23T18:43:00.645Z
 * @version 27
 */
export type TypeBlogSubcategorySkeleton = EntrySkeletonType<TypeBlogSubcategoryFields, "blogSubcategory">;
/**
 * Entry type definition for content type 'blogSubcategory' (⚙ Blog Subcategory)
 * @name TypeBlogSubcategory
 * @type {TypeBlogSubcategory}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-23T18:43:00.645Z
 * @version 27
 */
export type TypeBlogSubcategory<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSubcategorySkeleton, Modifiers, Locales>;

export function isTypeBlogSubcategory<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogSubcategory<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogSubcategory'
}

export type TypeBlogSubcategoryWithoutLinkResolutionResponse = TypeBlogSubcategory<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogSubcategoryWithoutUnresolvableLinksResponse = TypeBlogSubcategory<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogSubcategoryWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSubcategory<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogSubcategoryWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSubcategory<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogSubcategoryWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSubcategory<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
