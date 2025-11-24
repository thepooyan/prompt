import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAllRedirects } from './server/dataFetching'

export async function proxy(req: NextRequest) {
  const url = req.nextUrl
  const redirects = await getAllRedirects()
  const redirect = redirects.find(r => r.from === url.pathname)

  if (redirect) {
    return NextResponse.redirect(new URL(redirect.to, req.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/:slug*',
  ],
}
