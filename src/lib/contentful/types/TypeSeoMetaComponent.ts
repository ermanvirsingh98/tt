import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeSeoMetaComponent'
 * @name TypeSeoMetaComponentFields
 * @type {TypeSeoMetaComponentFields}
 * @memberof TypeSeoMetaComponent
 */
export interface TypeSeoMetaComponentFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized true
     * @summary Recommended: Should be no more than 65 characters if applicable
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'description' (Description)
     * @name Description
     * @localized true
     */
    description?: EntryFieldTypes.Text;
    /**
     * Field type definition for field 'author' (Author)
     * @name Author
     * @localized true
     */
    author?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'robots' (Robots)
     * @name Robots
     * @localized false
     */
    robots?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"follow" | "index" | "noarchive" | "nocache" | "nofollow" | "noimageindex" | "noindex" | "none" | "nosnippet">>;
    /**
     * Field type definition for field 'keywords' (Keywords)
     * @name Keywords
     * @localized true
     */
    keywords?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'revisitAfterNumberOfDays' (Revisit after (number of days))
     * @name Revisit after (number of days)
     * @localized false
     */
    revisitAfterNumberOfDays?: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'canonicals' (Canonicals)
     * @name Canonicals
     * @localized true
     */
    canonicals?: EntryFieldTypes.Array<EntryFieldTypes.Symbol>;
    /**
     * Field type definition for field 'type' (Type)
     * @name Type
     * @localized false
     */
    type?: EntryFieldTypes.Symbol<"actor" | "article" | "author" | "blog" | "book" | "city" | "country" | "food" | "game" | "movie" | "politician" | "website">;
    /**
     * Field type definition for field 'cloudinaryImage' (Cloudinary Image)
     * @name Cloudinary Image
     * @localized false
     */
    cloudinaryImage?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'copyBlock' (Copy Block)
     * @name Copy Block
     * @localized true
     */
    copyBlock?: EntryFieldTypes.Text;
}

/**
 * Entry skeleton type definition for content type 'seoMetaComponent' (⚙ SEO Meta Component)
 * @name TypeSeoMetaComponentSkeleton
 * @type {TypeSeoMetaComponentSkeleton}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:41:59.691Z
 * @version 1
 */
export type TypeSeoMetaComponentSkeleton = EntrySkeletonType<TypeSeoMetaComponentFields, "seoMetaComponent">;
/**
 * Entry type definition for content type 'seoMetaComponent' (⚙ SEO Meta Component)
 * @name TypeSeoMetaComponent
 * @type {TypeSeoMetaComponent}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:41:59.691Z
 * @version 1
 */
export type TypeSeoMetaComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeSeoMetaComponentSkeleton, Modifiers, Locales>;

export function isTypeSeoMetaComponent<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeSeoMetaComponent<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'seoMetaComponent'
}

export type TypeSeoMetaComponentWithoutLinkResolutionResponse = TypeSeoMetaComponent<"WITHOUT_LINK_RESOLUTION">;
export type TypeSeoMetaComponentWithoutUnresolvableLinksResponse = TypeSeoMetaComponent<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeSeoMetaComponentWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaComponent<"WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaComponentWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaComponent<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeSeoMetaComponentWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeSeoMetaComponent<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
