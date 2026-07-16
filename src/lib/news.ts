import { getCollection, type CollectionEntry } from "astro:content";
import { defaultLang, isLang, type Lang } from "../i18n";

export type NewsEntry = CollectionEntry<"news">;

export interface NewsPost {
  slug: string;
  variants: Partial<Record<Lang, NewsEntry>>;
}

export async function getNewsPosts(): Promise<NewsPost[]> {
  const entries = await getCollection("news", ({ data }) => !data.draft);
  const bySlug = new Map<string, NewsPost>();
  for (const entry of entries) {
    const [slug, entryLang] = entry.id.split("/");
    if (!slug || !entryLang || !isLang(entryLang)) {
      throw new Error(
        `News entry "${entry.id}" must be located at "<slug>/<lang>.md" where <lang> is one of the site languages.`
      );
    }
    const post = bySlug.get(slug) ?? { slug, variants: {} };
    post.variants[entryLang] = entry;
    bySlug.set(slug, post);
  }
  const posts = [...bySlug.values()];
  for (const post of posts) {
    if (!post.variants[defaultLang]) {
      throw new Error(
        `News post "${post.slug}" is missing the required English variant (${defaultLang}.md).`
      );
    }
  }
  return posts.sort(
    (a, b) =>
      b.variants[defaultLang]!.data.pubDate.valueOf() -
      a.variants[defaultLang]!.data.pubDate.valueOf()
  );
}

export function resolveVariant(post: NewsPost, lang: Lang): NewsEntry {
  return post.variants[lang] ?? post.variants[defaultLang]!;
}

export function formatNewsDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(lang, { dateStyle: "long" }).format(date);
}
