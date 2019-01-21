import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header>
        <div className="container">
            <div className="nav">
                <h1><Link to="/">Expensify</Link></h1>
                <div className="nav-links">
                    <NavLink to="/dashboard" activeClassName="active" exact>Dashboard</NavLink>
                    <NavLink to="/create" activeClassName="active">Create an Expense</NavLink>
                    <button onClick={startLogout}>Sign Out</button>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);