import React from 'react';

import styles from '../../styles/Components/UI/RecipeGrid.module.scss'

type GridProps = {
    children?: any
}

const RecipeGrid = ({ children }: GridProps) => {
    return (
        <div className={styles.recipeGrid}>
            {children}
        </div>
    );
};

export default RecipeGrid;