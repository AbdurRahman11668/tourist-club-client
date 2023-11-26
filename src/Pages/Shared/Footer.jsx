import { Link, NavLink } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#50ba87] text-white divide-y dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:px-8 lg:flex-row divide-gray-400">
          <ul className="self-center space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <Link to="/" className="flex justify-center text-center items-center btn btn-neutral">
          <img
            className="w-5 h-8"
            src="https://i.ibb.co/gFdpDGM/logo.png"
            alt=""
          />
          <a className=" normal-case text-xl hover:text-[#50ba87]">
            Tourist Club
          </a>
        </Link>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <Link to="https://www.twitter.com/" className="text-2xl hover:text-[#50ba87]">
                <FaTwitter></FaTwitter>
              </Link>
              <Link to="https://www.youtube.com/" className="text-2xl hover:text-[#50ba87]">
                <FaYoutube></FaYoutube>
              </Link>
              <Link to="https://www.facebook.com/" className="text-2xl hover:text-[#50ba87]">
                <FaFacebook></FaFacebook>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm font-medium text-center dark:text-gray-400">
          ©COPYRIGHT 2023 Tourist Club . All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Footer;
