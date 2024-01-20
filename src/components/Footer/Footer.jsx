import React from 'react';
import './Footer.css';
import img from './M.png'
function Footer() {
  return (
    <div className='footer'>
     <img src={img} alt='logo' style={{width:'15vmin',height:'15vmin'}}/> 
     <h3>Thank you for visiting MERN MOBILE MART!</h3>
    </div>
  )
}

export default Footer