import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

export default function Expenses(props) {
	const [filteredYear, setFilteredYear] = useState('2023');

	const filteredExpenses = props.items.filter(
		(expense) => expense.date.getFullYear().toString() === filteredYear,
	);

	const saveFilterHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	return (
		<Card className='expenses'>
			<ExpensesFilter
				selected={filteredYear}
				onSaveFilter={saveFilterHandler}
			/>
			<ExpensesChart expenses={filteredExpenses}/>
			<ExpensesList items={filteredExpenses} />
		</Card>
	);
}
