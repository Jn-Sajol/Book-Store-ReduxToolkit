import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/favicon.png";
import NavList from "./NavList";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <nav className="py-4 2xl:px-6">
      <div className="container flex items-center justify-between">
        <Link to="/">
          <img
            src={logo}
            width="150px"
            className="object-contain"
            alt="LogoBookstore"
          />
        </Link>

        <NavList />
        <SearchBox />
      </div>
    </nav>
  );
};

export default Navbar;
