import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the path is just the root "/"
  if (request.nextUrl.pathname === '/') {
    // Redirect to /en by default
    return NextResponse.redirect(new URL('/en', request.url));
  }

  // For all other paths, continue normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.png|.*\\.jpg|.*\\.jpeg|.*\\.webp|.*\\.svg).*)',
  ],
}; 