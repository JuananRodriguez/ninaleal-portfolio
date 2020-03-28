import React from 'react';
import { Link } from 'gatsby';
import './Link.scss';

const CustomLink = ({ to, children, isExternal, onClick, className }) => {

    return isExternal ? (
        <a
            target="_blank"
            className={['link', className].join(' ')}
            href={to}
            onClick={onClick}
            rel="noopener noreferrer"
        >
            {children}
        </a>
    )
        :
        (
            <Link
                className={['link', className].join(' ')}
                to={to}
                onClick={onClick}
            >
                {children}
            </Link>
        )

}

CustomLink.defaultProps = {
    onClick: () => { }
}

export default CustomLink;