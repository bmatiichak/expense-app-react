import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

export default function NewExpense(props) {
	const [isFormShown, setIsFormShown] = useState(false);

	const saveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString(),
		};

		props.onAddExpense(expenseData);
    setIsFormShown(false);
	};

	const showFormHandler = () => {
		setIsFormShown(true);
	};

  const hideFormHandler = () => {
		setIsFormShown(false);
	};

	const initFormButton = (
		<button onClick={showFormHandler}>Add New Expense</button>
	);

	return (
		<div className='new-expense'>
			{!isFormShown && initFormButton}
			{isFormShown && 
				<ExpenseForm
					onHideForm={hideFormHandler}
					onSaveExpenseData={saveExpenseDataHandler}
				/>
			}
		</div>
	);
}
