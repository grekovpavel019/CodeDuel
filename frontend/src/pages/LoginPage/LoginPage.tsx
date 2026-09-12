import React, { type FC } from "react";

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
                        <div className={styles.field}>
                            <input id="login" type="text" placeholder=" "/>
                            <label htmlFor="password">Логин</label>
                        </div>

                        <div className={styles.field}>
                            <input id="password" type="password" placeholder=" "/>
                            <label htmlFor="password">Пароль</label>
                        </div>

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