import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { siteTitle, siteDescription } from '../site.js';

export async function GET(context) {
  const blog = await getCollection('blog');

  return rss({
    title: siteTitle,
    description: siteDescription,
    site: context.site,
    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.datePublished,
      description: post.body?.slice(0, 150) + "…",
      link: `/${post.id}/`,
    })),
  });
}