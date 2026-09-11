import React, { type FC } from "react";

import styles from "./LoginPage.module.scss"

const LoginPage: FC = (): React.JSX.Element => {
    return (
        <div className={styles.loginWrapper}>

            <div className={styles.loginContainer}>

                {/* вынести в отдельный компонент */}
                <form className={styles.form} action="">
                    <label htmlFor="">Ввод</label>
                    <input type="text" />
                </form>
            </div>

        </div>
    );
};

export default LoginPage;