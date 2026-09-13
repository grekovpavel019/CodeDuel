import React, { type FC } from "react";

import styles from "./AuthField.module.scss";

type AuthFieldProps = {
    label: string,
    id: string,
    type: string
}

const AuthField: FC<AuthFieldProps> = (props: AuthFieldProps): React.JSX.Element => {
    
    const {
        label,
        id,
        type = "text"
    } = props;
    
    return (
        <div className={styles.field}>
            <input id={id} type={type} placeholder=" "/>
            <label htmlFor={id}>{label}</label>
        </div>
    );
};

export default AuthField;