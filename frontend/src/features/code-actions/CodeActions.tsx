import React, { type FC, type MouseEventHandler } from "react";

import Button from "@shared/components/button";

type CodeActionsProps = {
    handleClick: MouseEventHandler<HTMLButtonElement>;
}

const CodeActions: FC<CodeActionsProps> = (): React.JSX.Element => {


    return (
        <Button format="primary">Run</Button>
    );
};

export default CodeActions;