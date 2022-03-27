import { NextPage } from 'next';
import Head from 'next/head';
import React, { useState, useReducer } from 'react';
import Input from '../../Components/Common/Input';
import Select from '../../Components/Common/Select';
import { IngredientType } from '../../data/Props'


interface timingTypes { active: { amount: string | number, unit: number | string, }, total: { amount: number | string, unit: number | string, } }


const CreateRecipe: NextPage = () => {

    const timingReducer = (state: timingTypes, action: { type: string, payload: string | number }): timingTypes => {
        switch (action.type) {
            case 'active_amount':
                return { active: { amount: action.payload, unit: state.active.unit }, total: { ...state.total } };
                break;
            case 'active_unit':
                return { active: { amount: state.active.amount, unit: action.payload }, total: { ...state.total } };
                break;
            case 'total_amount':
                return { ...state, total: { amount: action.payload, unit: state.total.unit } };
                break;
            case 'total_unit':
                return { ...state, total: { amount: state.total.amount, unit: action.payload } };
                break;
            default:
                return state
        }
    }

    function reduceMoreIngr(state: IngredientType[], action: any, updater: string) {
        let newIngr = { ...state[action.index], [updater]: action.payload };
        let newState = [...state];
        newState[action.index] = newIngr;
        return newState
    }

    const ingrReducer = (state: IngredientType[], action: any): IngredientType[] => {
        switch (action.type) {
            case 'set_amount':
                return reduceMoreIngr(state, action, 'amount')
                break;
            case 'set_unit':
                return reduceMoreIngr(state, action, 'unit')
                break;
            case 'set_item':
                return reduceMoreIngr(state, action, 'item');
                break;
            case 'set_method':
                return reduceMoreIngr(state, action, 'method')
            default:
                return state
        }
    }

    const [title, setTitle] = useState('');
    const [category, setCategory] = useState('');
    const [bio, setBio] = useState('');
    const [servings, setServings] = useState(Number());
    const [timing, setTiming] = useReducer(timingReducer, { active: { amount: 1, unit: '' }, total: { amount: 1, unit: '' } })
    const [ingredients, setIngredients] = useReducer(ingrReducer, [{ amount: 0, unit: '', item: '', method: '', section: '' }])
    const [steps, setSteps] = useState([])


    return (

        <main>
            <Head>
                <title>Create a new recipe | Bitebook</title>
                <meta name="description" content="A better way to collect recipes" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h2>Create a recipe</h2>
            <form onSubmit={e => { e.preventDefault() }}>
                <Input state={title} func={(e: React.ChangeEvent<HTMLInputElement>) => { setTitle(e.currentTarget.value) }} placeholder='Title' />
                <Select state={category} func={setCategory} >
                    <option value="">Category</option>
                    <option value="Mains">Mains</option>
                    <option value="Breakfast">Breakfast</option>
                    <option value="Sides">Sides</option>
                    <option value="Apps">Apps</option>
                    <option value="Drinks">Drinks</option>
                    <option value="Desserts">Desserts</option>
                </Select>
                <textarea value={bio} onChange={e => { setBio(e.target.value) }} />
                <div>
                    <span>
                        Serve{servings > 1 && 's'}: <input type="number" value={servings} onChange={e => { setServings(Number(e.target.value)) }} />
                    </span>
                </div>
                <div>
                    <span>
                        <strong>Active Time: </strong>
                        <input type='number' value={timing.active.amount} onChange={e => setTiming({ type: 'active_amount', payload: Number(e.target.value) })} />
                        <select value={timing.active.unit} onChange={e => setTiming({ type: 'active_unit', payload: e.target.value })}>
                            <option value={`minute${timing.active.amount > 1 ? 's' : ''}`}>minute{timing.active.amount > 1 ? 's' : ''}</option>
                            <option value={`hour${timing.active.amount > 1 ? 's' : ''}`}>hour{timing.active.amount > 1 ? 's' : ''}</option>
                        </select>
                    </span>
                    <span>
                        <strong>Total Time: </strong>
                        <input type='number' min={1} step={.25} value={timing.total.amount} onChange={e => setTiming({ type: 'total_amount', payload: Number(e.target.value) })} />
                        <select value={timing.total.unit} onChange={e => setTiming({ type: 'total_unit', payload: e.target.value })}>
                            <option value={`minute${timing.total.amount > 1 ? 's' : ''}`}>minute{timing.total.amount > 1 ? 's' : ''}</option>
                            <option value={`hour${timing.total.amount > 1 ? 's' : ''}`}>hour{timing.total.amount > 1 ? 's' : ''}</option>
                        </select>
                    </span>
                </div>
                <div>
                    <input type="text" placeholder='Section (Optional)' /><br />
                    <input type="number" placeholder='1' min={0} value={ingredients[0].amount} onChange={e => { setIngredients({ type: 'set_amount', index: 0, payload: Number(e.target.value) }) }} />
                    <input type="text" placeholder='tbsp' value={ingredients[0].unit} onChange={e => { setIngredients({ type: 'set_unit', index: 0, payload: e.target.value }) }} />
                    <input type="text" placeholder='garlic cloves' value={ingredients[0].item} onChange={e => { setIngredients({ type: 'set_item', index: 0, payload: e.target.value }) }} />
                    <input type="text" placeholder='finely diced' value={ingredients[0].method} onChange={e => { setIngredients({ type: 'set_method', index: 0, payload: e.target.value }) }} />
                </div>
            </form>
        </main>
    );
};

export default CreateRecipe;