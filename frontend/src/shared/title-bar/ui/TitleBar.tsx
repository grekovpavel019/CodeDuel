import React, { type FC } from "react";

import styles from "./TitleBar.module.scss"

const TitleBar: FC = (): React.JSX.Element => {
    return (
        <div
            className={styles.titleBar}
        >
            Шапочка
        </div>
    );
};

export default TitleBar;