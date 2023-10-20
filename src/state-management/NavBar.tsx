import { useContext } from "react";
import LoginStatus from "./auth/LoginStatus";
import TaskListContext from "./tasklist/taskListContext";
import { useTaskList } from "./auth";

const NavBar = () => {
  const { tasks } = useTaskList();

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
