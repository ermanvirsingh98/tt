import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeResponsiveBannerImage'
 * @name TypeResponsiveBannerImageFields
 * @type {TypeResponsiveBannerImageFields}
 * @memberof TypeResponsiveBannerImage
 */
export interface TypeResponsiveBannerImageFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'cloudinaryAsset' (Cloudinary Asset)
     * @name Cloudinary Asset
     * @localized true
     */
    cloudinaryAsset?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'viewportWidth' (Viewport Width)
     * @name Viewport Width
     * @localized false
     * @summary Enter the viewport width for when this image should display
     */
    viewportWidth: EntryFieldTypes.Integer;
    /**
     * Field type definition for field 'aspectRatio' (Aspect Ratio)
     * @name Aspect Ratio
     * @localized false
     * @summary Select the image aspect ratio that will be used to crop the dimensions
     */
    aspectRatio: EntryFieldTypes.Symbol<"16:4.5" | "16:9" | "1:1" | "3:2" | "4:3">;
    /**
     * Field type definition for field 'imageWidth' (Image Width)
     * @name Image Width
     * @localized false
     * @summary Enter the image width to display
     */
    imageWidth: EntryFieldTypes.Integer;
}

/**
 * Entry skeleton type definition for content type 'responsiveBannerImage' (🔩 Responsive Banner Image)
 * @name TypeResponsiveBannerImageSkeleton
 * @type {TypeResponsiveBannerImageSkeleton}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:42:06.144Z
 * @version 1
 */
export type TypeResponsiveBannerImageSkeleton = EntrySkeletonType<TypeResponsiveBannerImageFields, "responsiveBannerImage">;
/**
 * Entry type definition for content type 'responsiveBannerImage' (🔩 Responsive Banner Image)
 * @name TypeResponsiveBannerImage
 * @type {TypeResponsiveBannerImage}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:42:06.144Z
 * @version 1
 */
export type TypeResponsiveBannerImage<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeResponsiveBannerImageSkeleton, Modifiers, Locales>;

export function isTypeResponsiveBannerImage<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeResponsiveBannerImage<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'responsiveBannerImage'
}

export type TypeResponsiveBannerImageWithoutLinkResolutionResponse = TypeResponsiveBannerImage<"WITHOUT_LINK_RESOLUTION">;
export type TypeResponsiveBannerImageWithoutUnresolvableLinksResponse = TypeResponsiveBannerImage<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeResponsiveBannerImageWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBannerImage<"WITH_ALL_LOCALES", Locales>;
export type TypeResponsiveBannerImageWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBannerImage<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeResponsiveBannerImageWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeResponsiveBannerImage<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
