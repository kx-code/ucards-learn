# uCards Learn Site

虚拟信用卡和加密货币支付学习中心 - 44 篇中英文教程文章。

## 项目信息

- **版本**: v1.0.0
- **部署**: https://ucards.uk/learn
- **框架**: Astro 6.1 + Tailwind CSS 4
- **内容**: 44 篇文章（中英文双语）

## 项目结构

```
/
├── public/              # 静态资源
│   └── _redirects      # Cloudflare Pages 重定向规则
├── src/
│   ├── components/      # Astro 组件
│   │   ├── FAQ.astro                # FAQ 可折叠组件
│   │   ├── ArticleEnhancements.astro  # 文章增强组件
│   │   ├── Breadcrumbs.astro        # 面包屑导航
│   │   ├── CTASection.astro         # CTA 行动呼吁
│   │   ├── RelatedPosts.astro       # 相关文章
│   │   ├── SEOHead.astro            # SEO 头部
│   │   └── Footer.astro             # 页脚
│   ├── content/        # Markdown 内容
│   │   ├── en/          # 英文文章
│   │   └── zh/          # 中文文章
│   ├── layouts/        # 页面布局
│   │   └── ArticleLayout.astro      # 文章布局
│   ├── lib/            # 工具库
│   │   └── seo.ts       # SEO & Schema.org 工具
│   └── pages/          # 页面路由
│       ├── [slug].astro           # 中文文章路由
│       ├── en/[slug].astro        # 英文文章路由
│       ├── index.astro            # 中文首页
│       └── en/index.astro         # 英文首页
├── worker-learn-proxy/  # Cloudflare Worker 代理
│   ├── index.js        # Worker 代理逻辑
│   └── wrangler.toml   # Worker 配置
└── astro.config.mjs    # Astro 配置
```

## 命令

| 命令                                                         | 说明                            |
| ------------------------------------------------------------ | ------------------------------- |
| `npm install`                                                | 安装依赖                        |
| `npm run dev`                                                | 启动开发服务器 (localhost:4321) |
| `npm run build`                                              | 构建生产版本到 `./dist/`        |
| `npm run preview`                                            | 本地预览构建结果                |
| `npx wrangler pages deploy dist --project-name=ucards-learn` | 部署到 Cloudflare Pages         |

## 内容分类

- **教程** (tutorial): 虚拟卡使用教程
- **使用场景** (use-case): 具体支付场景指南
- **对比评测** (comparison): 不同产品对比
- **国家/地区** (country): 各地区虚拟卡介绍
- **品牌** (brand): Visa/Mastercard/Discover 介绍
- **加密教育** (education): 区块链基础知识
- **资源** (resource): 工具和资源推荐

## GEO 优化

项目包含完整的 Schema.org 结构化数据支持：

- Article Schema - 文章内容
- HowTo Schema - 教程步骤
- FAQPage Schema - 常见问题
- Glossary Schema - 术语定义
- Product Schema - 产品介绍
- Organization Schema - 组织信息
- WebSite Schema - 网站信息

### 文章 frontmatter 配置

```yaml
---
title: '文章标题'
description: '文章描述'
keywords: '关键词1, 关键词2'
category: 'tutorial'
slug: 'article-slug'
date: 2026-04-30
updated: 2026-04-30
schemaType: 'article' # article/howto/glossary/product
faqs:
  - question: '常见问题1？'
    answer: '详细回答...'
  - question: '常见问题2？'
    answer: '详细回答...'
related:
  - 'related-article-slug-1'
  - 'related-article-slug-2'
cta:
  title: '行动呼吁标题'
  subtitle: '行动呼吁副标题'
---
```

## 部署

### Cloudflare Pages

自动部署连接到 GitHub 仓库，推送到 `main` 分支自动触发部署。

### Cloudflare Worker 代理

Worker `learn-proxy` 将 `ucards.uk/learn/*` 请求代理到 Cloudflare Pages 项目。

**Worker 配置**:

- 文件: `worker-learn-proxy/index.js`
- 路由: `ucards.uk/learn/*`
- 目标: `https://master.ucards-learn.pages.dev`

### 本地部署 Worker

```bash
cd worker-learn-proxy
npx wrangler deploy index.js
```

## AI SEO 优化

### 已配置

- ✅ Cloudflare WAF Bypass 规则（允许 AI 爬虫）
- ✅ Schema.org 结构化数据
- ✅ FAQ 组件
- ✅ 文章元数据

### 待提交

- [ ] Perplexity URL 提交
- [ ] ChatGPT Browse 索引
- [ ] 收录状态监控

## 相关文档

- [AI SEO 优化指南](../vCard/memory/ai-seo-optimization.md)
- [GEO 优化工作记录](../vCard/memory/geo-optimization.md)
- [Cloudflare WAF 配置](../vCard/memory/ai-seo-optimization.md#cloudflare-waf-bypass-规则)

## License

MIT
