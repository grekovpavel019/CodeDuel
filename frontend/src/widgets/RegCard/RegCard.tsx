import React, { type FC } from "react";

import RegForm from "@features/reg-user";
import AuthHeading from "@shared/components/auth-heading";

import styles from "./RegCard.module.scss";

const RegCard: FC = (): React.JSX.Element => {
    return (
        <div className={styles.content}>
            <AuthHeading label="Регистрация" />

           <RegForm />
        </div>
    );
};

export default RegCard;