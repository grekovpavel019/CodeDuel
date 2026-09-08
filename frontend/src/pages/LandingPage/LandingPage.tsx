import React, { type FC } from "react";

import LandingHeader from "@widgets/LandingHeader";

import styles from "./LandingPage.module.scss";

const LandingPage: FC = (): React.JSX.Element => {
    return (
        <div className="page-wrapper">
            <LandingHeader />

            <main className={styles.pageContent}>
                <div>
                    codeDuel
                </div>
            </main>
        </div>
    );
};

export default LandingPage;