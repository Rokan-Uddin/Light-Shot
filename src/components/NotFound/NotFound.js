import React from 'react';
import './NotFound.css';
const NotFound = () => {
    // NotFound Component used when url isn't valid
    return (
        <div className="d-flex align-items-center justify-content-center not-found">
            <div>
            <h1>404</h1>
            <h2>Opps!!!   PAGE NOT FOUND</h2>
            <small>Sorry,the page you are looking for doesn't exist.Please use a valid url.</small>
            </div>
        </div>
    );
};

export default NotFound;
