import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <div className="container">
            <div className="nav">
                <h1><Link to="/">Expensify</Link></h1>
                <div className="nav-links">
                    <NavLink to="/" activeClassName="active" exact>Dashboard</NavLink>
                    <NavLink to="/create" activeClassName="active">Create an Expense</NavLink>
                    <NavLink to="/help" activeClassName="active">Get Help</NavLink>
                </div>
            </div>
        </div>
    </header>
);

export default Header;