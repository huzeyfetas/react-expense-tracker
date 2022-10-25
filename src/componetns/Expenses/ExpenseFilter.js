import React from "react";
import "./ExpenseFilter.css";

const ExpenseFilter = (props) => {
  return (
    <div className="expense-filter">
      <label className="expense-filter__label">Filter Year</label>
      <select
        className="expense-filter__dropdown"
        value={props.selectedYear}
        onChange={props.onDropdownChange}
      >
        <option value="2019">2019</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>
    </div>
  );
};

export default ExpenseFilter;
