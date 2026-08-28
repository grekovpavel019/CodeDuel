import React, { type FC } from "react";

import TitleBar from "@shared/components/title-bar";

import styles from "./ConsolePanel.module.scss"

const Console: FC = (): React.JSX.Element => {
        
    return (
        <div 
            className={styles.consolePanel}
        >
            <TitleBar />
            <div
                className={styles.console}
            >
                Консоль
            </div>
        </div>
    );
};

export default Console;