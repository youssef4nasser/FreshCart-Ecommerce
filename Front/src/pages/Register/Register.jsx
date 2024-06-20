import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { registerUser, reset } from "../../Redux/authSlice.js";
import { toast } from "react-toastify";

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleRegister = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));
};

const {loading, error, isSuccess, user} = useSelector((store)=> store.auth)

useEffect(() => {
  if (isSuccess) {
    toast.success('Registration Successful')
    toast.success(user.confirmEmail)
    navigate('/Login')
  }

  if(error){
    toast.error(error)
  }

  dispatch(reset())

}, [error, isSuccess, user, navigate, dispatch])

  return <>
    <section className="py-5">
      <Container>
        <h2>Create Account</h2>
        <Row className="justify-content-center border p-3 mt-4 rounded-2">
          <Col>
            <Form>
              <Form.Group controlId="name" className="my-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formEmail" className="my-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formPassword" className="my-3">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button onClick={handleRegister} className="my-3 main-bg border-0" variant="primary" type="button" block>
                {loading ? <Spinner animation="border" variant="success" size="sm" disabled /> : "Register"}
              </Button>
            </Form>
            <span className="text-black-50">Already have account <Link to={"/Login"} className="fw-bold text-black">Login</Link></span>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}