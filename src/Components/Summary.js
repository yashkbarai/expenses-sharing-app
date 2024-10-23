import React from 'react';

const Summary = ({ expenses }) => {
    const totalAmount = expenses.reduce((total, expense) => total + expense.amount, 0);  // Calculate total amount
    const totalParticipants = expenses.reduce((total, expense) => total + expense.participants.length, 0);  // Calculate total participants

    const splitAmount = totalParticipants > 0 ? (totalAmount / totalParticipants).toFixed(2) : 0;  // Calculate amount per participant

    return (
        <div>
            <h2>Summary</h2>
            <p>Total Amount: ${totalAmount.toFixed(2)}</p>
            <p>Amount per Participant: ${splitAmount}</p>
        </div>
    );
};

export default Summary;
