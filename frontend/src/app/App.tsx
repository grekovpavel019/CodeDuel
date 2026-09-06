import React, { type FC, useState } from "react";

import "./styles/global.scss"
import "./styles/variables.scss"
import "./styles/reset.scss"

import CodePage from "@pages/CodePage"
import AuthPage from "@pages/AuthPage"

import { Routes, Route } from "react-router-dom";

const App: FC = (): React.JSX.Element => {

    const [name, setName] = useState(null);

    return (

        <Routes>

            <Route
                path="/code"
                element={
                    <CodePage 
                        name={name}
                    />
                }
            />

            <Route
                path="/"
                element={
                    <AuthPage />
                }
            />
        </Routes>
    );
};

export default App;