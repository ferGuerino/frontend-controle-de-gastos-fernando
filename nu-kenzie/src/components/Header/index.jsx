import React from "react";
import logo_dash from "../../asets/logo_dash.svg";
import "./styles_header.css";

function Header({ logout }) {
  return (
    <div className="main-header">
      <div className="content-header container">
        <img src={logo_dash} alt="" />
        <button type="button" onClick={() => logout()}>
          Inicio
        </button>
      </div>
    </div>
  );
}

export default Header;
