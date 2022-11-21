import "./styles_list.css";
import React from "react";
import Card from "./Card";

function List({ listTransactions, removeTransaction }) {
  const mapTotal = listTransactions.map((value) => {
    return value.value;
  });
  const sumTotal = mapTotal.reduce((acc, iv) => {
    return acc + iv;
  }, 0);
  return (
    <div>
      <ul className="list-content">
        {sumTotal == 0 ? (
          <h2>Você ainda não possui nenhum lançamento</h2>
        ) : (
          listTransactions.map(({ description, type, value }, index) => (
            <Card
              key={index}
              description={description}
              type={type}
              value={value}
              removeTransaction={removeTransaction}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default List;
