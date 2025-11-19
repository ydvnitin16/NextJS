import { NextResponse } from 'next/server';

export async function proxy(request) {
    console.log('proxy...')
    if(request.nextUrl.pathname === '/'){
        request.nextUrl.pathname = '/auth'
        // const rewriteURL = new URL('http://localhost:3000/api/check')
        return NextResponse.redirect(request.nextUrl)
    }
    // if (!body.pass) {
    //     return NextResponse.json(
    //         { success: false, error: 'you are not authorized' },
    //         { status: 401 }
    //     );
    // }
    return NextResponse.next();
}

export const config = {
    matcher: '/'
}