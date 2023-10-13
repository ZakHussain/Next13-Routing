import Link from "next/link";
import styles from "./navbar.module.css";
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <nav className={styles.navbar}>
            <p>Next.js</p>
            <ul className={styles.navbar__links}>
                <Link href="/"><li>Home</li></Link>
                <Link href="/about"><li>About</li></Link>
                <Link href="/contact"><li>contact</li></Link>
            </ul>
        </nav>
    </header>
  )}

export default Navbar