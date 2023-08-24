import { useEffect, useState } from "react";
import "./App.css";
import { CanceledError } from "./services/api-cilent";
import ShoppingList from "./components/shopping-tracker/components/ShoppingList";
import ShoppingListFilter from "./components/shopping-tracker/components/ShoppingListFilter";
import ShoppingListForm from "./components/shopping-tracker/components/ShoppingListForm";
import categories from "./components/shopping-tracker/categories";
import ProductList from "./components/ProductList";
import userService, { User } from "./services/user-servce";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        if (err instanceof CanceledError) return;
        setError(err.message);
      });
    // .finally(() => {
    //   setIsLoading(false);
    // });

    return () => cancel();
  }, []);

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
  );
}

export default App;
