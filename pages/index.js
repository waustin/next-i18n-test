import Head from 'next/head'
// import Link from 'next/link'

import {
  useTranslation,
  useLanguageQuery,
  LanguageSwitcher,
} from "next-export-i18n";

import styles from '../styles/Home.module.css'
import Footer from '../components/Footer';



export default function Home() {
  const { t }  = useTranslation();
  const [query] = useLanguageQuery();

  return (
    <div className={styles.container}>
      <Head>
        <title>Multi-Lingual Test Application</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <nav className={styles.langNav}>
       <LanguageSwitcher lang="en">
          <a>English</a>
        </LanguageSwitcher>
       <LanguageSwitcher lang="es">
         <a>Español</a> 
       </LanguageSwitcher>
      </nav>

      <main className={styles.main}>
      

        <h1 className={styles.title}>
          {t('This application has text that can be translated')}
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