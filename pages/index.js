import Head from 'next/head'
// import Link from 'next/link'

import {
  useTranslation,
  useLanguageQuery,
} from "next-export-i18n";

import styles from '../styles/Home.module.css'

export default function Home() {
  const { t }  = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className="page">
      <Head>
        <title>Multi-Lingual Test Application - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className={styles.title}>
        {t('This application has text that can be translated')}
      </h1>

      <p className={styles.description}>
        Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vestibulum id ligula porta felis euismod semper. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
      </p>

      <a className="button" href="#">{t('Next')}</a>
    </div>
  )
}