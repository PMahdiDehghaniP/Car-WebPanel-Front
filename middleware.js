import { NextResponse } from 'next/server';
import { auth } from './auth';

export async function middleware(req) {
  const session = await auth();
  if (
    !session ||
    !session?.accessToken ||
    session?.error === 'RefreshAccessTokenError'
  ) {
    return NextResponse.redirect(new URL('/login', req.url));
  }
  if (session && session.accessToken) {
    if (url.pathname === '/login' || url.pathname === '/signup') {
      url.pathname = '/dashboard';
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*']
};

