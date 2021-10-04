import React from 'react';
import "./NotFound.css";
const NotFound = () => {
    return (
        <div>
            <p className="page-not-found"><span className="opps">opps!</span>Page Not Found............</p>
            <a href="/home">Go Back</a>
        </div>
    );
};

export default NotFound;