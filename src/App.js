import { useState } from "react";

import Expenses from "./Components/Expense/Expenses";

const DUMMY_EXPENSES = [
  {
    id: 1,
    title: "Iron",
    amount: "43",
    date: new Date(2022, 4, 26),
  },
  {
    id: 2,
    title: "Bag",
    amount: "35",
    date: new Date(2021, 12, 13),
  },
  {
    id: 3,
    title: "Mobile",
    amount: "59",
    date: new Date(2022, 9, 19),
  },
  {
    id: 4,
    title: "Wallet",
    amount: "12",
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expense, setExpense] = useState(DUMMY_EXPENSES);
  const addingNewExpenseDataHandler = (expenseData) => {
    setExpense((prevExpense) => [expenseData, ...prevExpense]);
  };

  return (
    <>
      <h1
        style={{
          color: "white",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        Expense Tracker
      </h1>
      <Expenses
        expenses={expense}
        onAddingNewExpenseData={addingNewExpenseDataHandler}
      />
    </>
  );
}

export default App;
