import React from "react";
import "./styles_dashboard.css";
import Form from "../../components/Form";
import Header from "../../components/Header";
import TotalMoney from "../../components/TotalMoney";
import Resume from "../../components/Resume";
import List from "../../components/List";

function DashBoard({
  listTransactions,
  setListTransactions,
  logout,
  addTransaction,
  removeTransaction,
  setFilter,
}) {
  return (
    <div className="main-dash">
      <Header logout={logout} />
      <div className="content-dash container">
        <div className="dash-form-total">
          <Form
            listTransactions={listTransactions}
            setListTransactions={setListTransactions}
            addTransaction={addTransaction}
            removeTransaction={removeTransaction}
          />
          <TotalMoney listTransactions={listTransactions} />
        </div>
        <div className="dash-resume-list">
          <Resume setFilter={setFilter} />
          <List
            listTransactions={listTransactions}
            removeTransaction={removeTransaction}
          />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
