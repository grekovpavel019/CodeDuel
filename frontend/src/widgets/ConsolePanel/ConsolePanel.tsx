import React, { type FC } from "react";

import TitleBar from "@shared/components/title-bar";
import CodeBlock from "@shared/components/code-block";

import styles from "./ConsolePanel.module.scss"

const Console: FC = (): React.JSX.Element => {
        
    return (
        <div 
            className={styles.consolePanel}
        >
            <TitleBar>Console</TitleBar>

            <div
                className={styles.console}
            >
                <div className="consoleHeader">
                    <span className="outputTime">0</span>
                </div>

                <CodeBlock>
                    {"хуй\nхуй\n"}
                </CodeBlock>
            </div>
            
        </div>
    );
};

export default Console;