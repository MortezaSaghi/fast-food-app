import { useFormik } from "formik";
import { useState } from "react";
import { Form, Button, Container, Row, Col, Alert } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import * as Yup from "yup";

export default function Register() {
  const [isSuccess, setIsSuccess] = useState(false);
  const formRegister = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      repeatPassword: "",
      city: "",
      street: "",
      zip: "",
      isRulesChecked: false,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(6, "Must be 8 characters or more")
        .max(18, "must be 18 characters or less")
        .required(),
      email: Yup.string().required().email(),
      password: Yup.string().required(),
      repeatPassword: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Passwörter müssen übereinstimmen"),
      city: Yup.string().required(),
      street: Yup.string().required(),
      zip: Yup.number().positive().required(),
      isRulesChecked: Yup.boolean()
        .required()
        .oneOf([true], "must accsept Rulles"),
    }),
    onSubmit: (values, { resetForm }) => {
      // event.preventDefault();
      console.log(values);
      resetForm();
      setIsSuccess(true);
    },
  });

  return (
    <Container
      className="d-flex justify-content-center align-items-center pt-5"
      style={{ height: "100vh" }}
    >
      {isSuccess ? (
        <SuccesRegister />
      ) : (
        <InputFormRegister formRegister={formRegister} />
      )}
    </Container>
  );
}

function SuccesRegister() {
  return (
    <Alert variant="success">
      <Alert.Heading>Success!!!</Alert.Heading>
      <p>Herzlich Willkommen ...</p>
      <hr />
      <p className="mb-0">
        Jetzt konnen sie einfach anmelden und leckere Speise bestellen
      </p>
      <NavLink to="/">
        <Button className="mt-4 btn btn-success">OK</Button>
      </NavLink>
    </Alert>
  );
}

function InputFormRegister({ formRegister }) {
  return (
    <Form
      style={{ width: "70vw" }}
      className=" rounded p-4 shadow-lg"
      onSubmit={formRegister.handleSubmit}
    >
      {/* <h3 className="mb-3 text-center">Welcome To Register</h3> */}
      <Form.Group className="mb-3" controlId="formBasicFullname">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Fullname"
          {...formRegister.getFieldProps("fullName")}
        />
      </Form.Group>
      {formRegister.errors.fullName && formRegister.touched.fullName && (
        <div>{formRegister.errors.fullName}</div>
      )}

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          {...formRegister.getFieldProps("email")}
        />
      </Form.Group>
      {formRegister.errors.email && formRegister.touched.email && (
        <div>{formRegister.errors.email}</div>
      )}

      <Row>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter Password"
              {...formRegister.getFieldProps("password")}
            />
          </Form.Group>
          {formRegister.errors.password && formRegister.touched.password && (
            <div>{formRegister.errors.password}</div>
          )}
        </Col>
        <Col md={6}>
          <Form.Group className="mb-3" controlId="formBasicRepaetPassword">
            <Form.Label>Repeat Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter again Password"
              {...formRegister.getFieldProps("repeatPassword")}
            />
          </Form.Group>
          {formRegister.errors.repeatPassword &&
            formRegister.touched.repeatPassword && (
              <div>{formRegister.errors.repeatPassword}</div>
            )}
        </Col>
      </Row>

      <Row>
        <Col md={2}>
          <Form.Label htmlFor="selectCity">City</Form.Label>
          <Form.Select
            id="selectCity"
            aria-label="Default select example"
            {...formRegister.getFieldProps("city")}
          >
            <option value="-1">Plsae select City</option>
            <option value="Bremen">Bremen</option>
            <option value="Achim">Achim</option>
          </Form.Select>
          {formRegister.errors.city && formRegister.touched.city && (
            <div>{formRegister.errors.city}</div>
          )}
        </Col>
        <Col md={8}>
          <Form.Label htmlFor="inputStreet">Street</Form.Label>
          <Form.Control
            type="text"
            id="inputStreet"
            aria-describedby=""
            {...formRegister.getFieldProps("street")}
          />
          {formRegister.errors.street && formRegister.touched.street && (
            <div>{formRegister.errors.street}</div>
          )}
        </Col>
        <Col md={2}>
          <Form.Label htmlFor="inputZip">zip</Form.Label>
          <Form.Control
            type="text"
            id="inputZip"
            aria-describedby=""
            {...formRegister.getFieldProps("zip")}
          />
          {formRegister.errors.zip && formRegister.touched.zip && (
            <div>{formRegister.errors.zip}</div>
          )}
        </Col>

        <Form.Group className="my-4" controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="I agree with the rules"
            {...formRegister.getFieldProps("isRulesChecked")}
          />
        </Form.Group>
        {formRegister.errors.isRulesChecked &&
          formRegister.touched.isRulesChecked && (
            <div>{formRegister.errors.isRulesChecked}</div>
          )}
      </Row>
      <Button variant="primary" type="submit" className="mt-4">
        Submit
      </Button>
    </Form>
  );
}
