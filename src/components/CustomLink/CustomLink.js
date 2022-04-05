import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  return (
    <Link
      className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
