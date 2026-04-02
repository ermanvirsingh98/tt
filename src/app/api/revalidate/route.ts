// app/api/revalidate/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
export async function POST(req: NextRequest) {

    try {

        const body = await req.json();


        const secret = req.headers.get("x-revalidate-secret");

        if (secret !== process.env.MY_SECRET_TOKEN) {
            return NextResponse.json(
                { message: 'Invalid token' },
                { status: 401 }
            );
        }

        // Contentful fields
        const fields = body?.fields;

        // Extract slug per locale
        const locales = Object.keys(fields?.slug || {});

        if (!locales.length) {
            return NextResponse.json({ message: "No slug found" }, { status: 400 });
        }

        // Revalidate all locales
        locales.forEach((locale) => {
            const slug = fields.slug[locale];

            if (slug) {
                revalidatePath(`/${locale}/travel-stories/${slug}`);
            }
        });

        return NextResponse.json({ revalidated: true });
    } catch (err) {
        return NextResponse.json({ error: "Something broke" }, { status: 500 });
    }
}