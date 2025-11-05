import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getAllRedirects } from './server/dataFetching'

export async function proxy(req: NextRequest) {
  const url = req.nextUrl
  const redirects = await getAllRedirects()
  const redirect = redirects.find(r => r.from === url.pathname)
  console.log(redirects)
  console.log(url.pathname)

  if (redirect) {
    console.log("redirect")
    return NextResponse.redirect(new URL(redirect.to, req.url), 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/Blog/:slug',
    '/Prompts/:slug',
  ],
}
