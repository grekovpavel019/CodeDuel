import React, { type FC, type MouseEventHandler } from "react";

import styles from "./CodeActions.module.scss"

type CodeActionsProps = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const CodeActions: FC<CodeActionsProps> = (props: CodeActionsProps): React.JSX.Element => {

    const {
        handleClick 
    } = props;


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