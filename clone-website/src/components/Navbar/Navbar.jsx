import React, { useEffect, useState } from 'react'
import { Link,  animateScroll as scroll, scrollSpy } from 'react-scroll';
import './navebar.css'
import logo  from'../../assets/logo.png'
import menu_icon  from'../../assets/menu-icon.png'
const Navbar = () => {
    const [stick,setStick]=useState(false);
    useEffect(()=>{
      window.addEventListener('scroll',()=>{
        window.scrollY > 50 ? setStick(true):setStick(false);
      })
    },[]);
    const [mobileMenu,setMobileMenu]=useState(false);
    const toggleMenu=()=>{
      mobileMenu?setMobileMenu(false):setMobileMenu(true)
    }


  return (
    <nav className={`container ${stick ?'dark-nav':''}`}>
      <img src={logo} alt='' className='logo'></img>
      <ul className={mobileMenu?'':'hide-mobile-menu'}>
      <li><Link to='hero' smooth={true} offset={0} duration={500}>Home</Link></li>
      <li><Link to='program' smooth={true} offset={0} duration={-260}>Program</Link></li>
      <li><Link to='about' smooth={true} offset={0} duration={-150}>About</Link></li>
      <li><Link to='campus' smooth={true} offset={0} duration={-260}>Campus</Link></li>
      <li><Link to='testimonials' smooth={true} offset={0} duration={-260}>Testimonials</Link></li>
      <li><Link to='contact' smooth={true} offset={0} duration={-260}><button className='btn'>Contact us</button></Link></li>
      </ul>
      <img src={menu_icon} className='menu-icon' onClick={toggleMenu}></img>
    </nav>
  )
}

export default Navbar
