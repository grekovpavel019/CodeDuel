import React, { type FC } from "react";

import styles from "./HeroSecrion.module.scss"

import Button from "@shared/components/button";

const HeroSections: FC = (): React.JSX.Element => {
    return (
        <section className={styles.heroSection}>

            <div className={styles.heroIntro}>
                <h1>CodeDuel</h1>
                <p>Your provider to programming world.</p>
            </div>


            <div className={styles.heroAction}>
                <Button format="primary">Start Duel</Button>
            </div>
        </section>
    );
};

export default HeroSections;