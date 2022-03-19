import React, { useState } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import books from '../../data/books'
import { BookType } from '../../data/Props';
import RecipeCard from '../../Components/UI/RecipeCard';
import RecipeGrid from '../../Components/UI/RecipeGrid';
import Button from '../../Components/Common/Button';
import styles from '../../styles/Pages/Book.module.scss'
import colors from '../../styles/Global/Colors.module.scss'

type Props = {
    book: BookType;
    errors: string;
}

const Book = ({ book: { id, user, title, bio, color, recipes, img } }: Props) => {
    return (
        <main className={`${styles.Book} ${colors[color]}`}>
            <Head>
                <title>{title} by {user.username} | BiteBook</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.Book_header}>
                <div className={styles.Book_header_content}>
                    <div className={styles.Book_header_row1}>
                        <h2 className={styles.Book_header_title}>{title}</h2>
                        <span>&#183;&#183;&#183;</span>
                    </div>
                    <a className={styles.Book_header_user}>@{user.username}</a>
                    <p className={styles.Book_header_bio}>{bio}</p>
                    <Button styling='Outline' color={color}>
                        Add Recipe
                    </Button>
                </div>
                <div className={styles.Book_header_img}>
                    <Image src={img} alt="Pasta"
                        width={1000}
                        height={1000}
                        placeholder="blur"
                        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO8WMtQz0AEYBxVSF+FAMJHEg1jjeLoAAAAAElFTkSuQmCC" />
                </div>
            </header>
            <RecipeGrid recipes={recipes} title='Recipes' />
        </main>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    // Call an external API endpoint to get posts
    // const res = await fetch('https://.../posts')
    // const posts = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = books.map((book) => ({
        params: { id: book.id.toString() },
    }))

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
}


export const getStaticProps: GetStaticProps = async ({ params }) => {
    try {
        const id = params?.id
        const book = books.find((data) => data.id === Number(id))
        // By returning { props: item }, the StaticPropsDetail component
        // will receive `item` as a prop at build time
        return { props: { book } }
    } catch (err: any) {
        return { props: { errors: err.message } }
    }
}

export default Book;