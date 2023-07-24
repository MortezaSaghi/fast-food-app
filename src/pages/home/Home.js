import React from "react";
import "./Home.css";
import { NavLink } from "react-router-dom";
import { SiJusteat } from "react-icons/si";
//------import data user
import {getDataUser} from '../../data/users';

export default function Home({islogin,dataUserlogin}) {
    const {email,password}=dataUserlogin;
    const dataUser=getDataUser(email,password);
  return (
    <div className="header-video">
      <video autoPlay loop muted>
        <source src="videos/pizza1.mp4" type="" />
      </video>
      {islogin && (<div className="username-header"><div className="username-class">{islogin && (dataUser !== undefined) ? 'Welcome ' + dataUser.name :''}</div></div>)}
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
