import React from "react";
import CustomLink from "../CustomLink/CustomLink";

const Header = ({ show }) => {
  return (
    <>
      {show ? (
        <div>
          <nav className="font-sans w-full m-0">
            <div className="container max-w-7xl mx-auto px-4 py-4">
              <CustomLink to="/">Home</CustomLink>
              <CustomLink to="/reviews">Reviews</CustomLink>
              <CustomLink to="/dashboard">Dashboard</CustomLink>
              <CustomLink to="/blogs">Blogs</CustomLink>
              <CustomLink to="/about">About</CustomLink>
            </div>
          </nav>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default Header;
