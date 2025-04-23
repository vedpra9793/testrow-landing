import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the user is authenticated
  const isAuthenticated = request.cookies.has('auth_token');
  const isAuthPage = request.nextUrl.pathname.startsWith('/login') || 
                    request.nextUrl.pathname.startsWith('/signup');

  if (!isAuthenticated && !isAuthPage) {
    // Redirect to login if not authenticated and trying to access protected route
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (isAuthenticated && isAuthPage) {
    // Redirect to dashboard if authenticated and trying to access auth pages
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}; 