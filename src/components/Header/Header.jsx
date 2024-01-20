import React from 'react';
import './Header.css';
import Logo from '../Logo/Logo';
import Search from '../Search/Search';

function Header() {
  return (
    <div className='header'>
        <Logo/>
        {/* <Search/> */}

        {/* <input className='searchbar'  type='text' placeholder='Find your favorite products' /> */}
    </div>
  )
}

export default Header