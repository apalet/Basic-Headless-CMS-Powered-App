---
title: 'CSS Styling in Next.js'
date: '2026-09-14'
---
 
Next.js provides many ways to style your pages:
 
- **CSS Modules:** allow you to locally scope CSS at the component-level by automatically creating unique class names. This allows you to use the same CSS class name in different files without worrying about class name collisions.

- **global.css:** CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well. The default export of _app.js is a top-level React component that wraps all the pages in your application. You can use this component to keep state when navigating between pages, or to add global styles. You can place the global CSS file anywhere and use any name. In Next.js, you can add global CSS files by importing them from pages/_app.js. You cannot import global CSS anywhere else.

In addition to CSS modules, you can style your Next.js application in a variety of ways, including:

- **Sass** which allows you to import .css and .scss files.
- PostCSS libraries like **Tailwind CSS**.
- **CSS-in-JS libraries** such as styled-jsx, styled-components, and emotion.