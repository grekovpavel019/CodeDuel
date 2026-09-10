import React, { type FC } from "react";

import styles from "./HeroSecrion.module.scss"

import Button from "@shared/components/button";
import CodeEditor from "@shared/components/code-editor";
import TitleBar from "@shared/components/title-bar";

const HeroSections: FC = (): React.JSX.Element => {
    return (
        <section className={styles.heroSection}>

            <div className={styles.heroActions}>
                <h1>CodeDuel</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, beatae.</p>
            
            </div>

            <div className={styles.heroMain}>
                <TitleBar>
                    Python
                </TitleBar>
                <CodeEditor 
                    casualMode={false}
                />
            </div>

            <div>
                <Button format="primary">Run Code</Button>
            </div>
        </section>
    );
};

export default HeroSections;