import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../Components/Common/Button'
import RecipeCard from '../Components/UI/RecipeCard'
import RecipeGrid from '../Components/UI/RecipeGrid'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.App}>
      <Head>
        <title>BiteBook</title>
        <meta name="description" content="A better way to collect recipes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={styles.hero}>

          <div className={styles.hero_content}>
            <p className={styles.hero_tagLine}>
              Create<br />Share<br />Eat
            </p>
            <p className={styles.hero_descript}>Craft recipes that you love, share with friends, family and the world and explore what others have to offer. </p>
            <div className={styles.hero_links}>
              <Button styling="Lg_blue">
                Create Account
              </Button>
              <a href="/login">Log in</a>
            </div>
          </div>

          <div className={styles.hero_image}>
            <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80" alt="cooking" />
          </div>

          <a href="#explore" className={styles.hero_jump}>
            <span className={styles.hero_jumpLink}>Explore Community Recipes</span>
            <span className={styles.hero_jumpLink_symbol}>&#10094;</span>
          </a>

        </div>

        <section id="explore" className={styles.explore}>
          <h2 className={styles.explore_heading}>What's on the Menu</h2>
          <p className={styles.explore_subheading}>See what the community's cooking</p>

          <RecipeGrid>
            <RecipeCard category='Main' rating='3.3 (16)' title="Fresh Pasta with veggies" user="@anewlens26" />
            <RecipeCard category='Dessert' rating='3.3 (16)' title="Fresh Pasta with veggies" user="@anewlens26" />
            <RecipeCard category='Breakfast' rating='3.3 (16)' title="Fresh Pasta with veggies" user="@anewlens26" />
          </RecipeGrid>

        </section>
      </main>
    </div>
  )
}

export default Home
