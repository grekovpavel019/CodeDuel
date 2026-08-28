import React, { type FC } from "react";

import TitleBar from "@shared/components/title-bar";

import styles from "./ConsolePanel.module.scss"

type ConsoleProps = {
    className?: string;
}

const Console: FC<ConsoleProps> = (props: ConsoleProps): React.JSX.Element => {
    
    const {
        className
    } = props;
    
    return (
        <div>
            <TitleBar />
            <div 
                className={`${styles.console} ${className}`}
                >
                Консоль
            </div>
        </div>
    );
};

export default Console;