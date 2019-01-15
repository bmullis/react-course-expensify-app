import React from 'react';
import { Link } from 'react-router-dom';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const ExpenseDashboardPage = () => (
    <div className="container">
        <ExpenseListFilters />
        <ExpenseList />
        <Link 
            className="button-round"
            to="/create"
        >
            <i className="fa fa-plus"></i>
        </Link>
    </div>
);

export default ExpenseDashboardPage;