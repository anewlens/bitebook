import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../Components/Common/Button'
import RecipeCard from '../Components/UI/RecipeCard'
import RecipeGrid from '../Components/UI/RecipeGrid'
import styles from '../styles/Pages/Home.module.scss'
import recipes from '../data/recipes'

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
              <Button styling="clrBg_light" color='Blue'>
                Create Account
              </Button>
              <a href="/login">Log in</a>
            </div>
          </div>

          <div className={styles.hero_image}>
            <img src="https://images.unsplash.com/photo-1528712306091-ed0763094c98?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1040&q=80" alt="cooking" />
          </div>


          <div className={styles.hero_jump}>
            <a href="#explore" className={styles.hero_jump_link}>
              <span className={styles.hero_jump_text}>Explore Community Recipes</span>
              <span className={styles.hero_jump_symbol}>&#10094;</span>
            </a>
          </div>

        </div>

        <section id="explore" className={styles.explore}>
          <h2 className={styles.explore_heading}>What's on the Menu</h2>
          <p className={styles.explore_subheading}>See what the community's cooking</p>

          <RecipeGrid>
            {
              recipes
                .map(({ id, category, title, img, user, ratings }) => (
                  <RecipeCard key={id} id={id} category={category} img={img} ratings={ratings} title={title} user={user} />)
                )
            }
          </RecipeGrid>

        </section>
      </main>
    </div>
  )
}

export default Home
