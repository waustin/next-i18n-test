import Head from 'next/head'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';



export default function Home() {
  const { t }  = useTranslation();

  return (
    <div className={styles.container}>
      <Head>
        <title>Multi-Lingual Test Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          This application has text that can be translated
        </h1>

        <p className={styles.description}>
         Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        </p>

        <a className="button" href="#">{t('Next')}</a>
       
      </main>

      <Footer />
    </div>
  )
}

export async function getStaticProps({locale}) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'footer'])),
      // will be passed to page component as props
    }
  }
}