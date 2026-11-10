---
title: 'Image Component and Image Optimization'
date: '2026-09-13'
---
 
Next.js can serve **static assets**, like images, under the **top-level public directory**. Files inside public can be referenced from the root of the application similar to pages.

**next/image** is an extension of the HTML **img** element, evolved for the modern web.

- Next.js also has support for **Image Optimization by default**. This allows for resizing, optimizing, and serving images in modern formats like WebP when the browser supports it. This avoids shipping large images to devices with a smaller viewport. It also allows Next.js to automatically adopt future image formats and serve them to browsers that support those formats.

- Automatic Image Optimization works with any image source. Even if the image is hosted by an external data source, like a CMS, it can still be optimized.

- Instead of optimizing images at build time, Next.js **optimizes images on-demand**, as users request them. Unlike static site generators and static-only solutions, your build times aren't increased, whether shipping 10 images or 10 million images.

- Images are lazy loaded by default. That means your page speed isn't penalized for images outside the viewport. Images load as they are scrolled into viewport.

- Images are always rendered in such a way as to **avoid Cumulative Layout Shift**, a Core Web Vital that Google is going to use in search ranking.