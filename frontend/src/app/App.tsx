import React, { type FC, useState } from "react";

import "./styles/global.scss"
import "./styles/variables.scss"
import "./styles/reset.scss"

import CodePage from "@pages/CodePage"
import LandingPage from "@pages/LandingPage"

import { Routes, Route } from "react-router-dom";
import LoginPage from "@pages/LoginPage";

const App: FC = (): React.JSX.Element => {

    const [name, setName] = useState(null);

    return (

        <Routes>

            <Route
                path="/app"
                element={
                    <CodePage 
                        name={name}
                    />
                }
            />

            <Route
                path="/"
                element={
                    <LandingPage />
                }
            />

            <Route 
                path="/login"
                element={
                    <LoginPage />
                }
            />
        </Routes>
    );
};

export default App;