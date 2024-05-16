import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      style={{ width: "100%", height: "50px", display: "flex", gap: "1rem" }}>
      <Link to={"/"}>Home</Link>
      <Link to={"/login"}>Login</Link>
      <Link to={"/accounts"}>Accounts</Link>
      <Link to={"/profile"}>Profile</Link>
    </nav>
  );
};

export default Navbar;
