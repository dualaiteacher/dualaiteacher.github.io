import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const news = defineCollection({
  loader: glob({ pattern: "*/[a-z][a-z].md", base: "./src/content/news" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      excerpt: z.string(),
      pubDate: z.coerce.date(),
      cover: image().optional(),
      coverAlt: z.string().optional(),
      draft: z.boolean().default(false),
      socialLinks: z
        .object({
          linkedin: z.url().optional(),
          instagram: z.url().optional(),
          facebook: z.url().optional(),
        })
        .default({}),
    }),
});

export const collections = { news };
