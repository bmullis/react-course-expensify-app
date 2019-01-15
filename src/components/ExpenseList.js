import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import ExpenseTotals from './ExpenseTotals';
import selectedExpenses from '../selectors/expenses';

let total = 0;

const ExpenseList = (props) => (
    <div className="panel">
        <h3>Expense List</h3>
        {props.expenses.length === 0 && <p className="none-added">No Expenses Added Yet</p>}
        {props.expenses.map((expense) => {
            total = total + expense.amount;
            return (
                <ExpenseListItem key={expense.id} {...expense} />
            )
        })}
        {props.expenses.length !== 0 && <ExpenseTotals expenses={props.expenses} />}
    </div>
);

const mapStateToProps = (state) => {
    return {
        expenses: selectedExpenses(state.expenses, state.filters)
    };
};

export default connect(mapStateToProps)(ExpenseList);