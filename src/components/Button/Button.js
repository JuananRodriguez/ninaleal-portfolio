import React from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

const Button = ({ children, left, right }) => {

    return (
        <div className="custom-button">
            {left && <span className="left"> <IoIosArrowBack /> </span>}
            <span className="center">{children}</span>
            {right && <span className="right"> <IoIosArrowForward /> </span>}
        </div>
    )
}

export default Button;