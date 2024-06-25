import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.css';
import logoimg from './../../assets/ToDo.svg';

const HeaderComponent = () => {
  const logo = <img src={logoimg} alt='logo' className='header-logo' />;

  return (
    <div className='header-container'>
      <div className='header'>
      <NavLink className='logo' to='/'>
        {logo}
      </NavLink>
      <div className='titles'>
        <NavLink className='home' exact to='/' activeClassName='active'>
          Home
        </NavLink>
        <NavLink className='about' to='/about' activeClassName='active'>
          About
        </NavLink>
      </div>
    </div>
    </div>
    
  );
};

export default HeaderComponent;

