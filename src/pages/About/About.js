import React from "react";
import "./About.css";
import { Row, Col, Container } from "react-bootstrap";

export default function About() {
  const fotoPersonal = [
    {url:"pics/koch/koch5.jpg",name:"Giuseppe Rossi",text:"italienischer Koch"},
    {url:"pics/koch/koch4.jpg",name:"Akiko Nakamura",text:"japanische Koch"},
    {url:"pics/koch/koch0.jpg",name:"Anahita Hemmati",text:"iranische Koch"},
  ];
  return (
    
    <div className="main-about">
      <Container className="container-about ">
      <div className="mb-5 header-about">
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus veniam accusamus nulla quidem quisquam illo porro reprehenderit facilis, iusto velit facere accusantium labore est eligendi aspernatur numquam corrupti reiciendis libero.</p>
      </div>
        <Row >
          {fotoPersonal.map((person) => (
            <Col className="mx-auto" md={6} lg={4}>
              
              <PersonalDinst key={person} Person={person} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

function PersonalDinst({ Person }) {
  return (
    <div className="card-person">
      <div className="box-img">
        <img className="item-img" src={Person.url} />
        <div className="desc">
          <h3 className="personName"><strong>{Person.name}</strong></h3>
          <p className="personDetile">{Person.text}</p>
        </div>
      </div>
    </div>
  );
}
