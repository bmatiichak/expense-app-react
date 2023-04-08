import React, { useState } from 'react';
import './ExpenseForm.css';

export default function ExpenseForm(props) {
  let dateObj = new Date(),
  options = {year: 'numeric', month: 'numeric', day: 'numeric'};
  let formattedDate = dateObj.toLocaleString('en-GB', options).split('/').join('-');

	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	// const [userInput, setUserInput] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: '',
	// });

	const titleChangeHandler = (e) => {
		setEnteredTitle(e.target.value);
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredTitle: e.target.value }
		// });
	};

	const amountChangeHandler = (e) => {
		setEnteredAmount(e.target.value);
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredAmount: e.target.value }
		// });
	};

	const dateChangeHandler = (e) => {
		setEnteredDate(e.target.value);
		// setUserInput((prevState) => {
		// 	return { ...prevState, enteredDate: e.target.value }
		// });
	};

	const submitHandler = (e) => {
		e.preventDefault();
		
		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		props.onSaveExpenseData(expenseData);

		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	}

	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input
						value={enteredTitle}
					  onChange={titleChangeHandler}
					  type='text'
						required
					/>
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input
						value={enteredAmount}
					  onChange={amountChangeHandler}
					  min='0.01'
					  step='0.01'
					  type='number'
						required
					/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input
						value={enteredDate}
					  onChange={dateChangeHandler}
					  max={formattedDate}
					  min='01-01-2019'
					  type='date'
						required
					/>
				</div>
			</div>

      <div className='new-expense__actions'>
				<button type='button' onClick={props.onHideForm}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
		</form>
	);
}
