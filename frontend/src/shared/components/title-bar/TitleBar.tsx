import React, { type FC } from "react";

import styles from "./TitleBar.module.scss"

type TitleBarProps = {
    children: string;
}

const TitleBar: FC<TitleBarProps> = (props: TitleBarProps): React.JSX.Element => {
    const {
        children
    } = props;
    
    return (
        <div
            className={styles.titleBar}
        >
            {children}
        </div>
    );
};

export default TitleBar;