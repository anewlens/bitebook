import React, { useEffect, useState } from 'react';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import recipes from '../../data/recipes.js'
import styles from '../../styles/Recipe.module.scss'
import Fork from '../../Components/UI/Fork';

type Props = {
    recipe: {
        img: string;
        title: string;
        category: string;
        date: string;
        user: string;
        description: string;
        servings: string;
        time: {
            active: string;
            total: string;
        };
        ratings: {
            rating: number;
            number: number;
        };
        forks: number;
        ingredients: [{ amount: number | null; unit: string | null; item: string; method: string | null; section: string | null; }];
        steps: [{ section: string | null; step: string; }]
    };
    errors: string
}

const Recipe = ({ recipe: { img, title, category, date, user, description, servings, time, ratings, forks, ingredients, steps }, errors }: Props) => {

    const findCategories = (array: [any]) => {
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
                <title>{title} | BiteBook</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={`${styles.recipe} ${styles[category]}`}>
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
                                <span className={styles.header_servings}><strong>Serves:</strong> {servings}</span>
                                <span className={styles.header_ratings}>&#9734;  {ratings.rating} ({ratings.number})</span>
                            </div>
                            <div className={styles.header_stats_row}>
                                <div className={styles.header_time}>
                                    <span><strong>Active Time:</strong> {time.active}</span>
                                    <span><strong>Total Time:</strong> {time.total}</span>
                                </div>
                                <span className={styles.header_forks}><Fork />{forks}</span>
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
                    <h3 className={styles.recipe_h2}>Ingredients</h3>
                    <div className={styles.section_cats}>
                        {
                            findCategories(ingredients).map((cat: string) => {

                                return (
                                    <div className={styles.section_category}>
                                        <h4 className={styles.recipe_h3}> {cat}</h4>
                                        {
                                            ingredients.filter((item: any) => item.section == cat)
                                                .map((item) => {
                                                    console.log(item)
                                                    return (<p className={styles.section_item}><strong>{item.amount} {item.unit}</strong> {item.item}{item.method && ','} {item.method}</p>)
                                                })
                                        }
                                    </div>
                                )
                            })
                        }

                        {
                            ingredients.filter(item => !item.section).map((item) => {
                                return (<p className={styles.section_item}><strong>{item.amount} {item.unit}</strong> {item.item}{item.method && ','} {item.method}</p>)
                            })
                        }
                    </div>
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