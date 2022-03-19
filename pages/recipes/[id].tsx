import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import recipes from '../../data/recipes.js'
import styles from '../../styles/Pages/Recipe.module.scss'
import colors from '../../styles/Global/Colors.module.scss'
import Fork from '../../Components/UI/SVGs/Fork';
import Group from '../../Components/UI/SVGs/Group'
import Clock from '../../Components/UI/SVGs/Clock';
import Star from '../../Components/UI/SVGs/Star';
import { RecipeType, IngredientType, StepType } from '../../data/Props'

type Props = {
    recipe: RecipeType
    errors: string
}

const Recipe = ({ recipe: { img, title, category, date, user, description, servings, time, ratings, forks, ingredients, steps } }: Props) => {

    const [flexIngrs, setIngredients] = useState(ingredients)
    const [servesInput, setServesInput] = useState(1)


    const findCategories = (array: IngredientType[] | StepType[]) => {
        let arr: any = []

        array.forEach((item: any) => {
            if (item.section && !arr.includes(item.section)) {
                arr.push(item.section)
            }
        })

        return arr
    }

    return (
        <div>
            <Head>
                <title>{title} by {user} | BiteBook</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.recipe} ${colors[category]}`}>

                <header className={styles.header}>
                    <div className={styles.header_content}>
                        <div className={styles.header_row1}>
                            <a href="/" className={styles.header_category}>{category}</a>
                            <span className={styles.header_date}>{date}</span>
                        </div>
                        <h2 className={styles.header_title}>{title}</h2>
                        <p className={styles.header_user}>@{user}</p>
                        <p className={styles.header_description}>{description}</p>

                        <div className={styles.header_stats}>

                            <div className={styles.header_stats_row}>
                                <div className={`${styles.header_stat} ${styles.header_stat_servings}`}>
                                    <Group />
                                    <span className={styles.header_serving}>
                                        <strong>Serves:</strong> {servings}
                                    </span>
                                </div>
                                <div className={`${styles.header_stat} ${styles.header_stat_ratings}`}>
                                    <Star /> <span> {ratings.rating} ({ratings.amount})</span>
                                </div>
                            </div>

                            <div className={styles.header_stats_row}>
                                <div className={`${styles.header_stat} ${styles.header_stat_time}`}>
                                    <Clock />
                                    <div className={styles.header_time}>
                                        <span><strong>Active Time:</strong> {time.active}</span>
                                        <span><strong>Total Time:</strong> {time.total}</span>
                                    </div>
                                </div>
                                <div className={`${styles.header_stat} ${styles.header_stat_forks}`}>
                                    <Fork /><span className={styles.header_forks}>{forks}</span>
                                </div>
                            </div>
                        </div>

                        <div className={styles.buttonContainer}>
                            <button>Fork</button><button>Save</button>
                        </div>
                    </div>

                    <div className={styles.header_img}>
                        <Image src={img} alt="Pasta" className={styles.header_img}
                            width={1000}
                            height={1000}
                            placeholder="blur"
                            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO8WMtQz0AEYBxVSF+FAMJHEg1jjeLoAAAAAElFTkSuQmCC" />
                    </div>
                </header>

                <section className={styles.section}>
                    <header className={styles.section_header}>
                        <h3 className={styles.recipe_h2}>Ingredients</h3>
                        <div className={styles.recipe_servingControls}>
                            <Group />
                            <span>X</span>
                            <input type="number" pattern="[1-9]*" min={1} step={.5} value={`${servesInput}`} placeholder="x" onChange={(e) => { console.log(e); setServesInput(Number(e.target.value)); }} />
                        </div>
                    </header>

                    {
                        flexIngrs.find(item => item.section) ?
                            (
                                <div className={styles.section_cats}>
                                    {
                                        findCategories(flexIngrs).map((cat: string) => {

                                            return (
                                                <div className={styles.section_category}>
                                                    <h4 className={styles.recipe_h3}> {cat}</h4>
                                                    {
                                                        flexIngrs.filter((item: any) => item.section == cat)
                                                            .map((item) => {
                                                                console.log(item)
                                                                return (<p className={styles.section_item}><strong>{item.amount && item.amount * servesInput} {item.unit}</strong> {item.item}{item.method && ','} {item.method}</p>)
                                                            })
                                                    }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            ) :
                            <div className={styles.section_category}>
                                {
                                    flexIngrs.map((item) => {
                                        return (<p className={styles.section_item}><strong>{item.amount && item.amount * servesInput} {item.unit}</strong> {item.item}{item.method && ','} {item.method}</p>)
                                    })
                                }
                            </div>
                    }

                </section>

                <section className={`${styles.section} ${styles.steps}`}>
                    <h3 className={styles.recipe_h2}>Steps</h3>
                    {
                        steps.find((item) => item.section) ?
                            findCategories(steps).map((cat: string) => {

                                return (
                                    <div className={styles.section_category}>
                                        <h4 className={styles.recipe_h3}>{cat}</h4>
                                        <ol>
                                            {steps.filter((item: any) => item.section == cat)
                                                .map((item) => {
                                                    console.log(item)
                                                    return (<li className={styles.section_item}>{item.step}</li>)
                                                })}
                                        </ol>
                                    </div>
                                )
                            }) :
                            <div className={styles.section_category}>
                                <ol>
                                    {
                                        steps.map((item) => {
                                            return (<li className={styles.section_item}>{item.step}</li>)
                                        })
                                    }
                                </ol>
                            </div>
                    }


                </section>
            </main>
        </div >
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = recipes.map((post) => ({
        params: { id: post.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const recipe = recipes.find((data) => data.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { recipe } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}

export default Recipe;