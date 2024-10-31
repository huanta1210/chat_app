import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import LogOut from "./LogOut";

const Header = () => {
  const { authState } = useContext(AuthContext);

  return (
    <header className="shadow-md font-sans tracking-wide relative z-50">
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white min-h-[70px] mx-44">
        <Link to={authState?.token ? "/" : "/login"}>
          <img
            src="https://www.shutterstock.com/image-vector/support-icon-can-be-used-600nw-1887496465.jpg"
            alt="logo"
            className="w-20"
          />
        </Link>

        <div className="font-semibold max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
          Loogged in as {authState.user?.name}
        </div>

        <div className="flex max-lg:ml-auto">
          <Link className="pr-4 font-semibold" to={"/login"}>
            {authState?.token ? <LogOut /> : "Login"}
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
