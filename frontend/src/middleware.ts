import { type NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  const currentUser = request.cookies.get('jwt')?.value
  
  
  if (!currentUser && !request.nextUrl.pathname.startsWith('/session')) {
    return Response.redirect(new URL('/session', request.url))
  }

  if (currentUser && request.nextUrl.pathname.startsWith('/session')) {
    return Response.redirect(new URL('/', request.url))
  }
}
 
export const config = {
  matcher: ['/drivers/:path*', '/clients/:path*', '/orders/:path*', '/reports/:path*', '/session/:path*'],
}