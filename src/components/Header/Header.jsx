import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css'

function Header() {
  return (
    <div className='header'>
        <h1>B-Blog</h1>
        <div className='.links'>
        
        <Link style= {{textDecoration:"none", color:"inherit",margin:"1em",fontWeight:"bold"}} to="/Login">Login</Link>
        <Link style= {{textDecoration:"none", color:"inherit",fontWeight:"bold",margin:"1em"}} to="/Register">Register</Link>
        </div>
        
    </div>
  )
}

export default Header