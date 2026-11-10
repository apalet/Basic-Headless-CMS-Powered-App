// 'pages/_app.js' is the entry point for your application.
import '../styles/global.css';
// next/font/google self-hosts Outfit and applies it to every page from this wrapper.
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '800'],
});

// _app.js is a top-level React component that wraps all the pages in your application.
/* equivalent to:
 function App(props) {
  const Component = props.Component;
  const pageProps = props.pageProps;

  return <Component {...pageProps} />;
} */

export default function App({ Component, pageProps }) {
    // render the page with the given props
    //the spread operator "...pageProps" render the actual component and give them all the propieties inside pageProps.
    return (
        <div className={outfit.className}>
            <Component {...pageProps} />
        </div>
    );
}
