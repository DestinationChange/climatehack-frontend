// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import About from "./pages/About"
import Card from "./pages/Card"
import Edit from "./pages/Edit";
import EditableUserProfile from "./pages/EditableUserProfile";
import FourOFour from "./pages/FourOFour.js";
import Home from "./pages/Home";
import Login from "./pages/Login"
import NewPosts from "./pages/newPosts";
import NewUserPage from "./pages/NewUserPage"
import Profile from "./pages/Profile";


// COMPONENTS
import NavBar from "./components/NavBar";
import './App.css'
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="*" element={<FourOFour />} />
          <Route path='/about' element={<About/>}/>
          <Route path="/profile" element={<Profile/>}/>
         
        </Routes>
      </Router>
    </div>
  );
}

export default App;
