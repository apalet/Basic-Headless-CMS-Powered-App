---
title: 'Dynamic Routes: Page Path Depends on External Data'
date: '2026-09-15'
---

Next.js allows you to statically generate (pre-render) pages with paths that depend on external data. This enables **dynamic URLs** in Next.js. 

**How to Statically Generate Pages with Dynamic Routes**

If you want to statically generate a page at a path such as /posts/[id], where **id** can be dynamic, you can:

- Create a page at /pages/posts/[id].js, where [id] matches the name of the **Markdown file** under the top-level posts directory.
- Use **getStaticPaths** to return an array of possible values for id.
- Use **getStaticProps** to fetch the data needed for each post based on its id.

During the production build, Next.js uses this information to:

- Fetch external data.
- Generate the pages for each available post.
- Create static pages with paths such as /posts/first-post or /posts/second-post.