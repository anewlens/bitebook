import React from 'react';
import styles from '../../styles/Components/Common/Button.module.scss'
import Colors from '../../styles/Global/Colors.module.scss'

type ButtonProps = {
    children: any;
    styling: string;
    color?: string;
    onClick?: () => void;
}

const Button = ({ children, styling, color, onClick }: ButtonProps) => {

    return (
        <button className={`${styles[styling]} ${color && Colors[color]}`} onClick={onClick}>
            {children}
        </button>
    );
};

export default Button;