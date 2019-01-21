import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div className="container">
            <ExpenseForm 
                buttonText="Update Expense"
                expense={props.expense}
                onSubmit={(expense) => {
                    // Dispatch the action
                    props.dispatch(startEditExpense(props.expense.id, expense));
                    // Redirect to the dashboard page
                    props.history.push('/');
                }}
            />
            <button 
                className="button button-alert"
                onClick={() => {
                    // Dipatch the action
                    props.dispatch(startRemoveExpense({ id: props.expense.id }));
                    // Redirect to the dashboard page
                    props.history.push('/');
                }
            }>
                Remove Expense
            </button>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
}

export default connect(mapStateToProps)(EditExpensePage);