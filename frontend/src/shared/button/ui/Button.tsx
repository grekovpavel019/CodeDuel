import React, { type FC } from "react";

import styles from "./Button.module.scss"

type ButtonProps = {
    children: string,

    handleClick: () => void;
}

const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {

    const {
        children,

        handleClick
    } = props;

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