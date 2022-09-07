import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
function Expenses(props) {
  const [selection, setSelection] = useState("2020");
  const selectHandler = (selectedValue) => {
    console.log(selectedValue);
    console.log("From expenses.js");
    setSelection(selectedValue);
  };

  const filteredexpenses = props.expenses.filter((a) => {
    return a.date.getFullYear().toString() === selection;
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selected={selection} onSelect={selectHandler} />
      <ExpensesChart expenses={filteredexpenses} />
      <ExpensesList items={filteredexpenses} />
    </Card>
  );
}

export default Expenses;
