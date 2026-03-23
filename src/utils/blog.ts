import type { CollectionEntry } from "astro:content";

export type BlogPost = CollectionEntry<"blog">;
export type PublishedBlogPost = BlogPost & {
  data: BlogPost["data"] & { datePublished: Date };
};

export function isPublishedBlogPostAt(
  post: BlogPost,
  now: Date,
): post is PublishedBlogPost {
  const { datePublished } = post.data;

  if (!(datePublished instanceof Date)) {
    return false;
  }

  const publishedAt = datePublished.valueOf();

  return !Number.isNaN(publishedAt) && publishedAt <= now.valueOf();
}

export function isPublishedBlogPost(post: BlogPost): post is PublishedBlogPost {
  return isPublishedBlogPostAt(post, new Date());
}

export function comparePublishedBlogPostsByDateDesc(
  a: PublishedBlogPost,
  b: PublishedBlogPost,
): number {
  return b.data.datePublished.valueOf() - a.data.datePublished.valueOf();
}