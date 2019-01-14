import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => (
    <div>
        <h1>Oh no! That's a 404</h1>
        <h4>That page was not found!</h4>
        <p><Link to="/">Return to Homepage</Link></p>
    </div>
)

export default NotFoundPage;