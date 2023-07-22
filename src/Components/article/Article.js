import "./Article.css";
import React from "react";
import { useContext } from "react";
//-------- import shopcontext
import { ShopContext } from "../../context/ShopContext";
//-------- react icons
import { MdDeleteOutline } from "react-icons/md";
//--------- import react bootstarp
import { Card, Button, Form, Row, Col, Container } from "react-bootstrap";

export default function Article({ id, name, price, pic }) {
  const foodContext = useContext(ShopContext);
  const foodCoantity = foodContext.getProductQuantity(id);
  return (
    <>
      <Card className="card-box mt-3">
        <div className="img-box">
          <Card.Img variant="top" src={pic} />
        </div>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text className="price">{price} $</Card.Text>
          <Card.Text>Some quick example text to build on</Card.Text>
          {foodCoantity > 0 ? (
            <Row>
              <Col xs={4}>
                <Button onClick={()=>{foodContext.deleteFromshoppinglist(id)}} variant="outline-danger">
                  <MdDeleteOutline className="delete-icon" />
                </Button>
              </Col>
              <Col xs={3}>
                <Button onClick={()=>{foodContext.removeFoodFromShoppinglist(id)}} variant="outline-primary" className="fw-bold">
                  -
                </Button>
              </Col>
              <Col xs={1} className=" fw-bold ">
                {foodCoantity}
              </Col>
              <Col xs={3}>
                <Button onClick={()=>{foodContext.addShopToShoppinglist(id)}} variant="outline-success" className="fw-bold">
                  +
                </Button>
              </Col>
            </Row>
          ) : (
            <Button
              className="btn-add"
              variant="outline-secondary"
              onClick={() => foodContext.addShopToShoppinglist(id)}
            >
              Add
            </Button>
          )}
        </Card.Body>
      </Card>
    </>
  );
}
