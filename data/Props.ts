export interface StepType {
    section?: string | null;
    step: string;
}

export interface IngredientType {
    amount: number | null;
    unit: string | null;
    item: string;
    method: string | null;
    section: string | null;
}

export interface RecipeType {
    id: number;
    title: string;
    img: string;
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
        amount: number;
    };
    forks: number;
    ingredients: IngredientType[];
    steps: StepType[];
};

export interface BookType {
    id: number;
    user: {
        id: number;
        username: string;
    }
    title: string;
    color: string;
    recipes: RecipeType[];
}
