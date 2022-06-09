import Link from 'next/link'
import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  //const { t }  = useTranslation('footer');
  return (
    <footer className={styles['main-footer']}>
      <p className={styles.p}>Footer Text</p>
      <Link href="/"><a className={styles.link}>Home Page</a></Link>
      <Link href="/about"><a className={styles.link}>About Page</a></Link>
    </footer>
  )
}
