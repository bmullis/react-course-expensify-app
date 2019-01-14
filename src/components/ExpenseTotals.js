import React from 'react';

const ExpenseTotals = (props) => {
    let total = 0;

    props.expenses.map((expense) => {
        total = total + expense.amount;
    });

    return (
        <div className="totals-row">
            <h3>Total</h3>
            <h3>${(total / 100).toFixed(2)}</h3>
        </div>
    );
};

export default ExpenseTotals;