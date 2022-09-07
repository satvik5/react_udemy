import "./ExpensesFilter.css";
const ExpensesFilter = (props) => {
  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log("From ExpensesFilter.js");
    props.onSelect(e.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Year</label>
        <select value={props.selected} onChange={changeHandler}>
          <option>2019</option>
          <option>2020</option>
          <option>2021</option>
          <option>2022</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
