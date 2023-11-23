import { Link, NavLink } from "react-router-dom";
import { FaTwitter, FaYoutube, FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
      <footer className="bg-red-600 text-white divide-y dark:bg-gray-800 dark:text-gray-50">
        <div className="container flex flex-col p-4 mx-auto md:px-8 lg:flex-row divide-gray-400">
          <ul className="self-center space-y-4 text-center sm:flex sm:space-y-0 sm:justify-around sm:space-x-4 lg:flex-1 lg:justify-start">
            <NavLink to="/" className="sm:grid text-center lg:text-end">
            <div className="flex items-center space-x-2">
            <img
              className="w-10"
              src="https://i.ibb.co/SXqMf6g/logo-removebg-preview.png"
              alt=""
            />
            <h3 className="text-4xl font-bold">GoCar</h3>
          </div>
          <p className="text-sm font-medium">Service</p>
            </NavLink>
          </ul>
          <div className="flex flex-col justify-center pt-6 lg:pt-0">
            <div className="flex justify-center space-x-4">
              <Link to="https://www.twitter.com/" className="text-2xl">
                <FaTwitter></FaTwitter>
              </Link>
              <Link to="https://www.youtube.com/" className="text-2xl">
                <FaYoutube></FaYoutube>
              </Link>
              <Link to="https://www.facebook.com/" className="text-2xl">
                <FaFacebook></FaFacebook>
              </Link>
            </div>
          </div>
        </div>
        <div className="py-6 text-sm font-medium text-center dark:text-gray-400">
          ©COPYRIGHT 2023 FITNESS . All rights reserved.
        </div>
      </footer>

      
    </div>
    );
};

export default Footer;