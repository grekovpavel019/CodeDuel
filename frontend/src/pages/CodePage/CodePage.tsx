import React, { type FC } from "react";

import ConsolePanel from "@widgets/ConsolePanel";
import CodeEditorPanel from "@widgets/CodeEditorPanel";
import TaskPanel from "@widgets/TaskPanel";

import styles from "./CodePage.module.scss"

const CodePage: FC = (): React.JSX.Element => {
    return (

        
        <main className={styles.challengeWorkspace}>
            <div className={styles.taskPanelArea}>
                <TaskPanel />
            </div>

            <div className={styles.codeEditorPanelArea}>
                <CodeEditorPanel />
            </div>

            <div className={styles.consolePanelArea}>
                <ConsolePanel />
            </div>
        </main>
    );
};

export default CodePage;