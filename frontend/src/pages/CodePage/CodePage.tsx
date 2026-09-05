import React, { type FC, type MouseEventHandler, useState } from "react";

import Header from "@widgets/Header/Header";
import ConsolePanel from "@widgets/ConsolePanel";
import CodeEditorPanel from "@widgets/CodeEditorPanel";
import TaskPanel from "@widgets/TaskPanel";
import CodeActions from "@features/code-actions";

import styles from "./CodePage.module.scss"

const CodePage: FC = (): React.JSX.Element => {

    const [code, setCode] = useState<string>("");

    const sendCode: MouseEventHandler<HTMLButtonElement> = async () => {
        const req = await fetch("http://127.0.0.1:3000/code", {
            method: "POST",
            body: JSON.stringify({ code }),
            headers: {
                "Content-Type": "application/json"
            }
        });
    }

    return (
        <div 
            className={styles.codePage}
        >
            <Header></Header>
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

        </div>

    );
};

export default CodePage;