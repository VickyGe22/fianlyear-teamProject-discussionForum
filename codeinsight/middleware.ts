import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/signin' || path === '/signup'

  const token = request.cookies.get('token')?.value || ''

  if (isPublicPath && token) {
    return NextResponse.redirect(new URL('/', request.nextUrl))
  }

  if (!isPublicPath && !token && path !== '/') {
    return NextResponse.redirect(new URL('/signin', request.nextUrl))
  }
}

export const config = {
  matcher: [
    '/signin',
    '/signup',
  ]
}


// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(request: NextRequest) {
//   const path = request.nextUrl.pathname;

//   const isPublicPath = path === '/' || path === '/signin' || path === '/signup';
//   const token = request.cookies.get('token')?.value || '';

//   // If accessing a public path and already logged in, redirect to home
//   if (isPublicPath && token && (path === '/signin' || path === '/signup')) {
//     return NextResponse.redirect(new URL('/', request.nextUrl));
//   }

//   // If accessing a protected path and not logged in, redirect to sign-in
//   if (!isPublicPath && !token) {
//     return NextResponse.redirect(new URL('/signin', request.nextUrl));
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     '/((?!api|_next/static|_next/image|favicon.ico).*)'
//   ],
// };
