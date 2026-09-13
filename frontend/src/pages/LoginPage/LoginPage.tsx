import React, { type FC } from "react";

import AuthField from "@shared/components/auth-field";
import Button from "@shared/components/button";

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

                    <form className={styles.form} action="">
                        <AuthField 
                            label="Логин"
                            id="login"
                            type="text"
                        />

                        <AuthField 
                            label="Пароль"
                            id="password"
                            type="password"
                        />

                        <div className={styles.buttonArea}>
                            <Button format="primary">Войти</Button>
                        </div>
                    </form>

                </div>

            </div>

        </main>
    );
};

export default LoginPage;