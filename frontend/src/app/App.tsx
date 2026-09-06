import React, { type FC, useState } from "react";

import "./styles/global.scss"
import "./styles/variables.scss"
import "./styles/reset.scss"

import CodePage from "@pages/CodePage"

const App: FC = (): React.JSX.Element => {

    const [name, setName] = useState(null);

    return (
        <CodePage 
            name={name}
        />
    );
};

export default App;