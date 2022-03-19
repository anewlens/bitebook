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
    title?: string,
    recipes: RecipeType[]
}

const RecipeGrid = ({ title, recipes }: GridProps) => {

    const [search, setSearch] = useState('');
    const [filterControls, toggleFilters] = useState(false)
    const [type, setType] = useState('')
    const [maxTime, setTime] = useState(3);

    function filterFactory(list: RecipeType[], filter: string, category: string, rating?: number, time?: string): any {
        return list.filter(
            recipe => {
                return recipe.title.toLowerCase().includes(filter.toLowerCase())
                    && category.length > 1 ? recipe.category == category : recipe.category

            }
        ).map(recipe => (
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
            </div>

            <div className={styles.recipeGrid_grid}>
                {filterFactory(recipes, search, type)}
                {/* {recipes.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase())).map(recipe => (<RecipeCard recipe={recipe} />))} */}
            </div>
        </div>
    );
};

export default RecipeGrid;