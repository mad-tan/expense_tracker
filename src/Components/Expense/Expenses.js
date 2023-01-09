import React, { useState } from "react";
import NewExpense from "../NewExpense/NewExpense";
import ExpenseChart from "./ExpenseChart";
import ExpenseFilter from "./ExpenseFilter";

import ExpenseList from "./ExpenseList";
import "./Expenses.css";

const Expenses = (props) => {
  const [selectedYear, setSelectedYear] = useState("2023");
  const addingNewExpenseDataHandler = (expenseData) => {
    expenseData = { ...expenseData, id: Math.random() };
    props.onAddingNewExpenseData(expenseData);
  };

  const filterExpenseHandler = (filteredYear) => {
    setSelectedYear(filteredYear);
  };
  const filteredYear = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === selectedYear
  );

  return (
    <div className="expenses">
      <NewExpense onAddingNewExpenseData={addingNewExpenseDataHandler} />
      <ExpenseFilter
        onExpenseFilter={filterExpenseHandler}
        year={selectedYear}
      />
      <ExpenseChart expense={filteredYear} />
      {filteredYear.length === 0 ? (
        <p
          style={{
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          No Expenses to show
        </p>
      ) : (
        filteredYear.map((expense) => (
          <ExpenseList key={expense.id} expense={expense} />
        ))
      )}
    </div>
  );
};

export default Expenses;
