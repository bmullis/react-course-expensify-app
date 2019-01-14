import React, { Component } from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

class ExpenseForm extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            id: props.expense ? props.expense.id : '',
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount / 100).toFixed(2) : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calFocused: false,
            formError: ''
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    }
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => ({ amount }));
        }
    }
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calFocused: focused }));
    }
    handleFormSubmit = (e) => {
        e.preventDefault();

        if (!this.state.description || !this.state.amount) {
            // Set error state to 'Please provide a description and an amount
            this.setState(() => ({ formError: 'Please provide a valid description and amount for this expense'}));

        } else {
            // Clear the error and submit the form
            this.setState(() => ({ formError: ''}));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10) * 100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    }

    render() {
        return (
            <div>
                <h3>Add a New Expense</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <input 
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                        autoFocus
                    />
                    <input 
                        type="text"
                        placeholder="Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />
                    <SingleDatePicker
                        date={this.state.createdAt} 
                        onDateChange={this.onDateChange} 
                        focused={this.state.calFocused}
                        onFocusChange={this.onFocusChange} 
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <textarea
                        placeholder="Add a note for your expense (optional)"
                        value={this.state.note}
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                    <br />
                    <button className="button">
                        {this.props.buttonText}
                    </button>
                    {this.state.formError && <p>{this.state.formError}</p>}
                </form>
            </div>
        );
    };
}

export default ExpenseForm;