import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { SiJusteat } from "react-icons/si";

export default function Home() {
  return (
    <div className="header-video">
      <video autoPlay loop muted>
        <source src="videos/pizza1.mp4" type="" />
      </video>
      <div className="menu_content">
        <div className="btn-array">
          <NavLink to="/menufoods">
            <SiJusteat />
          </NavLink>
          <div className="text">Bestellen</div>
        </div>
      </div>
    </div>
  );
}
