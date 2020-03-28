import React from 'react';
import Link from './../Link';
import Button from '../Button';

const NavLink = ({ to, onClick, children, isExternal }) => {
    return (
        <Link to={to} onClick={onClick} isExternal={isExternal} className='Nav-Link'>
            <Button right>
                {children}
            </Button>
        </Link>
    )
}
export default NavLink;