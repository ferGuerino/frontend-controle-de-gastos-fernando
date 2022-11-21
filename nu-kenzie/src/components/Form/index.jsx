import React from "react";
import "./styles_form.css";
import { useState } from "react";

function Form({
  listTransactions,
  setListTransactions,
  addTransaction,
  removeTransaction,
}) {
  const [formData, setFormData] = useState({
    description: "",
    type: "entrada",
    value: "",
  });

  function submit(event) {
    event.preventDefault();
    addTransaction(formData);
    setFormData({ description: "", type: "", value: "" });
  }

  return (
    <form onSubmit={submit}>
      <div className="form-description">
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          value={formData.description}
          placeholder="Digite aqui sua descrição"
          required
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
        />
        <p>Ex: Compra de roupas</p>
      </div>
      <div className="value-type-value">
        <div className="form-value">
          <label htmlFor="">Valor</label>
          <input
            type="number"
            value={formData.value}
            placeholder="R$"
            required
            onChange={(event) =>
              setFormData({
                ...formData,
                value: Number(event.target.value),
              })
            }
          />
        </div>
        <div className="form-type">
          <label htmlFor="">Tipo de valor</label>
          <select
            name=""
            id=""
            required
            onChange={(event) =>
              setFormData({ ...formData, type: event.target.value })
            }
          >
            <option value="entrada">Entrada</option>
            <option value="saída">Saída</option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
}

export default Form;
