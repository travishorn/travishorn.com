import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteTitle, siteDescription } from "../site.js";

export async function GET(context) {
  const blog = await getCollection("blog");

  const items = blog
    .filter((post) => !post.data.draft)
    .sort(
      (a, b) => b.data.datePublished.valueOf() - a.data.datePublished.valueOf(),
    )
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
