import React from 'react'
import Footer from './Footer'

import styles from '../styles/Home.module.css'
import Header from './Header'

function Layout({children}) {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout