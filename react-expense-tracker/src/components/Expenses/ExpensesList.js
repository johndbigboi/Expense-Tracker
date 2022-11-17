import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses.</h2>;
  }

  return (
    <ul className="expense-list">
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>

    /* OR below conditional statement */
    // let expensesContent = <p> No expense found.</p>;
    // if (props.items.length > 0) {
    // expensesContent = props.items.map((expense) => (
    //   <ExpenseItem
    //     key={expense.id}
    //     title={expense.title}
    //     amount={expense.amount}
    //     date={expense.date}
    //   />
    // ));
    /* OR */
    /* filteredExpenses.length === 0 && <p> No expense found.</p>
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))} */
    /* OR */
    /* {filteredExpenses.length === 0 ? (
        <p> No expense found.</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )} */
  );
};

export default ExpensesList;
