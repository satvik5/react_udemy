import "./components/Expenses/Expenses.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";
import { useState } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];
function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (expense) => {
    //// IF YOU WANT TO UPDATE VARIABLES THAT DEPEND ON PREVIOUS VARIABLE STATE/SNAPSHOT
    /// ALWAYS AND ALWAYS USE SPECIAL FUNCTION FORM TO UPDATE THOSE VALUES SINCE FUNCTIONS FORM
    /// IS GUARANTEED TO GET PREVIOUS VARIABLE STATE.
    /// IF WE DON'T USE FUNCTION FORM, THEN WE MIGHT WRONG STATE  (i.e. future state or some state that's way back in past)
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;
