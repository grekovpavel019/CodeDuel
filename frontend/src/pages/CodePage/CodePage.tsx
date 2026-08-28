import React, { type FC } from "react";

import Console from "@widgets/ConsolePanel";
import CodeEditorPanel from "@widgets/CodeEditorPanel";
import TaskPanel from "@widgets/TaskPanel";

import styles from "./CodePage.module.scss"

const CodePage: FC = (): React.JSX.Element => {
    return (
        <main
            className={styles.challengeWorkspace}
        >
            <TaskPanel />
            <CodeEditorPanel />
            <Console />
        </main>
    );
};

export default CodePage;