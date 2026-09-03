import React, { type FC, type MouseEventHandler, useState } from "react";

import ConsolePanel from "@widgets/ConsolePanel";
import CodeEditorPanel from "@widgets/CodeEditorPanel";
import TaskPanel from "@widgets/TaskPanel";
import CodeActions from "@features/code-actions";

import styles from "./CodePage.module.scss"

const CodePage: FC = (): React.JSX.Element => {

    const [code, setCode] = useState<string>("");

    const sendCode: MouseEventHandler<HTMLButtonElement> = () => {
        console.log(code);
    }

    return (
        <main className={styles.challengeWorkspace}>
            <div className={styles.taskPanelArea}>
                <TaskPanel />
            </div>

            <div className={styles.codeEditorPanelArea}>
                <CodeEditorPanel
                    code={code}
                    setCode={setCode}
                />
            </div>

            <div className={styles.consolePanelArea}>
                <ConsolePanel />
            </div>

            <div className={styles.codeActionsArea}>
                <CodeActions 
                    handleClick={sendCode}
                />
            </div>
        </main>
    );
};

export default CodePage;