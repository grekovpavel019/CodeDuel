import React, { type FC } from "react";

import LoginCard from "@widgets/LoginCard/";

import styles from "./LoginPage.module.scss"

const LoginPage: FC = (): React.JSX.Element => {
    return (
        <main className={styles.login}>

            <div className={styles.container}>
                <LoginCard />
            </div>

        </main>
    );
};

export default LoginPage;