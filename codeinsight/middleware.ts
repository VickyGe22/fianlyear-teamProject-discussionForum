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


// import { clerkMiddleware } from "@clerk/nextjs/server";

// export default clerkMiddleware();

// export const config = {
//   matcher: ["/((?!.*\..*|_next).*)", "/", "/(api|trpc)(.*)"],
// };