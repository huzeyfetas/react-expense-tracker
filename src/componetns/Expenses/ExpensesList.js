import React from "react";
import ExpenseItem from "./ExpenseItem.js";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <p className="expenses-list__fallback">No espenses found</p>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => {
        return <ExpenseItem key={e.id} expense={e}></ExpenseItem>;
      })}
    </ul>
  );
};

export default ExpensesList;
