import React from 'react';
import Img from "gatsby-image" 
import { IoMdEye } from "react-icons/io";

const GalleryImage = ({ data, alt, fluid, ...rest }) => {
    return (
        <>
        <div className="Gallery-Image" {...rest} >
            <div><IoMdEye /></div>
            <Img fluid={fluid} alt={alt}/>
        </div>
        </>

    )
}

export default GalleryImage;