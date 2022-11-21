import React from "react";
import "../../globalStyles.css";
import "./styles_homepage.css";
import logo_home from "../../asets/logo_home.svg";
import illustration_home from "../../asets/illustration_home.svg";

function HomePage({ login }) {
  return (
    <div className="main-home">
      <div className="content-home container">
        <div className="info-home">
          <img src={logo_home} alt="" />
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          <button type="button" onClick={() => login()}>
            Iniciar
          </button>
        </div>
        <img className="img-home" src={illustration_home} alt="" />
      </div>
    </div>
  );
}

export default HomePage;
