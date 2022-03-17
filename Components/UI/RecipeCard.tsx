import React from 'react';
import Image from 'next/image'
import styles from '../../styles/Components/UI/RecipeCard.module.scss'
import colors from '../../styles/Global/Colors.module.scss'
import Link from 'next/link'

type RecipeData = {
    category: string;
    ratings: {
        rating: number;
        amount: number
    };
    title: string;
    user: string;
    id: number;
    img: string;
}

const RecipeCard = ({ id, category, ratings, title, user, img }: RecipeData) => {

    return (
        <Link
            href={`/recipes/${encodeURIComponent(id)}`}>
            <a className={`${styles.recipeCard} ${colors[category]}`}>
                <Image src={img}
                    alt="Pasta"
                    width={500}
                    height={500}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO8WMtQz0AEYBxVSF+FAMJHEg1jjeLoAAAAAElFTkSuQmCC" />

                <div className={styles.recipeCard_content}>
                    <div className={styles.recipeCard_row1}>
                        <span>{category}</span>
                        <span>&#9734;&nbsp; {ratings.rating} ({ratings.amount})</span>
                    </div>
                    <p className={styles.recipeCard_title}>{title}</p>
                    <div className={styles.recipeCard_row3}>
                        <span>@{user}</span>
                    </div>
                </div>

            </a>
        </Link>
    );
};

export default RecipeCard;