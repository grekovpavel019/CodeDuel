import React, { type FC } from "react";

import RegCard from "@widgets/RegCard";

import styles from "./RegPage.module.scss"

const RegPage: FC = (): React.JSX.Element => {
    return (
        <main className={styles.register}>

            <div className={styles.container}>

                <RegCard />
                
            </div>

        </main>
    );
};

export default RegPage;