import React from 'react';
import styles from '../../styles/Button.module.scss'

type ButtonProps = {
    children: any;
    styling: string;
}

const Button = ({ children, styling }: ButtonProps) => {

    return (
        <button className={styles[styling]}>
            {children}
        </button>
    );
};

export default Button;