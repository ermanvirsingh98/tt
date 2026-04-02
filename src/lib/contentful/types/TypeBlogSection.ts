import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeResponsiveBannerSkeleton } from "./TypeResponsiveBanner";

/**
 * Fields type definition for content type 'TypeBlogSection'
 * @name TypeBlogSectionFields
 * @type {TypeBlogSectionFields}
 * @memberof TypeBlogSection
 */
export interface TypeBlogSectionFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'heading' (Heading)
     * @name Heading
     * @localized true
     */
    heading: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'banner' (Banner)
     * @name Banner
     * @localized false
     */
    banner: EntryFieldTypes.EntryLink<TypeResponsiveBannerSkeleton>;
}

/**
 * Entry skeleton type definition for content type 'blogSection' (🧩 Advertising Section)
 * @name TypeBlogSectionSkeleton
 * @type {TypeBlogSectionSkeleton}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-03-12T17:45:07.855Z
 * @version 5
 */
export type TypeBlogSectionSkeleton = EntrySkeletonType<TypeBlogSectionFields, "blogSection">;
/**
 * Entry type definition for content type 'blogSection' (🧩 Advertising Section)
 * @name TypeBlogSection
 * @type {TypeBlogSection}
 * @author 204Z94kz80ixXpExAcccVo
 * @since 2026-03-12T17:45:07.855Z
 * @version 5
 */
export type TypeBlogSection<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeBlogSectionSkeleton, Modifiers, Locales>;

export function isTypeBlogSection<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeBlogSection<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'blogSection'
}

export type TypeBlogSectionWithoutLinkResolutionResponse = TypeBlogSection<"WITHOUT_LINK_RESOLUTION">;
export type TypeBlogSectionWithoutUnresolvableLinksResponse = TypeBlogSection<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeBlogSectionWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSection<"WITH_ALL_LOCALES", Locales>;
export type TypeBlogSectionWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSection<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeBlogSectionWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeBlogSection<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
