import React from "react";
import { NavLink } from "react-router-dom";

export const NavBarTab = ({ path, label }: any) => {
  return (
    <NavLink
      to={path}
      end
      className={({ isActive }) =>
        "w-full" +
        (isActive ? "underline text-yellow-600" : "")
      }
    >
      {label}
    </NavLink>
  );
};
