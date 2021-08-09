import Head from 'next/head'
import Navigation from '../components/Navigation/Navigation'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  console.log(pageProps);
  return (
    <Navigation userStatus={pageProps.data}>
      <Head>
        <title>Beer Brand</title>
      </Head>
      <Component {...pageProps} />
    </Navigation>
  );
}

export default MyApp
