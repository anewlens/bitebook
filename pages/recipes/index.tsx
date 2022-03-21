import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import RecipeGrid from '../../Components/UI/RecipeGrid';
import recipes from '../../data/recipes'
import styles from '../../styles/Pages/Recipes.module.scss'
import colors from '../../styles/Global/Colors.module.scss'

const Recipes: NextPage = () => {
    return (
        <main className={`${styles.Recipes} ${colors.Orange}`}>
            <Head>
                <title>Your Recipes</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RecipeGrid recipes={recipes} title="Your Recipes" />

        </main>
    );
};

export default Recipes;