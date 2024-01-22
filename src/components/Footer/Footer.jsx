import React from 'react';
import './Footer.css';
// import Logo from '../Logo/Logo';
import img from './M.png'
function Footer() {
  return (
    <div className='footer'>
      {/* <Logo/> */}
     <img src={img} alt='logo' style={{width:'15vmin',height:'15vmin'}}/> 
     <h3>Thank you for visiting MERN MOBILE MART!</h3>
     <div className='contact'>
      <p>Contact @ </p>
     <div className='social-icons'>
     <a href='https://github.com/pranu88'><img style={{width:'2em',height:'2em'}} src='https://pngimg.com/d/github_PNG83.png' alt='github logo'/></a>
     <a href='https://www.linkedin.com/in/pranusha-p-984720296'><img style={{width:'2em',height:'2em'}} src='https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png'alt='linkedin logo'/></a>
     </div>
     </div>
    </div>
  )
}

export default Footer