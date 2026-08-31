import React, { type FC } from "react";

import CodeEditor from "@shared/components/code-editor";
import TitleBar from "@shared/components/title-bar";

import styles from "./CodeEditorPanel.module.scss"

const CodeEditorPanel: FC = (): React.JSX.Element => {
    return (
        <div
            className={styles.codeEditorPanel}
        >
            <TitleBar />

            <CodeEditor casualMode={false} />
        </div>
    );
};

export default CodeEditorPanel;