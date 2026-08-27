import React, { type FC } from "react";

import styles from "./Button.module.scss"

type ButtonProps = {
    children: string
}

const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {

    const {
        children
    } = props;

    const handleClick = (): void => {
        console.log("Клик")
    }

    return (
        <button
            onClick={handleClick}
            className={styles.button}
        >
            {children}
        </button>
    );
};

export default Button;