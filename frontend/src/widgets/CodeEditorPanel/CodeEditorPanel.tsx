import React, { type FC } from "react";

import CodeEditor from "@shared/components/code-editor";
import TitleBar from "@shared/components/title-bar";

const CodeEditorPanel: FC = (): React.JSX.Element => {
    return (
        <div>
            <TitleBar />
            <CodeEditor
                casualMode={false}
            />
        </div>
    );
};

export default CodeEditorPanel;