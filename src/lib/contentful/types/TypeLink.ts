import type { ChainModifiers, Entry, EntryFieldTypes, EntrySkeletonType, LocaleCode } from "contentful";

/**
 * Fields type definition for content type 'TypeLink'
 * @name TypeLinkFields
 * @type {TypeLinkFields}
 * @memberof TypeLink
 */
export interface TypeLinkFields {
    /**
     * Field type definition for field 'title' (Title)
     * @name Title
     * @localized false
     */
    title: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'variant' (Variant)
     * @name Variant
     * @localized false
     */
    variant: EntryFieldTypes.Symbol<"Action (Inverse Filled)" | "Action (Inverse)" | "Action (Outline)" | "Action" | "IconOnly" | "NoStyle" | "Primary (Inverse Filled)" | "Primary (Inverse)" | "Primary (Outline)" | "Primary" | "Utility">;
    /**
     * Field type definition for field 'type' (Type)
     * @name Type
     * @localized false
     */
    type: EntryFieldTypes.Symbol<"button" | "link">;
    /**
     * Field type definition for field 'linkText' (Link Text)
     * @name Link Text
     * @localized true
     * @summary The text displayed in a link. Also used as image alt text if an image is selected.
     */
    linkText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'url' (URL)
     * @name URL
     * @localized true
     */
    url: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'target' (Target)
     * @name Target
     * @localized false
     */
    target?: EntryFieldTypes.Symbol<"EXTERNAL_MODAL" | "_blank" | "_parent" | "_self" | "_top">;
    /**
     * Field type definition for field 'image' (Image)
     * @name Image
     * @localized true
     */
    image?: EntryFieldTypes.Object;
    /**
     * Field type definition for field 'imageAltText' (Image Alt Text)
     * @name Image Alt Text
     * @localized true
     */
    imageAltText?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'iconName' (Icon Name)
     * @name Icon Name
     * @localized false
     */
    iconName?: EntryFieldTypes.Symbol;
    /**
     * Field type definition for field 'iconPlacement' (Icon Placement)
     * @name Icon Placement
     * @localized false
     */
    iconPlacement?: EntryFieldTypes.Symbol<"Left" | "Right">;
    /**
     * Field type definition for field 'linkSize' (Size)
     * @name Size
     * @localized false
     */
    linkSize?: EntryFieldTypes.Symbol<"Large" | "Medium" | "Small" | "X-Large">;
    /**
     * Field type definition for field 'theme' (Theme)
     * @name Theme
     * @localized false
     */
    theme: EntryFieldTypes.Symbol<"Dark" | "Light">;
    /**
     * Field type definition for field 'align' (Alignment)
     * @name Alignment
     * @localized false
     */
    align?: EntryFieldTypes.Symbol<"center" | "left" | "right">;

}

/**
 * Entry skeleton type definition for content type 'link' (🧩 Link / Button)
 * @name TypeLinkSkeleton
 * @type {TypeLinkSkeleton}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:41:58.120Z
 * @version 24
 */
export type TypeLinkSkeleton = EntrySkeletonType<TypeLinkFields, "link">;
/**
 * Entry type definition for content type 'link' (🧩 Link / Button)
 * @name TypeLink
 * @type {TypeLink}
 * @author 0QkXKo3lsdFkha69dqkpUu
 * @since 2025-01-29T03:41:58.120Z
 * @version 24
 */
export type TypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode = LocaleCode> = Entry<TypeLinkSkeleton, Modifiers, Locales>;

export function isTypeLink<Modifiers extends ChainModifiers, Locales extends LocaleCode>(entry: Entry<EntrySkeletonType, Modifiers, Locales>): entry is TypeLink<Modifiers, Locales> {
    return entry.sys.contentType.sys.id === 'link'
}

export type TypeLinkWithoutLinkResolutionResponse = TypeLink<"WITHOUT_LINK_RESOLUTION">;
export type TypeLinkWithoutUnresolvableLinksResponse = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS">;
export type TypeLinkWithAllLocalesResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutLinkResolutionResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_LINK_RESOLUTION" | "WITH_ALL_LOCALES", Locales>;
export type TypeLinkWithAllLocalesAndWithoutUnresolvableLinksResponse<Locales extends LocaleCode = LocaleCode> = TypeLink<"WITHOUT_UNRESOLVABLE_LINKS" | "WITH_ALL_LOCALES", Locales>;
