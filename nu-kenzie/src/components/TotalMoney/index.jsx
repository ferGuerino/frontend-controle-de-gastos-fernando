import React from "react";
import "./styles_totalmoney.css";

function TotalMoney({ listTransactions }) {
  const mapTotal = listTransactions.map((value) => {
    return value.value;
  });
  const sumTotal = mapTotal.reduce((acc, iv) => {
    return acc + iv;
  }, 0);
  return (
    <div className="totalmoney-main">
      <div className="total-value">
        <h3>Valor Total:</h3>
        <p>$ {sumTotal}</p>
      </div>
      <p>O valor se refere ao saldo</p>
    </div>
  );
}

export default TotalMoney;
