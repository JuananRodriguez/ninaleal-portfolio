import React from 'react';
import './RoundButton.scss'

const RoundButton = ({ onClick, children, className }) => {

    return (
        <div
            className={`round-button ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </div>
    )
}

export default RoundButton;