import React from 'react';


export default ({ title, subtitle }) => {

    return (
        <div className="header-page">
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}