import { createContext, useReducer } from "react";
import { State, User } from "../interfaces/Users";
import { ChildrenProp } from "../interfaces/ChildrenProps";
import authReducer from "../reducer/authReducer";
import toast from "react-hot-toast";
import instance from "../utils/services";
import { useNavigate } from "react-router";

type AuthContext = {
  authState: State;
  userRegister: (data: User) => void;
  userLogin: (data: User) => void;
  logOut: () => void;
};

const initialState: State = {
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user") || "null"),
};
export const AuthContext = createContext<AuthContext>({} as AuthContext);

export const AuthProvider = ({ children }: ChildrenProp) => {
  const [authState, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();
  const userRegister = async (data: User) => {
    try {
      const res = await instance.post("/users/register", data);

      if (!res) {
        toast.error("Value form is not found");
        return;
      }

      toast.success("Registration successful!");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  const userLogin = async (data: User) => {
    try {
      const res = await instance.post("/users/login", data);
      if (!res) {
        toast.error("Value form is not found");
        return;
      }
      dispatch({
        type: "SET_TOKEN",
        payload: { token: res.data.accessToken, user: res.data },
      });
      toast.success("Login successful!");
      navigate("/");
    } catch (error) {
      console.log(error);
      toast.error("Error");
    }
  };

  const logOut = () => {
    dispatch({ type: "LOG_OUT" });
  };

  return (
    <AuthContext.Provider
      value={{ authState, userRegister, userLogin, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};
