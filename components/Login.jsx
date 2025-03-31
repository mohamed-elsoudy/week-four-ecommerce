import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { login } from '../src/store/explore-our-products/auth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
    return (
    <div className="login d-flex flex-wrap align-items-center">
        <img src="/imgs/Side Image.png" alt="" className="log-img" />
        <Form className="login-field">
          <h2 className="fs-1 fw-medium">Log in to Exclusive</h2>
          <p className="mt-2 fs-6">Enter your details below</p>
          <Form.Group className="mb-4 mt-5 main-border-bottom" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Email or Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3 main-border-bottom" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>

          <div className="mt-4 d-flex justify-content-between align-items-center">
          <Button variant="danger" className="px-5 py-3" type="submit" onClick={() => {
            if(emailRef.current.value != "" && passwordRef.current.value != "") {
              dispatch(login({ id: 1, name: "Md Rimel" }));
              navigate("/");
            }
          }}>
            Login
          </Button>
          <span className="d-inline-block txt-orange fs-6">Forgot You password?</span>
          </div>
        </Form>
      </div>
    );
}

export default Login;