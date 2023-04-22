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
import profile from "./pages/Profile";

// COMPONENTS
import NavBar from "./Components/NavBar";
import './app.css'
import { useState } from "react";


function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/destinationchange" element={<Index />} />
          <Route path="/destinationchange/new" element={<New />} />
          <Route exact path="/destinationchange/:id" element={<Show />} />
          <Route path="/destinationchange/:id/edit" element={<Edit />} />
          <Route path="*" element={<FourOFour />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
