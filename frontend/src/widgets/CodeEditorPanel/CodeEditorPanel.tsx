import React, { type Dispatch, type FC, type SetStateAction } from "react";

import CodeEditor from "@shared/components/code-editor";
import TitleBar from "@shared/components/title-bar";

import styles from "./CodeEditorPanel.module.scss"

type CodeEditorPanelProps = {
    code: string;
    setCode: Dispatch<SetStateAction<string>>;
}

const CodeEditorPanel: FC<CodeEditorPanelProps> = (props: CodeEditorPanelProps): React.JSX.Element => {
    
    const {
        code,
        setCode
    } = props;

    return (
        <div
            className={styles.codeEditorPanel}
        >
            <TitleBar>Code</TitleBar>

            <CodeEditor 
                code={code}
                setCode={setCode}
                casualMode={false} 
            />
        </div>
    );
};

export default CodeEditorPanel;