export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)
    const path = url.pathname

    // 只处理 /learn 路径
    if (path.startsWith('/learn')) {
      let targetPath = path
      let needTrailingSlash = false

      // 首页：/learn/ -> /learn/
      if (path === '/learn' || path === '/learn/') {
        targetPath = '/learn/'
      }
      // 静态资源：去掉 /learn 前缀
      else if (path.startsWith('/learn/_astro') || path.startsWith('/learn/favicon') || path.includes('.')) {
        targetPath = path.replace('/learn', '')
      }
      // 文章页面：去掉 /learn 前缀，确保有结尾斜杠
      else {
        targetPath = path.replace('/learn', '')
        // 如果路径不以斜杠结尾且不包含文件扩展名，添加斜杠
        if (!targetPath.endsWith('/') && !targetPath.includes('.')) {
          targetPath = targetPath + '/'
        }
      }

      const targetUrl = `https://ucards-learn.pages.dev${targetPath}${url.search}`

      // 代理请求
      const proxyRequest = new Request(targetUrl, request)
      proxyRequest.headers.set('X-Forwarded-Host', url.hostname)
      proxyRequest.headers.set('X-Forwarded-Proto', url.protocol)

      return fetch(proxyRequest)
    }

    // 其他路径返回 404
    return new Response('Not Found', { status: 404 })
  }
}
