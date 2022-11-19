import React, { useState } from 'react';

//import Chart from '../Charts/Chart';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css';

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState('2020');

  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  console.log(filteredExpenses === filteredYear);
  console.log(filteredExpenses);
  console.log(filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
