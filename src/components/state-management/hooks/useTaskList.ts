import { useContext } from "react";
import TaskListContext from "../contexts/taskListContext";

const useTaskList = () => useContext(TaskListContext);

export default useTaskList;
