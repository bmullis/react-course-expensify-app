import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense, editExpense, removeExpense } from './actions/expenses';
import { setTextFilter, setStartDate, setEndDate, sortByAmount, sortByDate } from './actions/filters';
import getVisibileExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water Bill', amount: 12300, createdAt: moment('2019-01-07') }));
store.dispatch(addExpense({ description: 'Gas Bill', amount: 14300, createdAt: moment('2019-01-03') }));
store.dispatch(addExpense({ description: 'Kombucha', amount: 380, createdAt: moment('2019-01-09') }));
store.dispatch(addExpense({ description: 'Rent', amount: 109500, createdAt: moment('2019-01-11') }));

store.dispatch(setTextFilter(''));

const state = store.getState();
const visibileExpenses = getVisibileExpenses(state.expenses, state.filters);
store.subscribe(() => { console.log(store.getState())});


const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));