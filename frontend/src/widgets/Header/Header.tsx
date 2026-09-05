import React, { type FC } from "react";

import styles from "./Header.module.scss"

const Header: FC = (): React.JSX.Element => {
    return (
        <header
            className={styles.header}
        >
            Шапочка
        </header>
    );
};

export default Header;