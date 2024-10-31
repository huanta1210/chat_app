import { Navigate, useRoutes } from "react-router-dom";
import "./App.css";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";

function App() {
  const { authState } = useContext(AuthContext);
  const routes = useRoutes([
    { path: "/register", element: authState.token ? <Chat /> : <Register /> },
    { path: "/login", element: authState.token ? <Chat /> : <Login /> },
    { path: "/", element: authState.token ? <Chat /> : <Login /> },
    { path: "*", element: <Navigate to="/" /> },
  ]);
  return routes;
}

export default App;
