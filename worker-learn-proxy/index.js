export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // 只处理 /learn 路径
    if (url.pathname.startsWith('/learn')) {
      let targetPath = url.pathname

      // 静态资源：去掉 /learn 前缀（因为 Astro 构建在根目录）
      if (url.pathname.startsWith('/learn/_astro') || url.pathname.startsWith('/learn/favicon')) {
        targetPath = url.pathname.replace('/learn', '')
      }

      const targetUrl = `https://ucards-learn.pages.dev${targetPath}${url.search}`

      // 代理请求
      const proxyRequest = new Request(targetUrl, request)

      // 添加必要的 headers
      proxyRequest.headers.set('X-Forwarded-Host', url.hostname)
      proxyRequest.headers.set('X-Forwarded-Proto', url.protocol)

      return fetch(proxyRequest)
    }

    // 其他路径返回 404
    return new Response('Not Found', { status: 404 })
  }
}
