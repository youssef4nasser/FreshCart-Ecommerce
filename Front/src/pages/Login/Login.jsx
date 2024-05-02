import { Col, Container, Row } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Login() {
  return <>
  <section className="py-5">
    <Container>
      <h2>Login</h2>
      <Row className="justify-content-center border p-4 mt-4 rounded-2">
        <Col >
          <Form>
            <Form.Group controlId="formEmail" className="my-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter your email"
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
              />
            </Form.Group>

            <Button className="my-3 main-bg border-0"  type="button" block>
              Login
            </Button>
          </Form>
          <div className="d-flex justify-content-between">
          <span className="text-black-50 text-decoration-none">Don’t have account? <Link to={"/Register"} className="fw-bold text-black">Register</Link></span>
          <Link to={"/ForgotPassword"}>Forgot your password?</Link>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
</>
}
