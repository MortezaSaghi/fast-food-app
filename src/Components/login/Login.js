import "./Login.css";
import { useFormik } from "formik";

import * as Yup from "yup";
import { Modal, Button, Form } from "react-bootstrap";

import { validatedUser } from "../../data/users";

import { NavLink } from "react-router-dom";

export default function Login({ showlogin, setIslogin, setDataUserlogin }) {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters or more")
        .required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),

    onSubmit: (values) => {
      const request = validatedUser(values.email, values.password);

      if (request !== undefined) {
        setDataUserlogin(values);
        setIslogin((pre) => true);
        showlogin();
      } else {
        console.log("invalid password");
      }
      formik.handleReset();
    },
  });
  return (
    <Modal show={showlogin} onHide={showlogin}>
      <Modal.Header closeButton>
        <Modal.Title className="fw-bold ms-2 text-primary">Login</Modal.Title>
      </Modal.Header>
      <Form className="m-4 " onSubmit={formik.handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            {...formik.getFieldProps('email')}
            
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            {formik.touched.email && formik.errors.email ? (
              <div className="text-danger">{formik.errors.email}</div>
            ) : (
              ""
            )}
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            {...formik.getFieldProps('password')}
          />
          {formik.touched.password && formik.errors.password ? (
            <Form.Text className="text-danger">
              {formik.errors.password}
            </Form.Text>
          ) : (
            ""
          )}
        </Form.Group>

        <Button variant="primary" type="submit" className="mt-4">
          Login
        </Button>
        <NavLink to='/register'>
        <Button variant="primary" onClick={showlogin} className="mt-4 ms-4">
              Register Me
          </Button>
        </NavLink>
        
        
      </Form>
    </Modal>
  );
}

// import {BiLogOut,BiLogIn} from 'react-icons/bi'

// export default function Login({islogin,toggleLog}) {
//   return (
//     <>
//         {
//             islogin ? <BiLogOut className='btn-logout' onClick={toggleLog}/>
//                     : <BiLogIn className='btn-login' onClick={toggleLog}/>
//         }

//     </>
//   )
// }
