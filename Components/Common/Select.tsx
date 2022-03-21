import React from 'react';
import styles from '../../styles/Components/Common/Select.module.scss'

type PropTypes = {
    arr: string[] | number[];
    children: any;
    state: string | number;
    func: any;
    customChildren?: boolean;
}

const Select = ({ state, func, arr, children, customChildren }: PropTypes) => {
    return (
        <div className={styles.selectWrapper} >
            <select value={state}
                onChange={(e) => { func(e.target.value); }}>
                {children}
                {
                    !customChildren && arr.map(x => (<option value={x}>{x}</option>))
                }
            </select>

        </div >
    );
};

export default Select;