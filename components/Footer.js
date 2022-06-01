import React from 'react'
import styles from './Footer.module.css'
import { useTranslation } from 'next-i18next';

export default function Footer() {
  const { t }  = useTranslation('footer');
  return (
    <footer className={styles['main-footer']}>
      { t('Footer Text') }
    </footer>
  )
}
