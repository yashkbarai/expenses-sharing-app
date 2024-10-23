import React, { useState } from 'react';

const ExpenseForm = ({ addExpense }) => {
    const [name, setName] = useState('');  // State for expense name
    const [amount, setAmount] = useState('');  // State for expense amount
    const [participants, setParticipants] = useState('');  // State for participants

    const handleSubmit = (e) => {
        e.preventDefault();  // Prevent page reload
        const expense = {
            name,
            amount: parseFloat(amount),
            participants: participants.split(',').map((p) => p.trim()),  // Convert string to array
        };
        addExpense(expense);  // Call addExpense function from props
        setName('');  // Clear input fields
        setAmount('');
        setParticipants('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}  // Update name state
                placeholder="Expense Name"
                required
            />
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}  // Update amount state
                placeholder="Amount"
                required
            />
            <input
                type="text"
                value={participants}
                onChange={(e) => setParticipants(e.target.value)}  // Update participants state
                placeholder="Participants (comma separated)"
                required
            />
            <button type="submit">Add Expense</button>
        </form>
    );
};

export default ExpenseForm;
