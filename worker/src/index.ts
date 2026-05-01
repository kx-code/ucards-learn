export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname

    // 只处理 /learn 路径
    if (!path.startsWith('/learn')) {
      return new Response('Not Found', { status: 404 })
    }

    const targetHost = 'ucards-learn.pages.dev'
    url.hostname = targetHost
    url.protocol = 'https:'

    // 首页：保留 /learn 前缀
    if (path === '/learn' || path === '/learn/') {
      url.pathname = '/learn/'
    }
    // 静态资源：去掉 /learn 前缀
    else if (path.startsWith('/learn/_astro') || path.startsWith('/learn/favicon') || path.includes('.')) {
      url.pathname = path.replace('/learn', '')
    }
    // 文章页面：去掉 /learn 前缀，确保有结尾斜杠
    else {
      url.pathname = path.replace('/learn', '')
      if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
        url.pathname = url.pathname + '/'
      }
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
