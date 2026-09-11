import React, { type FC } from "react";

import styles from "./Header.module.scss"

type HeaderProps = {
    name: string | null;
}

const Header: FC<HeaderProps> = (props: HeaderProps): React.JSX.Element => {
    
    const {
        name
    } = props;
    
    return (
        <header
            className={styles.header}
            >
            {name ?? "unknown"}
        </header>
    );
};

export default Header;