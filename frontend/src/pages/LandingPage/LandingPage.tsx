import React, { type FC } from "react";

import LandingHeader from "@widgets/LandingHeader";
import HeroSection from "@widgets/HeroSection";

import styles from "./LandingPage.module.scss";

const LandingPage: FC = (): React.JSX.Element => {
    return (
        <div className={styles.pageWrapper}>
            <LandingHeader />

            <main className={styles.pageContent}>
                <HeroSection />
            </main>
        </div>
    );
};

export default LandingPage;