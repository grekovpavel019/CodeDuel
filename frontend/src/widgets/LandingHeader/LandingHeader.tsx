import React, { type FC } from "react";

import Button from "@shared/components/button";

import styles from "./LandingHeader.module.scss"

const LandingHeader: FC = (): React.JSX.Element => {
    return (
        
        <div className={styles.container}>

            <header className={styles.header}>

                <div className={styles.logo}>
                    codeDuel
                </div>

                <div className={styles.actions}>
                    <Button format="primary">Join</Button>
                    <Button format="secondary">Log in</Button>
                </div>

            </header>
        </div>

    );
};

export default LandingHeader;