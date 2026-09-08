import React, { type FC } from "react";

import Button from "@shared/components/button";

import styles from "./LandingHeader.module.scss"

const LandingHeader: FC = (): React.JSX.Element => {
    return (
        
        <header className={styles.header}>
            <div className={styles.logo}>
                codeDuel
            </div>

            <div className={styles.headerActions}>
                <Button format="primary">Логин</Button>
                <Button format="secondary">Регистрация</Button>
            </div>
        </header>
    );
};

export default LandingHeader;