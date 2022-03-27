import React from 'react';
import styles from '../../styles/Components/Common/Select.module.scss'

type PropTypes = {
    children: any;
    state: string | number;
    func: any;
    arr?: string[] | number[];
}

const Select = ({ state, func, arr, children, }: PropTypes) => {
    return (
        <div className={styles.selectWrapper} >
            <select value={state}
                onChange={(e) => { func(e.target.value); }}>
                {children}
                {
                    arr && arr.map(x => (<option value={x}>{x}</option>))
                }
            </select>

        </div >
    );
};

export default Select;