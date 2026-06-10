import { visit } from 'unist-util-visit'
import type { Root, Text, Link, Parent } from 'mdast'
import type { Plugin } from 'unified'
import type { LinkEntry } from './build-link-mapping'

interface AutoLinkOptions {
  mapping: LinkEntry[]
}

const MAX_LINKS_PER_TERM = 3

function escapeRegex(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function isInsideLink(node: Text, ancestors: Parent[]): boolean {
  return ancestors.some((a) => a.type === 'link')
}

function isInsideCode(node: Text, ancestors: Parent[]): boolean {
  return ancestors.some((a) => a.type === 'inlineCode' || a.type === 'code')
}

export const remarkAutoLink: Plugin<[AutoLinkOptions], Root> = function (options) {
  const mapping = options.mapping

  return function (tree, file) {
    // Get current article slug and language from Astro frontmatter
    const frontmatter = (file.data as any)?.astro?.frontmatter
    if (!frontmatter) return

    const currentSlug = frontmatter.slug as string | undefined
    const lang = (file.history?.[0] || '').includes('/en/') ? 'en' : 'zh'

    // Filter to same-language terms only
    const terms = mapping.filter((m) => m.lang === lang)
    if (terms.length === 0) return

    // Build regex (longest first ensures longest match)
    const pattern = terms.map((t) => escapeRegex(t.term)).join('|')
    const regex = new RegExp(pattern, 'gi')

    const linkCounts = new Map<string, number>()

    visit(tree, 'text', (node: Text, index: number | undefined, parent: Parent | undefined) => {
      if (!parent || index === undefined) return
      if (typeof index !== 'number') return
      if (isInsideLink(node, [])) return
      if (isInsideCode(node, [])) return

      const value = node.value
      regex.lastIndex = 0
      const matches: Array<{ term: string; slug: string; start: number; end: number }> = []

      let m: RegExpExecArray | null
      while ((m = regex.exec(value)) !== null) {
        const matched = m[0].toLowerCase()
        const entry = terms.find((t) => t.term === matched)
        if (!entry) continue
        if (entry.slug === currentSlug) continue // no self-link

        const count = linkCounts.get(entry.slug) ?? 0
        if (count >= MAX_LINKS_PER_TERM) continue

        matches.push({ term: m[0], slug: entry.slug, start: m.index, end: m.index + m[0].length })
        linkCounts.set(entry.slug, count + 1)
      }

      if (matches.length === 0) return

      // Replace text node with fragments (text + link + text + link + ...)
      const newNodes: Array<Text | Link> = []
      let lastIndex = 0

      for (const match of matches) {
        // Text before this match
        if (match.start > lastIndex) {
          newNodes.push({ type: 'text', value: value.slice(lastIndex, match.start) })
        }

        // Link node
        const prefix = lang === 'en' ? '/learn/en/' : '/learn/'
        newNodes.push({
          type: 'link',
          url: `${prefix}${match.slug}/`,
          children: [{ type: 'text', value: match.term }],
        })

        lastIndex = match.end
      }

      // Remaining text
      if (lastIndex < value.length) {
        newNodes.push({ type: 'text', value: value.slice(lastIndex) })
      }

      // Replace original text node with new nodes
      parent.children.splice(index, 1, ...newNodes)
    })
  }
}
