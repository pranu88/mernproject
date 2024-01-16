import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { getUser } from "./utilities/users-service";
import AuthPage from "./pages/AuthPage/AuthPage.jsx";

import Navbar from "./components/Navbar";
import Header from "./components/Header/Header.jsx";
import LoginForm from "./components/LoginForm/LoginForm.jsx";
import SignUpForm from "./components/SignUpForm/SignUpForm.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";


function App() {
  const [user, setUser] = useState(getUser());
  return (
    <div className="App">
       <Header/>
      {/* {user ? (
        <>
          <Navbar user={user} setUser={setUser} />
          <Routes>
           <Route path="/Login" element ={<LoginForm/>}/>
           <Route path="/Register" element ={<SignUpForm/>}/>
          </Routes>
        </>
      ) : (
        <AuthPage user={user} setUser={setUser}/>
      )} */}

         <Routes>
           <Route path="/create" element={<CreatePost />} />
           <Route path="/Login" element ={user ? <Navbar user={user} setUser={setUser}/> :<LoginForm/>}/>
           <Route path="/Register" element ={<SignUpForm/>}/>
          </Routes>


    </div>
  );
}

export default App;
