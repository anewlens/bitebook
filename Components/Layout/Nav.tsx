import React from 'react';
import { useRouter } from 'next/router';
import styles from '../../styles/Global/Layout.module.scss'

const Nav = () => {

    const { pathname } = useRouter()

    const pageStyle = pathname.length > 1 ? 'recipe' : 'landing'
    return (
        <nav className={`${styles.navigation} ${styles[pageStyle]}`}>
            <h1><a href="/" className={styles.navigation_homeLink}>BiteBook</a></h1>
            <div className={styles.navigation_links}>

                <a href="/about" className={styles.navigation_link}>About</a>
                <a href="/recipes" className={styles.navigation_link}>Recipes</a>
                <span className={styles.navigation_profile}></span>
            </div>
        </nav>
    );
};

export default Nav;