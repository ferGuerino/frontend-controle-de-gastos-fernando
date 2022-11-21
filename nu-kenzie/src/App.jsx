import "./App.css";
import DashBoard from "./pages/DashBoard";
import HomePage from "./pages/HomePage";
import { useState } from "react";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [filter, setFilter] = useState("todos");

  const filterListTransaction = listTransactions.filter((item) => {
    return filter == "todos" ? true : item.type == filter;
  });

  function addTransaction(transactionData) {
    setListTransactions([...listTransactions, transactionData]);
  }
  function removeTransaction(listDescription) {
    const newTransaction = listTransactions.filter((item) => {
      return item.description !== listDescription;
    });
    setListTransactions(newTransaction);
  }

  const [page, setPage] = useState(true);
  function login() {
    return setPage(false);
  }
  function logout() {
    return setPage(true);
  }

  return (
    <div>
      {page ? (
        <HomePage login={login} />
      ) : (
        <DashBoard
          listTransactions={filterListTransaction}
          setListTransactions={setListTransactions}
          logout={logout}
          addTransaction={addTransaction}
          removeTransaction={removeTransaction}
          setFilter={setFilter}
        />
      )}
    </div>
  );
}

export default App;
