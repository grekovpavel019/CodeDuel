import React, { type FC } from "react";

import CodeEditor from "@shared/code-editor";

const ChallengeWorkspace: FC = (): React.JSX.Element => {
    return (
        <>
            <CodeEditor 
                casualMode={false}
            />
        </>
    );
};

export default ChallengeWorkspace;