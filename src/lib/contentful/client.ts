import { createClient, EntrySkeletonType } from 'contentful';

export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN as string,
    environment: process.env.CONTENTFUL_ENVIRONMENT as string
});


export async function getEntries<T extends EntrySkeletonType = EntrySkeletonType>(contentType: string, query = {}) {

    const response = await contentfulClient.getEntries<T>({
        content_type: contentType,
        include: 7,
        ...query,
    });


    return response.items;
}