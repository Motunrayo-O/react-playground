import React, { ReactNode, useReducer } from "react";
import TaskListContext from "./taskListContext";

export interface Task {
  id: number;
  title: string;
}

interface AddTaskAction {
  type: "add";
  task: Task;
}

interface DeleteTaskAction {
  type: "delete";
  id: number;
}

export type TaskAction = AddTaskAction | DeleteTaskAction;

const taskListReducer = (tasks: Task[], action: TaskAction): Task[] => {
  if (action.type == "add") return [action.task, ...tasks];
  else if (action.type == "delete")
    return tasks.filter((t) => t.id != action.id);

  return tasks;
};

interface Props {
  children: ReactNode;
}

const TaskListProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <TaskListContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskListContext.Provider>
  );
};

export default TaskListProvider;
