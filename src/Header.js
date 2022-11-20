import React from "react";
// import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className={ "navbar navbarmobile navbar "}>
      <div
          className={ "cointainer3  cointainer3mobile cointainer3"}
        >
          <li className="navli">
            <Link to="/" className="nava">
              Home
            </Link>
          </li>
          <li className="navli">
            <Link to="/Allpage" className="nava">
              Alldata
            </Link>
          </li>
        </div>

        
      </nav>
    </>
  );
};

export default Header;
