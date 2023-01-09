import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [formOpen, setFormOpen] = useState(false);
  const newExpenseDataHandler = (expenseData) => {
    props.onAddingNewExpenseData(expenseData);
    setFormOpen(!formOpen);
  };
  const formOpenHandler = () => {
    setFormOpen(!formOpen);
  };
  return (
    <div className="new-expense">
      {!formOpen && <button onClick={formOpenHandler}>Add Expense</button>}
      {formOpen && <ExpenseForm onNewExpenseData={newExpenseDataHandler} />}
    </div>
  );
};

export default NewExpense;
