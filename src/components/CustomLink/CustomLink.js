import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      className="uppercase text-sm font-semibold mx-1 hover:text-fuchsia-500 focus:text-purple-600 transform duration-200 px-3 py-1 border-b-2 mx-2 hover:border-fuchsia-500 focus:border-purple-600"
      // style={{ color: match ? "rgb(147 51 234)" : "rgb(31 41 55)" }}
      to={to}
      {...props}
    >
      {children}
    </Link>
  );
};

export default CustomLink;
