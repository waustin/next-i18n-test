import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as ga from '../lib/ga';

import Layout from '../components/Layout';
import '../styles/globals.css'



function MyApp({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const handleRouterChange = (url) => {
      ga.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouterChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouterChange);
    }
  }, [router.events])
  return( 
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;
