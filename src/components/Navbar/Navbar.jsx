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
      <nav className="nav">

        <p style={{fontWeight:'bolder'}}>Welcome to MERN MART! </p>       
        
      
      <div className="navlinks">
        <Link to="/orders/new" className="link">Home</Link> 
        <Link to="/orders" className="link">Order History</Link> 
        {/* <Link to="" onClick={handleLogOut}><button>Log-Out</button></Link> */}
        <Link to="/cart" className="link">Cart </Link>
        <UserLogOut user={user} setUser={setUser} />
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// 