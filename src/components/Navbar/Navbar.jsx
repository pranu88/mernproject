import React from "react";
import { Link } from "react-router-dom";
import * as userService from '../../utilities/users-service';
import UserLogOut from "../UserLogOut/UserLogOut";
import './Navbar.css'
function Navbar({user ,setUser}) {

  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut();
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <>
      <nav style={{display:'flex',justifyContent:'space-between'}}>

      
        <p style={{fontWeight:'bolder'}}>Welcome {user.name}, </p>       
        
        
      
      <div style={{display:'flex',justifyContent:'space-around'}}>
        <Link to="/orders/new" 
        style={{
          marginRight:'1em',
          textDecoration:'none',
          color:'inherit',
          fontWeight:'bold',
          border:'solid var(--tan-2)',
          backgroundColor:' var(--blue)',
          height:'2em',
          width:'4em',
        }} >Home</Link> 
        <Link to="/orders" 
        style={{
          marginRight:'1em',
          textDecoration:'none',
          color:'inherit',
          fontWeight:'bold',
          border:'solid var(--tan-2)',
          backgroundColor:' var(--blue)',
          height:'2em',
          width:'8em',
          }}>Order History</Link> 
        {/* <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link> */}
        <UserLogOut user={user} setUser={setUser} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// 