import React, { type FC } from "react";

import CodeEditor from "@shared/code-editor";

const CodePage: FC = (): React.JSX.Element => {
    return (
        <main>
            <CodeEditor casualMode={false} />
        </main>
    );
};

export default CodePage;