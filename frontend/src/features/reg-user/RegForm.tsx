import React, { type FC } from "react";

import AuthField from "@shared/components/auth-field";
import Button from "@shared/components/button";

import styles from "./RegForm.module.scss"

const RegForm: FC = (): React.JSX.Element => {
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

            <AuthField 
                label="Подтвердите пароль"
                id="password_confirm"
                type="password"
            />

            <div className={styles.buttonArea}>
                <Button format="primary">Зарегаться</Button>
            </div>

        </form>
    );
};

export default RegForm;