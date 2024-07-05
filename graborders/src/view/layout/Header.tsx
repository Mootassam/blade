import React from "react";
import "./styles/style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="app__header">
      <div>
        <i className="fas fa-user-cog"></i>
      </div>
      <div>
        <span></span>
      </div>
      <Link to={"/currency"} className="linkWithoutUnderline">
        <div>INR</div>
      </Link>
    </div>
  );
}

export default Header;
