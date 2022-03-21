import React, { useState } from 'react';
import { motion } from 'framer-motion';
import styles from '../../styles/Components/UI/RecipeGrid.module.scss'
import { RecipeType } from '../../data/Props'
import RecipeCard from './RecipeCard'
import Input from '../Common/Input';
import Button from '../Common/Button';
import Filter from './SVGs/Filter';
import Select from '../Common/Select';
import Range from '../Common/Range';

type GridProps = {
    recipes: RecipeType[]
    title?: string,
}

const RecipeGrid = ({ recipes, title }: GridProps) => {

    const [search, setSearch] = useState('');
    const [filterControls, toggleFilters] = useState(false)
    const [type, setType] = useState('')
    const [maxTime, setTime] = useState(24);
    const [minRating, setRating] = useState(0)
    const [inclIngr, setIngr] = useState('')

    function convertTime(time: string): number {
        let unit;
        let amount = parseInt(time.match(/[0-9]+/g));

        if (time.includes('hour')) {
            unit = 'hour'
        } else if (time.includes('minute')) {
            unit = 'minute'
        }

        if (unit == 'minute') {
            return (amount / 60)
        } else {
            return amount
        }
    }

    function filterFactory(list: RecipeType[], filter: string, category: string, rating: number, time: number): any {
        return list.filter(
            recipe => {
                return recipe.title.toLowerCase().includes(filter.toLowerCase()) && time >= convertTime(recipe.time.total) && rating <= recipe.ratings.rating

            }
        ).filter(recipe => category.length > 1 ? recipe.category == category : true).map(recipe => (
            <RecipeCard recipe={recipe} />)
        )
    }

    return (
        <div className={styles.recipeGrid}>
            <header className={styles.recipeGrid_header}>
                <h3 className={styles.recipeGrid_header_title}>{title}</h3>
                <div className={styles.recipeGrid_header_buttons}>
                    <Input state={search} placeholder='Search' func={(e: React.ChangeEvent<HTMLInputElement>) => { setSearch(e.currentTarget.value) }} />

                    <Button styling='Symbol' onClick={() => { toggleFilters(!filterControls) }}>
                        <Filter />
                    </Button>
                </div>

            </header>
            <div className={`${styles.recipeGrid_filters} ${filterControls && styles.open}`}>
                <Select arr={recipes.map(recipe => recipe.category)}
                    state={type}
                    func={setType}>
                    <option value=''>Dish Type</option>
                </Select>
                <Range label='Max Time' state={maxTime} func={setTime} />
                <Select arr={recipes.map(recipe => recipe.ratings.rating)}
                    state={minRating}
                    func={setRating}
                    customChildren>
                    <option value={0}>Min Rating</option>
                    <option value={5}>☆☆☆☆☆</option>
                    <option value={4}>☆☆☆☆</option>
                    <option value={3}>☆☆☆</option>
                    <option value={2}>☆☆</option>
                    <option value={1}>☆</option>
                </Select>
                {/* <Select arr={recipes.map(recipe => recipe.ingredients.map(ingr => ingr.item)).flat()}
                    state={inclIngr}
                    func={setIngr}>
                    <option value=''>Ingredients</option>
                </Select> */}
            </div>

            <div className={styles.recipeGrid_grid}>
                {filterFactory(recipes, search, type, minRating, maxTime)}
                {/* {recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase())).map(recipe => (<RecipeCard recipe={recipe} />))} */}
            </div>
        </div>
    );
};

export default RecipeGrid;