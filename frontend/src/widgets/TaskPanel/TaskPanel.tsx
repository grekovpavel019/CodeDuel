import React, { type FC } from "react";

import TitleBar from "@shared/components/title-bar";
import TaskDescription from "@entities/task";

const TaskPanel: FC = (): React.JSX.Element => {
    return (
        <div>
            <TitleBar />
            <TaskDescription />
        </div>
    );
};

export default TaskPanel;