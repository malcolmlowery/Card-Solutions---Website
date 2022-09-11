import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import './navigation';
import Logo from '../../assets/images/logo-01.png';

// Components
import Button from '../button/Button.jsx';

const Navigation = () => {
   return(
      <>
         <div className='navigation'>
            <img className='navigation__logo' src={Logo} />
            <span className='navigation__spacer'/>
            <ul className='navigation__links'>
               <li>
                  <Link to='/'>Features</Link>
               </li>
               <li>
                  <Link to='/'>Benefits</Link>
               </li>
               <li>
                  <Link to='/'>Pricing</Link>
               </li>
               <li>
                  <Link to='/'>Contact</Link>
               </li>
            </ul>
            <span className='navigation__spacer'/>
            <Button buttonType='pillBtn' />
         </div>
         <Outlet />
      </>
   )
};

export default Navigation;