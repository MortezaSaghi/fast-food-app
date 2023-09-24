import "./Navbar.css";
import React, { useContext, useState } from "react";
import {ShopContext} from '../../context/ShopContext'
//---------- packge React Bootstrap
import { Container, Navbar, Nav} from "react-bootstrap";

//--------- Packge React Icons
import { AiOutlineShoppingCart } from "react-icons/ai";
//--------  components
import Login from "../login/Login";

export default function Navbars({ showShoppinglist ,showlogin,islogin }) {
  //------ States
  // const [islogin, setIslogin] = useState(false);
  //------ shop context
  const shopContext=useContext(ShopContext);

  const quantityTotal=shopContext.shoppinglist.reduce((pre,current)=>pre+current.quantity,0);
  //------- functions
  
  // const toggleLog = () => {
  //   setIslogin((pre) => !pre);
  // };
  // const handelChange = () => {
  //   toggleLog();
  //   showlogin();
  // };

  return (
  
      <Navbar collapseOnSelect expand="lg" className="nav-class" fixed="top">
        <Container className="container-class" fluid>
          <div>
            <Navbar.Brand href="/" className="logo">
              <span>P</span>
              <span>izZA</span>
              <span>.</span>
            </Navbar.Brand>
            <div className="shoop-icon">
              <AiOutlineShoppingCart onClick={showShoppinglist} />
              <div className="nummer-shooping me-4">{quantityTotal>0?quantityTotal:''}</div>
            </div>
          </div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="menu-icon"
          />

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto menu-items">
              <Nav.Link className="link-item" href="/">Home</Nav.Link>
              <Nav.Link className="link-item" href="/about">About</Nav.Link>
              <Nav.Link className="link-item" href="/contact">Contact</Nav.Link>
              <Nav.Link className="link-item" href="/jobs">Jobs</Nav.Link>
            </Nav>
            <Nav>
              
              <div className="user-log" onClick={showlogin}>{islogin?'Logout':'Login'}</div>
              {/* <Nav.Link href="/" className="user-log" onClick={showlogin}>{islogin?'Logout':'Login'}</Nav.Link> */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
       
  );
}
