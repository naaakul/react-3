import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <nav className="mt-10 flex justify-center gap-4 ">
      <NavLink to="/">
        {(e) => {
          return (
            <span
              className={[
                e.isActive ? "text-red-400" : "",
                e.isActive ? "font-bold" : "",
              ].join(" ")}
            >
              home
            </span>
          );
        }}
      </NavLink>
      <NavLink
        style={(e) => {
          return {
            color: e.isActive ? "tomato" : "",
            fontWeight: e.isActive ? "bold" : "",
          };
        }}
        to="/user"
      >
        User
      </NavLink>
      <NavLink
        className={(e) => {
          return [
            e.isActive ? "text-red-400" : "",
            e.isActive ? "font-bold" : "",
          ].join(" ");
        }}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
}

export default Nav;
