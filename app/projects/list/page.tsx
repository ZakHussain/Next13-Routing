import Link from 'next/link'
import React from 'react'
import styles from './projects.module.css'

export default function ProjectList() {
  return (
    <main>
        <h1>Project Listing</h1>
        <ul className={styles.ul}>

            <li className={styles.li}>
                <Link href="/projects/project-four">
                    Project One
                </Link>
            </li>

            <li className={styles.li}>
                <Link href="/projects/project-two">
                    Project Two
                </Link>
            </li>

            <li className={styles.li}>
                <Link href="/projects/project-three">
                    Project Three
                </Link>
            </li>
        </ul>
    </main>
  )
}
