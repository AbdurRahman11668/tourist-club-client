import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

import useAdmin from "../Hooks/useAdmin";
import useWishlist from "../Hooks/useWishlist";
import useGuide from "../Hooks/UseGuide";

const Dashboard = () => {
  const [wishlist] = useWishlist();
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();
  return (
    <div className="flex flex-col lg:flex-row min-h-screen py-10  bg-gradient-to-r from-[#EF7120] to-[#F09921] px-5">
      {/* dashboard side bar */}
      <div className="lg:w-52 bg-[#211C19] text-white rounded-t-2xl lg:rounded-tr-none lg:rounded-l-2xl">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li className="hover:text-white">
                <NavLink
                  to="/dashboard/adminhome"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaHome></FaHome>
                  Admin Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addpackages"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaUtensils></FaUtensils>
                  Add Packages
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) :  isGuide ?  (
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaHome></FaHome>
                  Guide Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/assignedtours"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaList></FaList>
                  Assigned Tours
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink
                  to="/dashboard/profile"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/wishlist"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaShoppingCart></FaShoppingCart>
                  My Wishlist{" "}
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/bookings"
                  className="hover:text-white hover:bg-[#EF7120]"
                >
                  <FaList></FaList>
                  My Bookings
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider divider-neutral"></div>
          <li>
            <NavLink to="/" className="hover:text-white hover:bg-[#EF7120]">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/allpackages"
              className="hover:text-white hover:bg-[#EF7120]"
            >
              <FaSearch></FaSearch>
              Packages
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="hover:text-white hover:bg-[#EF7120]"
            >
              <FaEnvelope></FaEnvelope>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 p-8 bg-white rounded-b-2xl lg:rounded-bl-none  lg:rounded-r-2xl">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
