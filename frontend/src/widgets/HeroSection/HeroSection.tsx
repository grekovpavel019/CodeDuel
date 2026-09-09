import React, { type FC } from "react";

import styles from "./HeroSecrion.module.scss"

const HeroSections: FC = (): React.JSX.Element => {
    return (
        <section className={styles.heroWrapper}>
            <h1>codeDuel</h1>
            <div className={styles.heroContent}>
                <img src="../public/image.png" alt="gt" />
            </div>
        </section>
    );
};

export default HeroSections;