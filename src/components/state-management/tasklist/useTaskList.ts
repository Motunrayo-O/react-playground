import { useContext } from "react";
import TaskListContext from "./taskListContext";

const useTaskList = () => useContext(TaskListContext);

export default useTaskList;
