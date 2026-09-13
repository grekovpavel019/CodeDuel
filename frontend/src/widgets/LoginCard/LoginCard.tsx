import React, { type FC } from "react";

import LoginForm from "@features/login-user/LoginForm";
import AuthHeading from "@shared/components/auth-heading/AuthHeading";

import styles from "./LoginCard.module.scss";

const LoginCard: FC = (): React.JSX.Element => {
    return (
        <div className={styles.content}>
            <AuthHeading label="Войти"/>
            <LoginForm />
        </div>
    );
};

export default LoginCard;