export interface StepType {
    section?: string | null;
    step: string;
}

export interface IngredientType {
    amount: number;
    unit: string;
    item: string;
    method: string;
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
    public?: boolean;
};

export interface BookType {
    id: number;
    user: {
        id: number;
        username: string;
    };
    bio?: string;
    title: string;
    color: string;
    recipes: RecipeType[];
    img: string;
}
