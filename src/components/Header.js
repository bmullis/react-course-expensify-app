import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => (
    <header className="header">
        <div className="container">
            <div className="header__content">
                <Link to="/" className="header__title">
                    <h2>Expensify</h2>
                </Link>
                <div className="header__links">
                    <NavLink to="/dashboard" activeClassName="active" exact>Dashboard</NavLink>
                    <NavLink to="/create" activeClassName="active">Create an Expense</NavLink>
                    <a onClick={startLogout}>Sign Out</a>
                </div>
            </div>
        </div>
    </header>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);