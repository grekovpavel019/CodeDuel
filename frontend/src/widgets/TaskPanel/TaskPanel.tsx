import React, { type FC } from "react";

import TitleBar from "@shared/components/title-bar";
import TaskDescription from "@entities/task";

import styles from "./TaskPanel.module.scss"

const TaskPanel: FC = (): React.JSX.Element => {
    return (
        <div 
            className={styles.taskPanel}
        >
            <TitleBar>Description</TitleBar>
            <TaskDescription />
        </div>
    );
};

export default TaskPanel;