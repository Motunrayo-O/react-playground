import { Dispatch } from "react";
import React from "react";
import { Task, TaskAction } from "./TaskListProvider";

interface TaskListContextType {
  tasks: Task[];
  dispatch: Dispatch<TaskAction>;
}

const TaskListContext = React.createContext<TaskListContextType>(
  {} as TaskListContextType
);

export default TaskListContext;
