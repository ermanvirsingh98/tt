import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';

const langs = ['en', 'fr'];

export function proxy(request: NextRequest) {
    // const { pathname } = request.nextUrl;
    // const segments = pathname.split('/');

    // const lang = segments[1];

    // if (lang && !langs.includes(lang)) {
    //     return NextResponse.redirect(new URL('/en', request.url));
    // }

    // return NextResponse.next();
}