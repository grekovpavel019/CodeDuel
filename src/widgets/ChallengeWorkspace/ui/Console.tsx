import React, { type FC } from "react";

import styles from "./Console.module.scss"

type ConsoleProps = {
    className?: string;
}

const Console: FC<ConsoleProps> = (props: ConsoleProps): React.JSX.Element => {
    
    const {
        className
    } = props;
    
    return (
        <div 
            className={className}
        >
            Консоль
        </div>
    );
};

export default Console;