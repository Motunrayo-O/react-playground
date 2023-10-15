export interface AuthenticationAction {
  type: "login" | "logout";
}

const authenticationReducer = (
  user: string,
  action: AuthenticationAction
): string => {
  switch (action.type) {
    case "login":
      return "Ayra Starr";
    case "logout":
      return "";
  }
};

export default authenticationReducer;
