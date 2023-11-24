import { useContext, useRef, useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const profilePicRef = useRef(null);
  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const handleProfilePicClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  const calculateDropdownPosition = () => {
    if (profilePicRef.current) {
      const profilePicRect = profilePicRef.current.getBoundingClientRect();
      return {
        top: profilePicRect.bottom,
        left: profilePicRect.left,
      };
    }
    return { top: 0, left: 0 };
  };

  const dropdownStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    ...calculateDropdownPosition(),
  };

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link
          className="hover:text-red-600 hover:bg-white hover:font-medium"
          to="/"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          className="hover:text-red-600 hover:bg-white hover:font-medium"
          to="/community"
        >
          Community
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-red-600 hover:bg-white hover:font-medium"
          to="/blog"
        >
          Blog
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-red-600 hover:bg-white hover:font-medium"
          to="/about"
        >
          About us
        </Link>
      </li>
      <li className="">
        <Link
          className="hover:text-red-600 hover:bg-white hover:font-medium"
          to="/contact"
        >
          Contact us
        </Link>
      </li>
      {/* {user && isAdmin && (
            <li>
              <Link to="/dashboard/adminHome">Dashboard</Link>
            </li>
          )}
          {user && !isAdmin && (
            <li>
              <Link to="/dashboard/userHome">Dashboard</Link>
            </li>
          )} */}
      <li>
        <Link to="/dashboard/cart">
          <button className="btn">
            <FaShoppingCart className="mr-2"></FaShoppingCart>
            {/* <div className="badge badge-secondary">+{cart.length}</div> */}
          </button>
        </Link>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-6xl bg-black text-white">
      <div className="navbar-start sm:justify-around lg:justify-normal">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 font-medium text-red-600"
          >
            {navOptions}
          </ul>
        </div>
        <div className="flex justify-center ml-20 lg:ml-10">
          <img
            className="w-5 h-8"
            src="https://i.ibb.co/gFdpDGM/logo.png"
            alt=""
          />
          <a className="btn btn-ghost normal-case text-xl hover:text-red-600">
            Tourist Club
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center">{navOptions}</ul>
      </div>

      <div className="navbar-end justify-center lg:justify-end">
        {user ? (
          <>
            <div className="">
              <img
                className="w-10 rounded-full lg:mr-20"
                ref={profilePicRef}
                src={user.providerData[0].photoURL}
                alt="Profile Pic"
                onClick={handleProfilePicClick}
              />

              {isDropdownVisible && (
                <div style={dropdownStyle}>
                  {/* Your dropdown content goes here */}
                  <ul className="text-black bg-white mt-2 rounded p-3 border border-red-700 lg:-ml-52">
                    <li className="text-sm font-semibold text-red-600  mb-2">Dashboard</li>
                    <li className="text-sm font-semibold text-red-600 ">Offer Announcements</li>
                    <li>
                      <button
                        onClick={handleLogOut}
                        className="btn btn-ghost hover:text-red-600 hover:font-medium"
                      >
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-ghost hover:text-red-600 hover:font-medium">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
