import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BookType } from '../../data/Props';
import colors from '../../styles/Global/Colors.module.scss'
import styles from '../../styles/Components/UI/BookCard.module.scss'
import Button from '../Common/Button';

const BookCard = ({ book }: { book: BookType }) => {

    const { title, id, recipes, color } = book

    const [feature, setFeature] = useState(0)

    return (
        <div className={`${styles.bookCard} ${colors[color]}`}>
            <div className={styles.bookCard_content}>
                <p className={styles.bookCard_content_title}>
                    {title}
                </p>
                <div className={styles.bookCard_content_recipes}>
                    {
                        recipes.map((recipe, key) => (
                            <Link href={`/recipes/${encodeURIComponent(recipe.id)}`}>
                                <a className={styles.bookCard_content_recipes_recipe} key={recipe.id} onMouseOver={e => { (setFeature(key)) }}>{recipe.title}</a>
                            </Link>
                        )
                        )
                    }
                </div>
            </div>
            <div className={styles.bookCard_imgContainer}>
                <Image src={recipes[feature].img}
                    alt={recipes[feature].title}
                    width={500}
                    height={500}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mO8WMtQz0AEYBxVSF+FAMJHEg1jjeLoAAAAAElFTkSuQmCC" />
            </div>
            <Link href={`/books/${encodeURIComponent(id)}`}>
                <Button styling='Outline' color={color}>View all</Button>
            </Link>
        </div>
    );
};

export default BookCard;