import React, { useState } from 'react';
import Img from 'gatsby-image/withIEPolyfill';
import './View.scss';

const View = ({ data, currentView, ...rest }) => {
    const [imageIsLoaded, setImageIsLoaded] = useState(false)
    const imageIsVisible = currentView === data;

    return (
        <div className="Carousel-View">
            {
                (imageIsVisible || imageIsLoaded) && <Img
                    onLoad={() => setImageIsLoaded(true)}
                    draggable="false"
                    loading="lazy"
                    objectPosition="50% 50%"
                    objectFit="contain"
                    fluid={data.node.childImageSharp.fluid}
                />
            }
        </div>
    )
}

export default View;