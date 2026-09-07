import React, { type FC } from "react";

import styles from "./LandingHeader.module.scss"

const LandingHeader: FC = (): React.JSX.Element => {
    return (
        <div className="page-wrapper">
            
            <header className={styles.header}>
                <div className={styles.logo}>
                    codeDuel
                </div>

                <div className={styles.headerActions}>
                    <button>Логин</button>
                    <button>Регистрация</button>
                </div>
            </header>

            <main className={styles.pageContent}>
                <div className={styles.logo}>
                    codeDuel
                </div>
            </main>
        </div>
    );
};

export default LandingHeader;