import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../src/store/explore-our-products/auth';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
function Signup() {
  const dispatch = useDispatch();
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
    return (
    <div className="signup d-flex flex-wrap align-items-center">
        <img src="../public/imgs/Side Image.png" alt="" className="log-img" />
        <Form className="login-field">
          <h2 className="fs-1 fw-medium">Create an account</h2>
          <p className="mt-2 fs-6">Enter your details below</p>

          <Form.Group className="mb-4 mt-5 main-border-bottom" controlId="formBasicName">
            <Form.Control ref={nameRef} type="email" placeholder="Name" />
          </Form.Group>

          <Form.Group className="mb-4 mt-4 main-border-bottom" controlId="formBasicEmail">
            <Form.Control ref={emailRef} type="email" placeholder="Email or Phone Number" />
          </Form.Group>

          <Form.Group className="mb-3 mt-4 main-border-bottom" controlId="formBasicPassword">
            <Form.Control ref={passwordRef} type="password" placeholder="Password" />
          </Form.Group>
          <div className="mt-5 d-flex flex-column gap-3">
            <Button variant="danger" className="px-5 py-3 w-100" type="submit" onClick={() => {
            if(emailRef.current.value != "" && passwordRef.current.value != "" && nameRef.current.value != "") {
              dispatch(login({ id: 1, name: "Md Rimel" }));
              navigate("/");
            }
            }}>
              Create Account
            </Button>
            <Button variant="white" className="px-5 py-3 main-border">
              <img src="../public/imgs/Icon-Google.png" width={24} height={24} className='me-2' alt="" />
              Sign up with Google
            </Button>
            <span className='text-center txt-grey fs-16 fw-normal'>Already have account? <Link to="/login" className='text-dark main-border-bottom pb-1 ps-1 fs-16 fw-semibold'>Login</Link></span>
          </div>
        </Form>
      </div>
    );
}

export default Signup;