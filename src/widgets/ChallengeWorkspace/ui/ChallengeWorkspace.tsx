import React, { type FC } from "react";

import CodeEditor from "@shared/code-editor";
import Console from "./Console";
import TaskDescription from "@entities/task";

import styles from "./ChallengeWorkspace.module.scss"

const ChallengeWorkspace: FC = (): React.JSX.Element => {
    return (
        <div
            className={styles.challengeWorkspace}
        >
            <TaskDescription 
                className={styles.taskDescription}
            />
            <CodeEditor
                className={styles.codeEditor}
                casualMode={false}
            />
            <Console 
                className={styles.console}
            />

        </div>
    );
};

export default ChallengeWorkspace;