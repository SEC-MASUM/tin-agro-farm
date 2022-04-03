import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <nav className="bg-gray-100 font-sans w-full m-0">
        <div className="bg-white shadow">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between py-4">
              <div className="sm:flex sm:items-center ">
                <Link className="uppercase" to="/">
                  Home
                </Link>
                <Link className="uppercase" to="/reviews">
                  Reviews
                </Link>
                <Link className="uppercase" to="/dashboard">
                  Dashboard
                </Link>
                <Link className="uppercase" to="/blogs">
                  Blogs
                </Link>
                <Link className="uppercase" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
