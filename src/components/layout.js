import React, { useEffect, useState } from 'react';
import { Link } from "gatsby"
import { rhythm, scale } from "../utils/typography" // What do I do with this?
import Navigation from './Navigation';
import { isMobile, isTablet } from '../utils/breakPoints';
import { MdMenu } from "react-icons/md";
import './Layout.scss';
import RoundButton from './RoundButton';

// const Layout = ({ location, title, children }) => {
//   return (
//     <div
//       style={{
//         marginLeft: `auto`,
//         marginRight: `auto`,
//         maxWidth: rhythm(24),
//         padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//       }}
//     >
//       <header>{header}</header>
//       <main>{children}</main>
//       <footer>
//         © {new Date().getFullYear()}, Built with
//         {` `}
//         <a href="https://www.gatsbyjs.org">Gatsby</a>
//       </footer>
//     </div>
//   )
// }

// export default Layout


// import MainNav from './MainNav'
// import Main from './Main'
// import Footer from './Footer'
// import RoundButton from '../elements/RoundButton';
// import { MdMenu } from 'react-icons/md';
// import './_layout.scss'
// import { isMobile } from '../utils';



const Header = ({ navIsOpen, setNavIsOpen, location, title, isMobile }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let content;
  if (location.pathname === rootPath) {
    content = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  }
  else {
    content = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }

  return (
    <header>
      <Navigation
        isMobile={isMobile}
        navIsOpen={navIsOpen || !isMobile}
        setNavIsOpen={setNavIsOpen}
      />
      {content}
    </header>
  )
}




const Layout = ({ location, title, children, ...rest }) => {

  //Root Path
  const rootPath = `${__PATH_PREFIX__}/`
  const [navIsOpen, setNavIsOpen] = useState(false);
  const [isMobileState, setIsMobile] = useState(false);

  const checkResolution = () => {
    if (isMobile() || isTablet()) {
      setNavIsOpen(false);
      setIsMobile(true);
    }
    else {
      setNavIsOpen(true);
      setIsMobile(false);
    }
  }

  useEffect(() => {
    checkResolution();
    window.addEventListener('resize', checkResolution, false);
    return () => window.removeEventListener('resize', checkResolution, false);
  }, [])



  return (
    <>
      <div className="Page">
        {
          isMobileState &&
          <RoundButton
            className="menu-button"
            onClick={() => setNavIsOpen(true)}
          >
            <MdMenu />
          </RoundButton>
        }

        <Header
          isMobile={isMobileState}
          navIsOpen={navIsOpen}
          setNavIsOpen={setNavIsOpen}
          location={location}
          title={title}
        />
        <main
          className={`Main ${(navIsOpen && !isMobile()) ? 'opened' : 'closed'}`}
        >
          {children}
        </main>


        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Layout;