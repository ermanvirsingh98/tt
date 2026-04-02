import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";
import type { TypeLinkSkeleton } from "./TypeLink";
import type { TypeResponsiveBannerImageSkeleton } from "./TypeResponsiveBannerImage";

/**
 * Fields type definition for content type 'TypeResponsiveBanner'
 * @name TypeResponsiveBannerFields
 * @type {TypeResponsiveBannerFields}
 * @memberof TypeResponsiveBanner
 */
export interface TypeResponsiveBannerFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'banners' (Banners)
     * @name Banners
     * @localized false
     */
    banners: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TypeResponsiveBannerImageSkeleton>>;
    /**
     * Field type definition for field 'bannerTitle' (Banner Title)
     * @name Banner Title
     * @localized true
     */
    bannerTitle?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'bannerDescription' (Banner description)
     * @name Banner description
     * @localized true
     * @summary Enter a brief description of the banner image to support accessibility
     */
    bannerDescription?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'useDynamicButton' (Use dynamic button?)
     * @name Use dynamic button?
     * @localized false
     * @summary Automatically scales to website break points
     */
    useDynamicButton?: EntryFieldTypes.Boolean;
    /**
     * Field type definition for field 'button' (Button)
     * @name Button
     * @localized false
     */
    button?: EntryFieldTypes.EntryLink<TypeLinkSkeleton>;
    /**
     * Field type definition for field 'buttonAlignment' (Button alignment)
     * @name Button alignment
     * @localized false
     * @summary Select a button alignment option
     */
    buttonAlignment?: EntryFieldTypes.Symbol<"center" | "left" | "right">;
    /**
     * Field type definition for field 'bannerUrl' (Banner URL)
     * @name Banner URL
     * @localized true
     * @summary Enter a relative path (including language) or absolute path. Used only if a button is not selected.
     */
    bannerUrl?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'target' (Target)
     * @name Target
     * @localized false
     * @summary Select the way the URL will open in the browser
     */
    target?: EntryFieldTypes.Symbol<"_blank" | "_parent" | "_self" | "_top">;
    /**
     * Field type definition for field 'margins' (Layout margins)
     * @name Layout margins
     * @localized false
     * @summary Select the padding needed for this component
     */
    margins?: EntryFieldTypes.Array<EntryFieldTypes.Symbol<"bottom" | "top">>;
}

/**
 * Entry skeleton type definition for content type 'responsiveBanner' (🧩 Responsive Banner)
 * @name TypeResponsiveBannerSkeleton
 * @type {TypeResponsiveBannerSkeleton}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:42:05.762Z
 * @version 5
 */
export type TypeResponsiveBannerSkeleton = EntrySkeletonType<TypeResponsiveBannerFields, "responsiveBanner">;
/**
 * Entry type definition for content type 'responsiveBanner' (🧩 Responsive Banner)
 * @name TypeResponsiveBanner
 * @type {TypeResponsiveBanner}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:42:05.762Z
 * @version 5
 */
export type TypeResponsiveBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeResponsiveBannerSkeleton, Modifiers, Locales>;

export function isTypeResponsiveBanner<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeResponsiveBanner<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'responsiveBanner'
}

export type TypeResponsiveBannerWithoutLinkResolutionResponse = TypeResponsiveBanner<"WITHOUT_LINK_RESOLUTION">;
export type TypeResponsiveBannerWithoutUnresolvableLinksResponse = TypeResponsiveBanner<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeResponsiveBannerWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBanner<"WITH_ALL_LOCALES", Locales>;
export type TypeResponsiveBannerWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBanner<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeResponsiveBannerWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBanner<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
