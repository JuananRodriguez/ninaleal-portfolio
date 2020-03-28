import React from "react";
import './editorialEntry.scss';
import Img from "gatsby-image"
import Link from "./../Link";
import Button from "../Button";

const EditorialEntry = ({ node }) => {
    const title = node.frontmatter.title || node.fields.slug;
    const description = node.frontmatter.description || node.excerpt;
    const date = new Date(node.frontmatter.date).toLocaleDateString();
    console.log('node', node.frontmatter.thumbnail)
    return (
        <div className="editorial-entry">
            <div className="thumbnail">
                {
                    node.frontmatter.thumbnail &&
                    <Link to={node.fields.slug}>
                        <Img
                            draggable={false}
                            fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
                        />
                    </Link>
                }
            </div>
            <div className="content">
                <h3 className="title">
                    <Link to={node.fields.slug}>
                        <Button right>
                            {title}
                        </Button>
                    </Link>
                </h3>
                {/* <small>{date}</small> */}
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default EditorialEntry