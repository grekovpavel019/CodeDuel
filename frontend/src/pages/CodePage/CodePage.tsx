import React, { type FC } from "react";

import Console from "@widgets/ConsolePanel";
import CodeEditorPanel from "@widgets/CodeEditorPanel";
import TaskPanel from "@widgets/TaskPanel";

const CodePage: FC = (): React.JSX.Element => {
    return (
        <>
            <CodeEditorPanel />
            <Console />
            <TaskPanel />
        </>
    );
};

export default CodePage;