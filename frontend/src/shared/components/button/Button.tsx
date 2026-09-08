import React, { type FC } from "react";

import styles from "./Button.module.scss"

type ButtonProps = {
    children: string;
    format: "primary" | "secondary";
}

const ButtonFormats = {
    primary: styles.primary,
    secondary: styles.secondary
}

const Button: FC<ButtonProps> = (props: ButtonProps): React.JSX.Element => {
    
    const {
        children,
        format
    } = props;

    return (
        <button
            className={ButtonFormats[format]}
        >
            {children}
        </button>
    );
};

export default Button;