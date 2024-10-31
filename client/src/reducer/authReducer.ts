import { Action, State } from "../interfaces/Users";

const authReducer = (authState: State, action: Action) => {
  switch (action.type) {
    case "SET_TOKEN": {
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));

      return {
        ...authState,
        token: action.payload.token,
        user: action.payload.user,
      };
    }
    case "LOG_OUT": {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      return {
        ...authState,
        token: null,
        user: null,
      };
    }
    case "GET_USER": {
      return {
        ...authState,
        users: action.payload,
      };
    }
    default:
      return authState;
  }
};

export default authReducer;
