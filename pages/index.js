// pages/index.js is the home page. In the Pages Router, this file maps to the "/" route.

import Link from 'next/link';
import Head from 'next/head';
// Layout wraps the page with the shared header/profile. siteTitle is a named export used in the document title.
import Layout, { siteTitle } from '../components/layout';
// CSS Modules: utilStyles.headingMd becomes a unique class name so styles stay scoped to this usage.
import utilStyles from '../styles/utils.module.css';


// Add an import for getSortedPostsData and call it inside getStaticProps
import { getSortedPostsData } from '../lib/posts';
// By returning allPostsData inside the props object in getStaticProps, the blog posts will be passed to the Home component as a prop. 
export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

// Display the Home site
export default function Home({allPostsData}) {
  return (
    // Passing home tells Layout this is the homepage, so it shows the large profile photo and h1 name.
    <Layout home>
      {/* Head updates tags in <head>. Here it sets the browser tab title. */}
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <p>Hi I'm Andree. I'm a Full-Stack Developer building modern, user-friendly web applications with 
          JavaScript, React, Node.js, and Next.js. Find some of my projects at <a href="https://github.com/apalet">Github</a>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      {/* Display the blog posts. fetched external data (from the file system) and pre-rendered the index page with this data.*/}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, name }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
