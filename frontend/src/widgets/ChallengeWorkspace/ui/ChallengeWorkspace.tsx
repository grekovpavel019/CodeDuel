import React, { useState, type FC } from "react";

import Console from "./Console";
import TaskDescription from "@entities/task";
import CodeEditor from "@shared/code-editor";
import TitleBar from "@shared/title-bar";
import Button from "@shared/button";

import styles from "./ChallengeWorkspace.module.scss"

const ChallengeWorkspace: FC = (): React.JSX.Element => {

    const [code, setCode] = useState("");

    const handleClick = (): void => {
        console.log(code)
    }

    return (
        <div
            className={styles.challengeWorkspace}
        >
            <div className={styles.taskDescriptionArea}>
                <TitleBar />
                <TaskDescription />
            </div>

            <div className={styles.codeEditorArea}>
                <TitleBar />
                <CodeEditor
                    casualMode={false}
                    onChange={setCode}
                />
            </div>

            <div className={styles.consoleArea}>
                <TitleBar />
                <Console />
            </div>

            <div className={styles.submitCodeArea}>
                <Button
                    handleClick={handleClick}
                >Клик</Button>
            </div>

        </div>
    );
};

export default ChallengeWorkspace;