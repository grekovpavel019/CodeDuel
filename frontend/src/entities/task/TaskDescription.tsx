import React, { type FC } from "react";

import styles from "./TaskDescription.module.scss"

const TaskDescription: FC = (): React.JSX.Element => {
        
    return (
        <div
            className={`${styles.taskDescription}`}
        >
            <p>Писанина ебучая</p>
        </div>
    );
};

export default TaskDescription;