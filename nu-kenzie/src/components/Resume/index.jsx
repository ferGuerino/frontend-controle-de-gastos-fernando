import "./styles_resume.css";
import React from "react";

function Resume({ setFilter }) {
  return (
    <div className="resume-content">
      <p>Resumo financeiro</p>
      <div className="resume-menu">
        <button
          onClick={(event) => setFilter(event.target.value)}
          className="btn btn-todos"
          value="todos"
        >
          Todos
        </button>
        <button
          onClick={(event) => setFilter(event.target.value)}
          className="btn btn-entradas"
          value="entrada"
        >
          Entradas
        </button>
        <button
          onClick={(event) => setFilter(event.target.value)}
          className="btn btn-despesas"
          value="saída"
        >
          Despesas
        </button>
      </div>
    </div>
  );
}

export default Resume;
