import React, { type FC } from "react";

import "./styles/global.scss"
import "./styles/variables.scss"
import "./styles/reset.scss"

import CodePage from "@pages/CodePage"

const App: FC = (): React.JSX.Element => {
    return (
        <CodePage />
    );
};

export default App;