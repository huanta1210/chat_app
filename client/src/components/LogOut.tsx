import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

const LogOut = () => {
  const { logOut } = useContext(AuthContext);

  return (
    <Link to={"/login"} className="font-semibold" onClick={() => logOut()}>
      Log Out
    </Link>
  );
};

export default LogOut;
