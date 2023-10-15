import { useReducer } from "react";
import "./App.css";
import AuthenticationProvider from "./components/state-management/AuthenticationProvider";
import Counter from "./components/state-management/Counter";
import HomePage from "./components/state-management/HomePage";
import NavBar from "./components/state-management/NavBar";
import TaskListContext from "./components/state-management/contexts/taskListContext";
import taskListReducer from "./components/state-management/reducers/taskListReducer";
import TaskListProvider from "./components/state-management/TaskListProvider";

function App() {
  const [tasks, dispatch] = useReducer(taskListReducer, []);

  return (
    <AuthenticationProvider>
      <TaskListProvider>
        <NavBar />
        <HomePage />
      </TaskListProvider>
    </AuthenticationProvider>
  );

  /*const { users, error, isLoading, setUsers, setError } = useUsers();

  const deleteUser = (user: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((u) => u.id !== user.id));

    userService.delete(user.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const updateUser = (u: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...u, name: u.name + "!" };
    setUsers(users.map((user) => (u.id == user.id ? updatedUser : user)));

    userService.update<User>(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const originalUsers = [...users];
    const newUser = {
      id: 0,
      name: "Jason Deruuulooo",
    };
    setUsers([newUser, ...users]);
    userService
      .add<User>(newUser)
      .then(({ data: savedUser }) => setUsers([savedUser, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add User
      </button>

      <ul className="list-group">
        {users.map((u) => (
          <li
            key={u.id}
            className="list-group-item d-flex justify-content-between"
          >
            {u.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-1"
                onClick={() => updateUser(u)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(u)}
              >
                delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  ); //*/
}

export default App;
