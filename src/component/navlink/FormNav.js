import React from "react";
import { NavLink } from "react-router-dom";

/**
 *
 * @param {*} kind(optional) -kind of form
 * @returns
 */

const FormNav = ({ children, kind }) => {
  if (!kind) return;
  let content = "";
  let to = "";
  // if (kind === "register") {
  // to = "/sign-in";
  // content = "Already have an account?";
  // } else if (kind === "login") {
  // to = "/sign-up";
  // content = "121";
  // }
  switch (kind) {
    case "register":
      to = "/sign-in";
      content = "Already have";
      break;
    case "login":
      to = "/sign-up";
      content = "I don't have account";
      break;
    default:
      break;
  }
  return (
    <div className="text-sm">
      <span className="ml-1 border-b border-transparent">{content}</span>
      <NavLink
        to={to}
        className="ml-1 border-b border-transparent text-hightLight hover:border-b hover:border-hightLight hover:cursor-pointer"
      >
        {children}
      </NavLink>
    </div>
  );
};

export default FormNav;
