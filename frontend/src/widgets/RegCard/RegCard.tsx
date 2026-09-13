import React, { type FC } from "react";

import AuthField from "@shared/components/auth-field";
import Button from "@shared/components/button";
import AuthHeading from "@shared/components/auth-heading";

import styles from "./RegCard.module.scss";

const RegCard: FC = (): React.JSX.Element => {
    return (
        <div className={styles.content}>
            <AuthHeading label="Регистрация" />

            <form action="">

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

                <Button format="primary">
                    Зарегаться
                </Button>

            </form>
        </div>
    );
};

export default RegCard;