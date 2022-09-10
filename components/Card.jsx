import styles from '../styles/Card.module.css'

import React from 'react'

const Card = ( {children} ) => {
  return (
    <div className={styles.container}>
        <main className={styles.main}>
            {children}
        </main>
    </div>
  )
}

export default Card