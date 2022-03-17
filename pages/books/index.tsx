import React, { SyntheticEvent, useState } from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import BookIcon from '../../Components/UI/SVGs/BookIcon';
import styles from '../../styles/Pages/Books.module.scss'
import Input from '../../Components/Common/Input';
import books from '../../data/books.js'
import BookCard from '../../Components/UI/BookCard';

const Books: NextPage = () => {

    const [filter, setFilter] = useState('');

    return (
        <main className={styles.books}>
            <Head>
                <title>Your Books | BiteBook</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                <div>
                    <BookIcon />
                    <h2 className={styles.header_title}>Your Books</h2>
                </div>
                <Input placeholder='Search' state={filter} func={(e: React.ChangeEvent<HTMLInputElement>) => { setFilter(e.currentTarget.value) }} />
            </header>
            <section className={styles.books_bookList}>
                {
                    filter.toLowerCase().length > 0 ?
                        //filter boooks based on the title...
                        books.filter((book) =>
                            book.title.toLowerCase().includes(filter.toLowerCase())
                            //or the recipe titles
                            || book.recipes.some(recipe =>
                                recipe.title.toLowerCase().includes(filter.toLowerCase())
                            )
                        )
                            //then map out the results
                            .map(book => (
                                <BookCard book={book} />
                            )) :
                        //else, just the originals, pls
                        books.map(book => <BookCard book={book} />)

                }
            </section>
        </main>

    );
};


export default Books;