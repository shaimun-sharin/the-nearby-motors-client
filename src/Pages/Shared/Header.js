import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  if (loading) {
    return <Loading></Loading>;
  }

  const logOut = () => {
    signOut(auth);
  };
  const navItems = (
    <>
      <li>
        <Link to="home">Home</Link>
      </li>
      <li>
        <Link to="summary">Summary</Link>
      </li>
      <li>
        <Link to="contact">Contact</Link>
      </li>
      <li>
        {user ? (
          <>
            <h1 className=" text-xl font-bold btn-ghost text-green-600">
              {user?.displayName}
            </h1>
            <button onClick={logOut} class="font-bold btn-ghost text-red-600">
              SIGN OUT
            </button>
          </>
        ) : (
          <Link to="login">LogIn</Link>
        )}
      </li>
    </>
  );
  return (
    <div class="navbar sticky top-0 bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-primary rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          The Nearby Motors
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0 ">{navItems}</ul>
      </div>
    </div>
  );
};

export default Header;
