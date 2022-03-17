import React from 'react';
import styles from '../../styles/Components/Common/Input.module.scss'

type InputProps = {
    state: string;
    func: any;
    placeholder: string;
}

const Input = ({ state, func, placeholder }: InputProps) => {
    return (
        <input type="text" className={styles.input} placeholder={placeholder} value={state} onChange={func} />
    );
};

export default Input;