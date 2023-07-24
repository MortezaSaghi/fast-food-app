import { useFormik } from "formik";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

export default function Register() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh" }}
    >
      <Form style={{ width: "70vw" }} className=" rounded p-4 shadow-lg">
        {/* <h3 className="mb-3 text-center">Welcome To Register</h3> */}
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Fullname" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        
        <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Enter Password" />
        </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Repeat Password</Form.Label>
          <Form.Control type="password" placeholder="Enter again Password" />
        </Form.Group>
            </Col>
        </Row>
        
        <Row>
          <Col md={2}>
          <Form.Label htmlFor="selectCity">City</Form.Label>
            <Form.Select id="selectCity" aria-label="Default select example">
              <option>Plsae select City</option>
              <option value="Bremen">Bremen</option>
              <option value="Achim">Achim</option>
            </Form.Select>
          </Col>
          <Col md={8}>
            <Form.Label htmlFor="inputStreet">Street</Form.Label>
            <Form.Control type="text" id="inputStreet" aria-describedby="" />
          </Col>
          <Col md={2}>
            <Form.Label htmlFor="inputZip">zip</Form.Label>
            <Form.Control type="text" id="inputZip" aria-describedby="" />
          </Col>

          <Form.Group className="my-4" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="I agree with the rules" />
          </Form.Group>
        </Row>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
}
