import React, { type FC } from "react";

import styles from "./AuthHeading.module.scss"

type AuthHeadingProps = {
    label: string
}

const AuthHeading: FC<AuthHeadingProps> = (props: AuthHeadingProps): React.JSX.Element => {
    
    const { label } = props;
    
    return (
        <div className={styles.heading}>
            <h1 className={styles.logo}>CodeDuel</h1>
            <h2 className={styles.subLogo}>{label}</h2>
        </div>
    );
};

export default AuthHeading;