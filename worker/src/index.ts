export default {
  async fetch(request: Request): Promise<Response> {
    const targetHost = 'ucards-learn.pages.dev'

    // Strip /learn prefix — Astro builds to dist/ root, CF Pages serves from dist/
    const url = new URL(request.url)
    url.hostname = targetHost
    url.protocol = 'https:'
    url.pathname = url.pathname.replace(/^\/learn\/?/, '/') || '/'

    // Astro format:directory needs trailing slash for page routes
    const path = url.pathname
    if (!path.endsWith('/') && !path.includes('.')) {
      url.pathname = path + '/'
    }

    const response = await fetch(url.toString(), {
      method: request.method,
      headers: request.headers,
      body: request.method !== 'GET' && request.method !== 'HEAD' ? request.body : undefined,
    })

    const newHeaders = new Headers(response.headers)
    newHeaders.delete('content-encoding')

    return new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: newHeaders,
    })
  },
}
