import React from 'react';

const ExpenseList = ({ expenses }) => {
    return (
        <div>
            <h2>Expense List</h2>
            <ul>
                {expenses.map((expense, index) => (
                    <li key={index}>
                        {expense.name}: ${expense.amount.toFixed(2)} (Shared by: {expense.participants.join(', ')})
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ExpenseList;
