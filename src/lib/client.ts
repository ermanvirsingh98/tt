import { createClient } from 'contentful';

export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID as string,
    accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN as string,
    environment: process.env.CONTENTFUL_ENVIRONMENT as string
});


export async function getEntries(contentType: string, query = {}) {
    console.log('Calling Contentful for:', contentType);

    const response = await contentfulClient.getEntries({
        content_type: contentType,
        include: 5,
        ...query,
    });
    console.log('Received entries:', response.items.length);


    return response.items;
}