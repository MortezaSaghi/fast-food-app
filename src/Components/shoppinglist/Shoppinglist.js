// import "./Shoppinglist.css";
import { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
// ----- import react context
import { Modal, Button, Container, Row, Col } from "react-bootstrap";
//------- import components
import ShopListItem from "../shopListItem/ShopListItem";



export default function Shoppinglist({ showShoppinglist }) {
  const shopContext = useContext(ShopContext);

  return (
    <>
      <Modal show={showShoppinglist} onHide={showShoppinglist}>
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-primary">
            Shopping Basket
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {shopContext.shoppinglist.length > 0 
          ? (
            <Container>
              <Row className="mb-3 fw-bold">
                <Col xs={3}>Product</Col>
                <Col xs={3}>Quantity</Col>
                <Col xs={2}>Price</Col>
                <Col xs={2}>Amount</Col>
                <Col xs={2}></Col>
              </Row>
              {shopContext.shoppinglist.map((item) => (
                <ShopListItem key={item.id} id={item.id} quantity={item.quantity}/>
              ))}

              <Row className="text-center fw-bold text-success">
                <Col xs={12}>Total Price : {shopContext.getTotalAmount()} $</Col>
              </Row>
            </Container>
          ) : (
            <div>basket is leer ...</div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={showShoppinglist}>
            Close
          </Button>
          <Button variant="primary" onClick={showShoppinglist}>
            Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
