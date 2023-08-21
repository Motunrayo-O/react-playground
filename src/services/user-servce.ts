import apiCilent from "./api-cilent";

export interface User {
  id: number;
  name: string;
}

class UserService {
  getAllUsers() {
    const abortCtrllr = new AbortController();

    const request = apiCilent.get<User[]>("/users", {
      signal: abortCtrllr.signal,
    });

    return { request, cancel: () => abortCtrllr.abort() };
  }

  addUser(newUser: User) {
    return apiCilent.post("/users", newUser);
  }

  updateUser(updatedUser: User) {
    return apiCilent.patch("/users/" + updatedUser.id, updatedUser);
  }

  deleteUser(id: number) {
    return apiCilent.delete("/users/" + id);
  }
}

export default new UserService();
