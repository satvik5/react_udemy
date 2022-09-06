import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
function Expenses(props) {
  const { expenses } = props;
  return (
    <Card className="expenses">
      {expenses.map((i) => {
        return (
          <ExpenseItem
            title={i.title}
            amount={i.amount}
            date={i.date}
          ></ExpenseItem>
        );
      })}
    </Card>
  );
}

export default Expenses;
