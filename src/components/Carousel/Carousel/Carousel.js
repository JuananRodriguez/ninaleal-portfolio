import React from 'react';
import Carousel from 'react-images';
import View from '../View/View';
import './Carousel.scss'

const navButtonStyles = base => ({
    ...base,
    backgroundColor: 'white',
    boxShadow: '0 1px 6px rgba(0, 0, 0, 0.18)',
    color: "#444",

    '&:hover, &:active': {
        backgroundColor: 'white',
        color: "#444",
        opacity: 1,
    },
    '&:active': {
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.14)',
        transform: 'scale(0.96)',
    },
});

const FooterCount = ({ currentIndex, ...rest }) => {
    console.log(rest.views.length)
    return (
        <div className="footer-count">
            <p>{`${currentIndex + 1} / ${rest.views.length}`}</p>
        </div>
    )
}


const CustomCarousel = ({ ...rest }) => {
    return (
        <Carousel
            components={{
                View,
                FooterCount
            }}
            styles={{
                navigationPrev: navButtonStyles,
                navigationNext: navButtonStyles,
            }}
            {...rest}
        />
    )
}

export default CustomCarousel