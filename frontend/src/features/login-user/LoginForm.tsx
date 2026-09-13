import React, { type FC } from "react";

import AuthField from "@shared/components/auth-field";
import Button from "@shared/components/button";

import styles from "./LoginForm.module.scss";

const LoginForm: FC = (): React.JSX.Element => {
    return (
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
    );
};

export default LoginForm;