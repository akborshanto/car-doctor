import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../firebase/Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  //logout button
  const handleLogOut = () => {
    logOut()
      .then((res) => {
        alert("successfull loggOut");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const links = (
    <>
      <li>
        {" "}
        <NavLink to="/"> Home</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/about"> About</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/login"> Login</NavLink>
      </li>
      <li>
        {" "}
        <NavLink to="/register"> Reigsteer</NavLink>
      </li>
{
  user?.email &&      <li>
  {" "}
  <NavLink to="/booking"> MY BOOKINS</NavLink>
</li>
}
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <a className={`user? "loader" : "btn btn-ghost text-xl"`}>
            {user ? <h1 className="loaders"></h1> : <h1>sdf</h1>}
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end">
          {user?.email ? (
            <li>
              <Link>
                <button onClick={handleLogOut}>LogOut</button>
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login">
                <button>Login</button>
              </Link>
            </li>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
