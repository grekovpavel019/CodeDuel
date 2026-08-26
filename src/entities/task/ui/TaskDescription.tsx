import React, { type FC } from "react";

import styles from "./TaskDescription.module.scss"

type TaskDescriptionProps = {
    className?: string;
}

const TaskDescription: FC<TaskDescriptionProps> = (props: TaskDescriptionProps): React.JSX.Element => {
    return (
        <div
            className={styles.taskDescription}
        >
            Писанина ебучая
        </div>
    );
};

export default TaskDescription;