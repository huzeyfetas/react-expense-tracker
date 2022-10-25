import React, { useState } from "react";
import "./NewExpenseForm.css";

const NewExpenseForm = ({ onSaveFormData, onCloseForm }) => {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, amount: +event.target.value };
    });
  };
  const dateHandler = (event) => {
    setFormData((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const payload = {
      id: Math.random().toString(),
      ...formData,
      date: new Date(formData.date),
    };
    onSaveFormData(payload);
    clearFormData();
  };

  const clearFormData = (event) => {
    setFormData((prevState) => {
      return {
        title: "",
        amount: "",
        date: "",
      };
    });
    onCloseForm();
  };

  const isFormEmpty = (buttonType) => {
    if (buttonType === "submit") {
      if (
        formData.amount === "" ||
        formData.title === "" ||
        formData.date === ""
      ) {
        return true;
      } else {
        return false;
      }
    }
    if (buttonType === "clear") {
      if (
        formData.amount !== "" ||
        formData.title !== "" ||
        formData.date !== ""
      ) {
        return false;
      } else {
        return true;
      }
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={formData.title} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            min="0.01"
            max="9999"
            value={formData.amount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={formData.date}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        {!isFormEmpty("submit") && <button type="submit">Add Expense</button>}
        {!isFormEmpty("clear") && (
          <button type="button" onClick={clearFormData}>
            Clear Form
          </button>
        )}
      </div>
    </form>
  );
};

export default NewExpenseForm;
