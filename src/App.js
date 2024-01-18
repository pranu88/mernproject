// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route,Navigate } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";

import Navbar from "./components/Navbar/Navbar.jsx";
import Header from "./components/Header/Header.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import OrderHistoryPage from "./pages/OrderHistoryPage/OrderHistoryPage.jsx";
import NewOrderPage from "./pages/NewOrderPage/NewOrderPage.jsx";
import Cart from "./pages/Cart/Cart.jsx";



function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
     
<Header/>


       {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
           {/* <Route path="/Login" element ={<LoginForm/>}/>
           <Route path="/Register" element ={<SignUpForm/>}/> */}

            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser} />} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser} />} />
            <Route path='/cart' element={<Cart user={user} setUser={setUser} />} />
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )}



         {/* <Routes>
          <Route path="/" element={<Layout/>} >
          <Route index element={<Post/>} />
           <Route path="/create" element={<CreatePost />} />
           <Route path="/Login" element ={<LoginForm/>}/>
           <Route path="/Register" element ={<SignUpForm />}/>
           </Route>
          </Routes> */}


    </div>
  );
}

export default App;
