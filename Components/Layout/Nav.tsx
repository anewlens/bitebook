import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../../styles/Global/Layout.module.scss'

const Nav = () => {

    const { pathname } = useRouter()

    const pageStyle = pathname.length > 1 ? 'recipe' : 'landing'
    return (
        <nav className={`${styles.navigation} ${styles[pageStyle]}`}>
            <h1>
                <Link href='/'>
                    <a className={styles.navigation_homeLink}>BiteBook</a>

                </Link>
            </h1>
            <div className={styles.navigation_links}>

                <Link href="/about">
                    <a className={styles.navigation_link}>About</a>

                </Link>

                <Link href="/recipes">
                    <a className={styles.navigation_link}>Recipes</a>
                </Link>

                <Link href="/books">
                    <a className={styles.navigation_link}>Books</a>
                </Link>
                <span className={styles.navigation_profile}></span>
            </div>
        </nav>
    );
};

export default Nav;