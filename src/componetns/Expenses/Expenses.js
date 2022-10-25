import React, { useState } from "react";

import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2019");

  const dropdownChangeHandler = (event) => {
    setYearFilter((prevState) => {
      return event.target.value;
    });
  };

  const filteredExpenses = props.expenses.filter(
    (e) => e.date.getFullYear().toString() === yearFilter
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        selectedYear={yearFilter}
        onDropdownChange={dropdownChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
