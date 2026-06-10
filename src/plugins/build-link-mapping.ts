import fs from 'node:fs'
import path from 'node:path'

export interface LinkEntry {
  term: string
  slug: string
  category: string
  lang: 'en' | 'zh'
}

const CONTENT_DIR = path.resolve(import.meta.dirname ?? '.', '../content')

function extractField(raw: string, field: string): string | null {
  const re = new RegExp(`^${field}:\\s*['"\`]?(.+?)['"\`]?\\s*$`, 'm')
  const match = raw.match(re)
  return match ? match[1].trim() : null
}

function stripMd(title: string): string {
  return title
    .replace(/\*+/g, '')
    .replace(/\[.*?\]\(.*?\)/g, '')
    .trim()
}

export function buildLinkMapping(): LinkEntry[] {
  const termMap = new Map<string, LinkEntry>()

  for (const lang of ['en', 'zh'] as const) {
    const dir = path.join(CONTENT_DIR, lang)
    if (!fs.existsSync(dir)) continue

    const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'))

    for (const file of files) {
      const raw = fs.readFileSync(path.join(dir, file), 'utf-8')
      const slug = extractField(raw, 'slug')
      const category = extractField(raw, 'category')
      const title = extractField(raw, 'title')
      const keywords = extractField(raw, 'keywords')
      if (!slug || !category) continue

      const terms: string[] = []

      if (title) {
        const clean = stripMd(title)
        if (clean.length >= 5 && clean.length <= 60) terms.push(clean)
      }

      if (keywords) {
        for (const kw of keywords.split(',')) {
          const t = kw.trim()
          if (t.length >= 4 && t.length <= 50) terms.push(t)
        }
      }

      for (const term of terms) {
        const lower = term.toLowerCase()
        const existing = termMap.get(lower)
        if (!existing || slug.startsWith('what-is-')) {
          termMap.set(lower, { term: lower, slug, category, lang })
        }
      }
    }
  }

  return Array.from(termMap.values()).sort((a, b) => b.term.length - a.term.length)
}
