import React, { type FC } from "react";

import styles from "./CodeActions.module.scss"

const CodeActions: FC = (): React.JSX.Element => {

    const handleClick = () => {
        console.log("Кнопка сработала")
    }

    return (
        <button
            className={styles.runButton}
            onClick={handleClick}
        >
            Run
        </button>
    );
};

export default CodeActions;