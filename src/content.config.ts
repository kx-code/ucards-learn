import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import { z } from 'astro/zod'

const article = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content', generateId: ({ entry }) => entry.replace(/\.md$/, '') }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    keywords: z.string(),
    category: z.enum([
      'tutorial',
      'use-case',
      'comparison',
      'country',
      'brand',
      'education',
      'resource',
    ]),
    slug: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date(),
    image: z.string().optional(),
    related: z.array(z.string()).default([]),
    cta: z
      .object({
        title: z.string(),
        subtitle: z.string(),
      })
      .optional(),
    faqs: z.array(z.object({
      question: z.string(),
      answer: z.string(),
    })).default([]),
    schemaType: z.enum(['article', 'howto', 'glossary', 'product']).default('article'),
  }),
})

export const collections = { article }
