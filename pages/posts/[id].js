// Pages that begin with [ and end with ] are dynamic routes in Next.js.

// Adding CSS
import utilStyles from '../../styles/utils.module.css';
// Formatting the date
import Date from '../../components/date';
// Adding title to the Post Page
import Head from 'next/head';
import Layout from '../../components/layout';
import { getAllPostIds, getPostData } from '../../lib/posts';

// post page is using the getPostData function in getStaticProps to get the post data and return it as props.
export async function getStaticProps({ params }) {
    // Add the "await" keyword like this:
    const postData = await getPostData(params.id);
    return {
        props: {
        postData,
        },
    };
}

// import the getAllPostIds function and use it inside getStaticPaths
export async function getStaticPaths() {
    // getAllPostIds() is async because it fetches WordPress JSON with got.
    const paths = await getAllPostIds();
    return {
        paths, // paths contains the array of known paths returned by getAllPostIds(), which include the params defined by pages/posts/[id].js.
        fallback: false, // If fallback is false, then any paths not returned by getStaticPaths will result in a 404 page.
    };
}

// code that will render a post page
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    );
}