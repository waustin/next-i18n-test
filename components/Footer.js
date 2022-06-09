import React from 'react'
import styles from './Footer.module.css'


export default function Footer() {
  //const { t }  = useTranslation('footer');
  return (
    <footer className={styles['main-footer']}>
      <p className={styles.p}>Footer Text</p>
    </footer>
  )
}
