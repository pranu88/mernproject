// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";

import Navbar from "./components/Navbar.jsx";

import LoginForm from "./components/LoginForm/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";





function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
     
       {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
           <Route path="/Login" element ={<LoginForm/>}/>
           <Route path="/Register" element ={<SignUpForm/>}/>
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
