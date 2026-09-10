import React, { type FC, type MouseEventHandler } from "react";

import styles from "./CodeActions.module.scss"
import Button from "@shared/components/button";

type CodeActionsProps = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const CodeActions: FC<CodeActionsProps> = (props: CodeActionsProps): React.JSX.Element => {

    const {
        handleClick 
    } = props;


    return (
        <Button format="primary">Run</Button>
    );
};

export default CodeActions;