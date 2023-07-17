import React, { useRef } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

//--------- Packge React Icons
import { AiOutlineShoppingCart } from "react-icons/ai";

export default function Navbar() {

  const navToggle=useRef();
  let showNavbar=()=>{
    navToggle.current.classList.toggle('responsive-nav');
  }
  
  return (
    <div className="navbar">
      <div className="logo">
        <NavLink to="/">
          <span>P</span>izZA<span>.</span>
        </NavLink>
        <div className="shoop-icon">
          <AiOutlineShoppingCart />
          <div className="nummer-shooping">50</div>
        </div>
      </div>
      <nav ref={navToggle}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/jobs">Jobs</NavLink>
        <div className="nav-btn nav-close-btn" onClick={showNavbar}>
          <i className="fa-solid fa-xmark" ></i>
        </div>
      </nav>
      <div className="nav-btn" onClick={showNavbar}>
        <i className="fa-solid fa-bars"></i>
      </div>
    </div>
  );
}
