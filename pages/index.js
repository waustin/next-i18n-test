import React, {useState} from 'react';
import Head from 'next/head'
import * as ga from '../lib/ga';

import {
  useTranslation,
  useLanguageQuery,
} from "next-export-i18n";

import styles from '../styles/Home.module.css'

export default function Home() {
  const { t }  = useTranslation();
  const [query] = useLanguageQuery();

  const [count, setCount] = useState(0);

  function buttonClick(e) {
    ga.event({
      action: 'buttonClick',
      params: {
        'count': count
      }
    });
    setCount(count + 1);
  }

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
      <p>
        <strong>Button Clicked:</strong> {count}
      </p>
      <button className="button" type="buttion" onClick={buttonClick}>Click Me</button>
    </div>
  )
}