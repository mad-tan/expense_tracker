import React from "react";

import "./ExpenseList.css";
import ExpenseListDate from "./ExpenseListDate";

const ExpenseList = (props) => {
  return (
    <>
      <div className="expense-item">
        <div>
          <ExpenseListDate expensedate={props.expense.date} />
        </div>
        <div className="expense-item__description">
          <h2>{props.expense.title}</h2>
          <div className="expense-item__amount">${props.expense.amount}</div>
        </div>
      </div>
    </>
  );
};

export default ExpenseList;
