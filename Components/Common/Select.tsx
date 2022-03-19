import React from 'react';
import styles from '../../styles/Components/Common/Select.module.scss'

type PropTypes = {
    arr: string[];
    children: any;
    state: string;
    func: any;
}

const Select = ({ state, func, arr, children }: PropTypes) => {
    return (
        <div className={styles.selectWrapper} >
            <select value={state}
                onChange={(e) => { func(e.target.value); }}>
                {children}
                {
                    arr.map(x => (<option value={x}>{x}</option>))
                }
            </select>

        </div >
    );
};

export default Select;