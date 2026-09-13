import React, { type FC } from "react";
import { Link } from "react-router-dom";

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
                    <Link to="/register">
                        <Button format="primary">Join</Button>
                    </Link>
                    <Link to="/login">
                        <Button format="secondary">Log in</Button>
                    </Link>
                </div>

            </header>
        </div>

    );
};

export default LandingHeader;