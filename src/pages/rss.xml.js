import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteTitle, siteDescription } from "../site.js";
import {
  comparePublishedBlogPostsByDateDesc,
  isPublishedBlogPost,
} from "../utils/blog";

export async function GET(context) {
  const blog = await getCollection("blog");

  const items = blog
    .filter(isPublishedBlogPost)
    .sort(comparePublishedBlogPostsByDateDesc)
    .map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.body?.slice(0, 150) + "…",
      link: `/${post.id}/`,
    }));

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items,
  });
}
