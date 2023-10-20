const UserListPage = () => {
  const users = [
    { id: 1, name: "Gina" },
    { id: 2, name: "Jason" },
    { id: 3, name: "Riri" },
  ];
  return (
    <ul className="list-group">
      {users.map((user) => (
        <li className="list-group-item" key={user.id}>
          <a href="#">{user.name}</a>
        </li>
      ))}
    </ul>
  );
};

export default UserListPage;
