import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
// import { fetchMessages } from '@/lib/contentful';

export default getRequestConfig(async ({ requestLocale }) => {
    let locale = await requestLocale;
    if (!locale || !(routing.locales as unknown as string[]).includes(locale)) {
        locale = routing.defaultLocale;
    }
    //   Fetch messages from RCL
    // const messages = await fetchMessages(locale);
    const messages: Record<string, Record<string, string>> = {
        "HomePage": {
            "title": "Hello world!"
        },
        "NotFound": locale === 'fr' ? {
            "title": "Page introuvable",
            "description": "La page que vous recherchez n'existe pas ou a été déplacée.",
            "backHome": "Retour à l'accueil"
        } : {
            "title": "Page not found",
            "description": "The page you are looking for does not exist or has been moved.",
            "backHome": "Back to home"
        }
    }

    return {
        locale,
        messages,
    };
});