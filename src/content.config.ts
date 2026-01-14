import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
    loader: glob({ pattern: "**/*.md", base: "./src/blog" }),
    schema: z.object({
        title: z.string(),
        datePublished: z.coerce.date(),
        cover: z.string().optional(),
        tags: z.array(z.string()).optional(),
    })
});

export const collections = { blog };
