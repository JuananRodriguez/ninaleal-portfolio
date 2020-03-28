import React from 'react';
import Link from './../Link';
import Button from '../Button';

const PostFooter = ({ previous, next }) => {
    return (
        <div className="post-footer">
            <ul>
                <li>
                    {previous && (
                        <Link to={previous.fields.slug} rel="prev">
                            <Button left>
                               {previous.frontmatter.title}
                            </Button>
                        </Link>
                    )}
                </li>
                <li>
                    {next && (
                        <Link to={next.fields.slug} rel="next">
                            <Button right>
                                {next.frontmatter.title}
                            </Button>
                        </Link>
                    )}
                </li>
            </ul>
        </div>
    )
}

export default PostFooter;