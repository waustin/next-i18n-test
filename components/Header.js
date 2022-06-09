import React from 'react'
import Link from 'next/link'
import styles from './Header.module.css'
import {
  LanguageSwitcher,
} from "next-export-i18n";

function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.mainNav}>
        <Link href="/"><a className={styles.link}>Home Page</a></Link>
        <Link href="/about"><a className={styles.link}>About Page</a></Link>
        <Link href="/contact"><a className={styles.link}>Contact Page</a></Link>
      </nav>
      <nav className={styles.langNav}>
       <LanguageSwitcher lang="en">
          <a>English</a>
        </LanguageSwitcher>
       <LanguageSwitcher lang="es">
         <a>Español</a> 
       </LanguageSwitcher>
      </nav>
    </header>
  )
}

export default Header