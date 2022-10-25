import React, { useState } from "react";
import NewExpenseForm from "./NewExpenseForm";

import "./NewExpense.css";

const NewExpense = ({ addNewExpense }) => {
  const [toggleForm, settoggleForm] = useState(false);
  const saveFormDataHandler = (formData) => {
    addNewExpense(formData);
    toggleHandler();
  };
  const toggleHandler = (event) => {
    settoggleForm((prevState) => !prevState);
  };

  let formContent;

  if (!toggleForm) {
    formContent = <button onClick={toggleHandler}>Add New Expense</button>;
  } else {
    formContent = (
      <NewExpenseForm
        onCloseForm={toggleHandler}
        onSaveFormData={saveFormDataHandler}
      />
    );
  }

  return <div className="new-expense">{formContent}</div>;
};

export default NewExpense;
