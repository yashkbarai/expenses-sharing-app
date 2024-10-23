import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import ExpenseList from './ExpenseList';
import Summary from './Summary';
import './App.css'; // Import your CSS file for styling

const App = () => {
    const [expenses, setExpenses] = useState([]);  // State to hold expenses

    const addExpense = (expense) => {
        setExpenses([...expenses, expense]);  // Add new expense to the list
    };

    return (
        <div className="app-container">
            <h1>Expenses Sharing App</h1>
            <ExpenseForm addExpense={addExpense} />  
            <ExpenseList expenses={expenses} />  
            <Summary expenses={expenses} />  
        </div>
    );
};

export default App;
