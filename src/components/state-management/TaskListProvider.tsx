import React, { ReactNode, useReducer } from "react";
import TaskListContext from "./contexts/taskListContext";
import taskListReducer from "./reducers/taskListReducer";

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
