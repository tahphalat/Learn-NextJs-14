import { NextResponse } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url))
}
 
// if user enter "/about" web will lead user redirect to "/home" (according to middleware function)
export const config = {
  matcher: '/about/:path*',
}