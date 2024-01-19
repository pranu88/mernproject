import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';

function Header() {
  return (
    <div className='header'>
        <Logo/>
        <input className='searchbar'  type='text' placeholder='Find your favorite products' />
    </div>
  )
}

export default Header