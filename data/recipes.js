const recipes = [
    {
        id: 12,
        title: 'Barbacoa Tacos with Charred Corn',
        img: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        category: 'Mains',
        date: 'June 4, 2021',
        user: 'anewlens',
        description: 'Slow cooked to perfection. Watch the cooking time or you’ll get dry meat!',
        servings: '3-4',
        time: {
            active: '1 hour',
            total: '3 hours'
        },
        ratings: {
            rating: 3.4,
            amount: 52
        },
        forks: 235,
        ingredients: [
            {
                amount: 3,
                unit: 'lb',
                item: 'steaks',
                method: null,
                section: 'Steak',
            },
            {
                amount: 4,
                unit: 'tbsp',
                item: 'lime juice',
                method: 'freshly squeezed',
                section: 'Steak',
            },
            {
                amount: 1,
                unit: null,
                item: 'white onion',
                method: 'finely diced',
                section: 'Salsa'
            },
            {
                amount: 1,
                unit: null,
                item: 'medium tomato',
                method: 'finely diced',
                section: 'Salsa'
            }
        ],
        steps: [
            {
                section: 'Steak',
                step: 'Adjust oven rack to lower middle position and preheat oven to 275°F. Add dried chiles to large heavy-bottomed Dutch oven or stock pot and cook over medium-high heat, stirring frequently, until slightly darkened with intense, roasted aroma, 2 to 5 minutes. Do not allow to smoke. Remove chiles to small bowl and set aside. Alternatively, place dried chiles on a microwave-safe plate and microwave on high power in 15-second increments until pliable and toasted-smelling, about 30 seconds total. Transfer to a 2-quart microwave-safe liquid measuring cup or bowl. Add 2 cups chicken broth, cover with plastic wrap, and microwave on high power until gently simmering, about 5 minutes. Remove from microwave and set aside.',
            },
            {
                section: 'Steak',
                step: 'Meanwhile, heat 1 tablespoon oil in now-empty Dutch oven over high heat until shimmering. Season oxtails all over with salt and pepper, and cook, turning occasionally, until well-browned on all sides, about 8 minutes total. Remove oxtails and set aside. Reduce heat to medium.',
            },
            {
                section: 'Steak',
                step: 'Add remaining 2 tablespoons oil and heat until shimmering. Add onion and garlic and cook, stirring frequently, until deep brown and onion is just starting to char on the edges, about 10 minutes. Add cumin, cloves, and oregano and cook, stirring constantly, until fragrant, about 30 seconds. Add chipotle chiles, vinegar, and remaining chicken broth. Scrape up browned bits from bottom of pan, simmer until reduced by about half, then transfer entire contents to the jar of a blender.',
            },
            {
                section: "Salsa",
                step: 'Adjust oven rack to lower middle position and preheat oven to 275°F. Add dried chiles to large heavy-bottomed Dutch oven or stock pot and cook over medium-high heat, stirring frequently, until slightly darkened with intense, roasted aroma, 2 to 5 minutes. Do not allow to smoke. Remove chiles to small bowl and set aside. Alternatively, place dried chiles on a microwave-safe plate and microwave on high power in 15-second increments until pliable and toasted-smelling, about 30 seconds total. Transfer to a 2-quart microwave-safe liquid measuring cup or bowl. Add 2 cups chicken broth, cover with plastic wrap, and microwave on high power until gently simmering, about 5 minutes. Remove from microwave and set aside.',
            },
            {
                section: "Salsa",
                step: 'Meanwhile, heat 1 tablespoon oil in now-empty Dutch oven over high heat until shimmering. Season oxtails all over with salt and pepper, and cook, turning occasionally, until well-browned on all sides, about 8 minutes total. Remove oxtails and set aside. Reduce heat to medium, about 30 seconds. Add chipotle chiles, vinegar, and remaining chicken broth. Scrape up browned bits from bottom of pan, simmer until reduced by about half, then transfer entire contents to the jar of a blender.',
            }
        ]
    },
    {
        id: 23,
        title: 'Egg on Avo Toast',
        img: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80',
        category: 'Breakfast',
        date: 'January 3, 2022',
        user: 'millionel',
        description: 'Simple, quick and delicious!',
        servings: '1',
        time: {
            active: '30 minutes',
            total: '35 minutes'
        },
        ratings: {
            rating: 3.4,
            amount: 52
        },
        forks: 235,
        ingredients: [
            {
                amount: 1,
                unit: null,
                item: 'egg',
                method: null,
                section: null,
            },
            {
                amount: 1,
                unit: null,
                item: 'slice of toast',
                method: null,
                section: null,
            },
            {
                amount: 1,
                unit: null,
                item: 'avocado',
                method: 'split, pitted and diced',
                section: null,
            },
            {
                amount: 1,
                unit: 'tbsp',
                item: 'butter',
                method: null,
                section: null,
            },
        ],
        steps: [
            {
                section: null,
                step: 'Adjust oven rack to lower middle position and preheat oven to 275°F. Add dried chiles to large heavy-bottomed Dutch oven or stock pot and cook over medium-high heat, stirring frequently, until slightly darkened with intense, roasted aroma, 2 to 5 minutes. Do not allow to smoke. Remove chiles to small bowl and set aside. Alternatively, place dried chiles on a microwave-safe plate and microwave on high power in 15-second increments until pliable and toasted-smelling, about 30 seconds total. Transfer to a 2-quart microwave-safe liquid measuring cup or bowl. Add 2 cups chicken broth, cover with plastic wrap, and microwave on high power until gently simmering, about 5 minutes. Remove from microwave and set aside.',
            },
            {
                section: null,
                step: 'Meanwhile, heat 1 tablespoon oil in now-empty Dutch oven over high heat until shimmering. Season oxtails all over with salt and pepper, and cook, turning occasionally, until well-browned on all sides, about 8 minutes total. Remove oxtails and set aside. Reduce heat to medium.',
            },
            {
                section: null,
                step: 'Add remaining 2 tablespoons oil and heat until shimmering. Add onion and garlic and cook, stirring frequently, until deep brown and onion is just starting to char on the edges, about 10 minutes. Add cumin, cloves, and oregano and cook, stirring constantly, until fragrant, about 30 seconds. Add chipotle chiles, vinegar, and remaining chicken broth. Scrape up browned bits from bottom of pan, simmer until reduced by about half, then transfer entire contents to the jar of a blender.',
            },
            {
                section: null,
                step: 'Adjust oven rack to lower middle position and preheat oven to 275°F. Add dried chiles to large heavy-bottomed Dutch oven or stock pot and cook over medium-high heat, stirring frequently, until slightly darkened with intense, roasted aroma, 2 to 5 minutes. Do not allow to smoke. Remove chiles to small bowl and set aside. Alternatively, place dried chiles on a microwave-safe plate and microwave on high power in 15-second increments until pliable and toasted-smelling, about 30 seconds total. Transfer to a 2-quart microwave-safe liquid measuring cup or bowl. Add 2 cups chicken broth, cover with plastic wrap, and microwave on high power until gently simmering, about 5 minutes. Remove from microwave and set aside.',
            },
            {
                section: null,
                step: 'Meanwhile, heat 1 tablespoon oil in now-empty Dutch oven over high heat until shimmering. Season oxtails all over with salt and pepper, and cook, turning occasionally, until well-browned on all sides, about 8 minutes total. Remove oxtails and set aside. Reduce heat to medium, about 30 seconds. Add chipotle chiles, vinegar, and remaining chicken broth. Scrape up browned bits from bottom of pan, simmer until reduced by about half, then transfer entire contents to the jar of a blender.',
            }
        ]
    }
]

export default recipes