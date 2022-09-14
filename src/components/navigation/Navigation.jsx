import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation';
import Logo from '../../assets/images/logo-01.png';
import CloseIcon from '../../assets/images/close-icon-01.png';
import HamburgerIcon from '../../assets/images/hamburger-icon-01.png';

// Components
import Button from '../button/Button.jsx';

const Navigation = () => {
   const [navbarMenuActive, setNavbarMenuActive] = useState(false)
   console.log(navbarMenuActive)
   return(
      <>
         <header>
            <nav className='navbar'>
               <div className='navbar__logo'>
                  <img src={Logo} />
                  <Link to='/' />
               </div>
               <ul className={`navbar__menu ${navbarMenuActive && 'active'}`}>
                  <li className='navbar__menu__item'>
                     <Link to='/'>Features</Link>
                  </li>
                  <li className='navbar__menu__item'>
                     <Link to='/'>Benefits</Link>
                  </li>
                  <li className='navbar__menu__item'>
                     <Link to='/'>Pricing</Link>
                  </li>
                  <li className='navbar__menu__item'>
                     <Link to='/'>Contact</Link>
                  </li>
               </ul>
               <div className='navbar__hamburger' onClick={() => setNavbarMenuActive(!navbarMenuActive)}>
                  <img className='navbar__hamburger__icon' src={HamburgerIcon} />
               </div>
            </nav>
         </header>
         <Outlet />
      </>
   )
};

export default Navigation;