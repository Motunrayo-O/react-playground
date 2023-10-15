import { useContext } from "react";
import LoginStatus from "./LoginStatus";
import TaskListContext from "./contexts/taskListContext";

const NavBar = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <nav className="navbar d-flex justify-content-between">
      <span className="badge text-bg-secondary">{tasks.length}</span>
      <LoginStatus />
    </nav>
  );
};

export default NavBar;
