import { Dispatch } from "react";
import { Task, TaskAction } from "../reducers/taskListReducer";
import React from "react";

interface TaskListContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskListContext = React.createContext<TaskListContextType>(
  {} as TaskListContextType
);

export default TaskListContext;
