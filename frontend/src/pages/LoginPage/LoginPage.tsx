import React, { type FC } from "react";

import LoginForm from "@features/login-user/LoginForm";

import styles from "./LoginPage.module.scss"

const LoginPage: FC = (): React.JSX.Element => {
    return (
        <main className={styles.login}>

            <div className={styles.container}>
                
                <div className={styles.content}>

                    <div className={styles.heading}>
                        <h1 className={styles.logo}>CodeDuel</h1>
                        <h2 className={styles.subLogo}>Войти</h2>
                    </div>

                    <LoginForm />

                </div>

            </div>

        </main>
    );
};

export default LoginPage;