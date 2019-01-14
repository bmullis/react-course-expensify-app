// Higher Order Component (HOC) - A Component that Renders Another Component

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}.</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAdmin && <p>This private info, please do not share!</p> }
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuth = (WrappedComponent) => {
    return (props) => (
        <div>
            { props.isAuth ? (
                <WrappedComponent {...props} /> 
            ) : (
                <p>Please login to view this content.</p>
            )}
        </div>
    );
}

const AuthInfo = requireAuth(Info);
const AdminInfo = withAdminWarning(Info);

ReactDOM.render(<AuthInfo isAuth={false} info="These are the details" />, document.getElementById('app'));