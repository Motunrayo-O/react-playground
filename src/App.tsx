import { useEffect, useState } from "react";
import "./App.css";
import { CanceledError } from "./services/api-cilent";
import ShoppingList from "./components/shopping-tracker/components/ShoppingList";
import ShoppingListFilter from "./components/shopping-tracker/components/ShoppingListFilter";
import ShoppingListForm from "./components/shopping-tracker/components/ShoppingListForm";
import categories from "./components/shopping-tracker/categories";
import ProductList from "./components/ProductList";
import userService, { User } from "./services/user-servce";
import useUsers from "./hooks/useUsers";
import Home from "./components/Home";
import PostListInfinite from "./components/react-query/PostListInfiniteLoad";
import TodoForm from "./components/react-query/TodoForm";
import TodoList from "./components/react-query/TodoList";

function App() {
  return (
    <>
      <TodoForm />
      <TodoList />
    </>
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
