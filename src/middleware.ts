import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // For now, we'll use a simple session check
  // In a real app, you would check for a valid session/token
  const isAuthenticated = request.cookies.has('session');

  // Redirect authenticated users trying to access auth pages
  if (isAuthenticated && (pathname === '/login' || pathname === '/signup')) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  // Redirect unauthenticated users trying to access protected pages
  if (!isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard/:path*',
    '/interviews/:path*',
    '/candidates/:path*',
    '/reports/:path*',
    '/settings/:path*',
  ],
} 