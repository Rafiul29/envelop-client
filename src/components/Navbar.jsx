import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import Button from './Button'
const Navbar = () => {
  const { user,dispatch } = useAuthContext();

 const  handeLogout=()=>{
  dispatch({type:"LOGOUT"})
  localStorage.removeItem("user")
  }

  return (
    <header className="py-10 flex  justify-between">
      <div className="logo">
        <Link
          to="/"
          className="text-xl hover:text-violet-500 duration-300 font-semibold"
        >
          Envelop
        </Link>
      </div>
      <nav>

        {!user && (
          <div className="flex gap-5">
            <Link
              to="/login"
              className="hover: text-violet-500 hover:underline underline-offset duration-75"
            >
              {" "}
              Login
            </Link>
            <Link
              to="/register"
              className="hover: text-violet-500 hover:underline  underline-offset duration-75"
            >
              {" "}
              Register
            </Link>
          </div>
        )}
        {user && (
          <div className="flex gap-5 items-center ">
            <p>
              Logged in as:{" "}
              <span className=" text-violet-500">{user.name}</span>
            </p>
          <Button handeLogout={handeLogout} text="Logout" logout/>
          </div>
        )}
      </nav>
    </header>
  );
};

export default React.memo(Navbar);
