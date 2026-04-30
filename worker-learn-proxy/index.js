export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    // 只处理 /learn 路径
    if (url.pathname.startsWith('/learn')) {
      // 重写路径，去掉 /learn 前缀
      const learnPath = url.pathname.replace('/learn', '') || '/'
      const targetUrl = `https://master.ucards-learn.pages.dev${learnPath}${url.search}`

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
