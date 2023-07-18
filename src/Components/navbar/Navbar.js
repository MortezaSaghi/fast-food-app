import React, { useRef, useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

//--------- Packge React Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
//--------- Components
import Login from "../login/Login";



export default function Navbar({numberofproduct,showShoppinglist}) {
  
  //------ States
  const [islogin, setIslogin] = useState(false);

  //------ Functions
  const navToggle = useRef();
  let showNavbar = () => {
    navToggle.current.classList.toggle("responsive-nav");
  };

  const toggleLog=()=>{
    setIslogin(pre=>!pre);
  }

  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <span>P</span>izZA<span>.</span>
        </NavLink>
        <div className="shoop-icon">
          <AiOutlineShoppingCart onClick={showShoppinglist} />
          <div className="nummer-shooping">{numberofproduct}</div>
        </div>
      </div>
      <div className="nav-recht">
        <Login className="login-btn" islogin={islogin} toggleLog={toggleLog} />
        <nav ref={navToggle}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <div className="nav-btn nav-close-btn" onClick={showNavbar}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </nav>
        <div className="nav-btn" onClick={showNavbar}>
          <i className="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}
