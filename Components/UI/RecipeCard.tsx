import React from 'react';
import Image from 'next/image'
import styles from '../../styles/RecipeCard.module.scss'

type RecipeData = {
    category: string;
    rating: string;
    title: string;
    user: string;
}

const RecipeCard = ({ category, rating, title, user }: RecipeData) => {

    return (
        <a className={`${styles.recipeCard} ${styles[category]}`}>
            <Image src="https://images.unsplash.com/photo-1481931098730-318b6f776db0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=990&q=80"
                alt="Pasta"
                width={500}
                height={500}
                placeholder="blur"
                blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO8WMtQz0AEYBxVSF+FAMJHEg1jjeLoAAAAAElFTkSuQmCC" />

            <div className={styles.recipeCard_content}>
                <div className={styles.recipeCard_row1}>
                    <span>{category}</span>
                    <span>&#9734;&nbsp; {rating}</span>
                </div>
                <p className={styles.recipeCard_title}>{title}</p>
                <div className={styles.recipeCard_row3}>
                    <span>{user}</span>
                </div>
            </div>

        </a>
    );
};

export default RecipeCard;