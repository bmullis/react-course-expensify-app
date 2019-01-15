import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
    <Link className="list-item-link" to ={`/edit/${id}`}>
        <div className="list-item">
            <h3>
                <Link to={`/edit/${id}`}>
                    {description}
                </Link>
                <p>{moment(createdAt).format('MMMM Do, YYYY')}</p>
            </h3>
            
            <p>${(amount / 100).toFixed(2)}</p>
        </div>
    </Link>
);

export default ExpenseListItem;