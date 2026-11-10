// next/head lets this shared layout add tags to the document <head> on every page that uses Layout.
import Head from 'next/head';
// next/image optimizes images (sizing, lazy loading). Files in /public are served from the site root, e.g. /profile.jpg.
import Image from 'next/image';
// layout.module.css is scoped to this component (container, header, backToHome).
import styles from './layout.module.css';
// utils.module.css has reusable classes like borderCircle and heading sizes.
import utilStyles from '../styles/utils.module.css';
// next/link client-side navigates between pages without a full reload.
import Link from 'next/link';

const name = 'Andree Palet';

// Named export so pages (like index.js) can reuse the same title in <Head>.
export const siteTitle = 'Next.js Sample Website';

// children = the page content wrapped by Layout. home is true only on the homepage.
export default function Layout({ children, home }) {
  return (
    <div className={`${styles.container}${home ? ` ${styles.home}` : ''}`}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          // og:image is the preview picture when this URL is shared on social apps.
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=${encodeURIComponent(
            'https://nextjs.org/static/nextjs-logo.svg',
          )}`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {/* home: large photo + h1. Other pages: smaller linked photo + h2 so you can go back. */}
        {home ? (
          <>
            <Image
              // priority loads this image first because it is visible at the top of the homepage.
              priority
              src="/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              {/* colorInherit keeps the name the same color as the heading instead of the default link blue. */}
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      {/* children is whatever the page passed inside <Layout>...</Layout>. */}
      <main className={home ? styles.homeMain : undefined}>{children}</main>
      {/* The back link is hidden on the homepage because you are already there. */}
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}
