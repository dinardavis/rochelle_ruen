import React from 'react';
import MobileNav from './MobileNav';
import { Link } from 'gatsby';
import { debounce } from './utilities/helpers';
import mainLogo from "../assets/imgs/main_logo.png"

export default function Navbar() {
  const [prevScroll, setPrevScroll] = React.useState(0) 
  const [visible, setVisible] = React.useState(true)
  const [mobileNavState, setMobileNavState] = React.useState(false)
  const [windowWidth, setWindowWidth] = React.useState(0)

  function handleToggle() {
    setMobileNavState(prevNav => !prevNav)
  }

  const handleScroll = debounce(() => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    if(scrollTop === 0) {
      setVisible(true)
    } else if(scrollTop !== 0 && scrollTop < 700) {
      if (scrollTop > prevScroll) {
          setVisible(false)
      } else {
        setVisible(true)
      }  
    } else if(scrollTop > 700 ) {
      setVisible(true)
    } 
    setPrevScroll(scrollTop)
  }, 10)


  React.useEffect(() => {
    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener("resize", handleWindowResize)

    if(windowWidth > 800) {
      setMobileNavState(false)
    }
  }, [windowWidth])


  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [prevScroll, visible, handleScroll])

  const styles = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 30px',
    marginTop: '.5rem',
    zIndex: '100',
    width: '98%',
    transition: 'top 0.3s',
    borderRadius: '1rem'
  }

  return (
    <nav className={`nav-container ${prevScroll === 0 || mobileNavState ? "no-background" : "nav-shadow"}`} style = {{...styles, top: visible ? '0px' : '-105px', backgroundColor: mobileNavState ? "transparent" : ""}}>
      <Link to="/">
        <img className="nav-logo" onClick={() => setMobileNavState(false)} src={mainLogo} alt="Rochelle Ruen Main Logo" />
      </Link>

      <div className="main-nav">
        <ul>
        <li>
            <Link to="/#greetings" activeClassName='active-a'>Greetings</Link>
          </li>
          <li>
            <Link to="/#services" activeClassName='active-a'>Services</Link>
          </li>
          <li>
            <Link to="/aboutyou" activeClassName='active-a'>About You</Link>
          </li>
          <li>
            <Link to="/mystory" activeClassName='active-a'>My Story</Link>
          </li>
          <li>
            <Link to="/#contact" activeClassName='active-a'>Contact</Link>
          </li>
        </ul>
      </div>

      <MobileNav 
        mobileNavState={mobileNavState}
        handleToggle={handleToggle} 
      />
    </nav>
      
  )
}