import React from 'react';
import Sidebar from './Sidebar';
import NavLink from './NavLink';
import RoundButton from './RoundButton';
import { MdClose } from "react-icons/md";
import NavSeparator from './NavSeparator';
import Logotype from './../../static/nina-leal-logo.svg'

const Navigation = ({ navIsOpen, setNavIsOpen, isMobile }) => {
    const handleCloseNav = () => {
        if (isMobile) {
            setNavIsOpen(false)
        }
    }

    return (
        <Sidebar
            withBlanket={false}
            isOpen={navIsOpen}
            position="left"
            onClose={handleCloseNav}
            className={'Main-nav-sidebar'}
        >
            <div className={`Main-nav ${navIsOpen ? 'opened' : 'closed'}`}>
                {
                    isMobile &&
                    <RoundButton
                        className="close-button"
                        onClick={handleCloseNav}
                    >
                        <MdClose />
                    </RoundButton>
                }
                <div className={`logotype ${isMobile ? 'mobile' : ''}`}>
                    <img src={Logotype} alt="Logotype" />
                </div>
                <ul>
                    <li><NavLink onClick={handleCloseNav} to={'/'}>GALLERY</NavLink></li>
                    <li><NavLink onClick={handleCloseNav} to={'/editorial'}>EDITORIAL</NavLink></li>
                    {/* <li><NavLink onClick={handleCloseNav} to={'/editorial'}>COLLECTIONS</NavLink></li> */}
                    {/* <li><NavLink onClickhandleCloseNav} to={'/blog'}>BLOG</NavLink></li> */}
                    <li><NavLink onClick={handleCloseNav} to={'/about'}>ABOUT ME</NavLink></li>
                    <NavSeparator />
                    <li><NavLink onClick={handleCloseNav} to={'https://www.instagram.com/nina_lealramos/'} isExternal>Instagram</NavLink></li>
                </ul>

                {/* <div className="Laguage-selector-container">
                    <span>ES</span>
                    <span>|</span>
                    <span>EN</span>
                    <span>|</span>
                    <span>FR</span>
                </div> */}
            </div>
        </Sidebar>
    )
}


export default Navigation;