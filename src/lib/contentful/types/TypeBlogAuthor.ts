import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeBlogAuthor'
 * @name TypeBlogAuthorFields
 * @type {TypeBlogAuthorFields}
 * @memberof TypeBlogAuthor
 */
export interface TypeBlogAuthorFields {
    /**
     * Field type definition for field 'name' (Name)
     * @name Name
     * @localized false
     */
    name: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized false
     */
    image?: EntryFieldTypes.Object;
}

/**
 * Entry skeleton type definition for content type 'blogAuthor' (🔩 Blog Author)
 * @name TypeBlogAuthorSkeleton
 * @type {TypeBlogAuthorSkeleton}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-23T20:05:52.346Z
 * @version 9
 */
export type TypeBlogAuthorSkeleton = EntrySkeletonType<TypeBlogAuthorFields, "blogAuthor">;
/**
 * Entry type definition for content type 'blogAuthor' (🔩 Blog Author)
 * @name TypeBlogAuthor
 * @type {TypeBlogAuthor}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-02-23T20:05:52.346Z
 * @version 9
 */
export type TypeBlogAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogAuthorSkeleton, Modifiers, Locales>;

export function isTypeBlogAuthor<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogAuthor<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogAuthor'
}

export type TypeBlogAuthorWithoutLinkResolutionResponse = TypeBlogAuthor<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogAuthorWithoutUnresolvableLinksResponse = TypeBlogAuthor<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogAuthorWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogAuthor<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogAuthorWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogAuthor<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogAuthorWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogAuthor<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
