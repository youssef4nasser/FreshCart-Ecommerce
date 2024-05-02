import { Col, Container, Row } from "react-bootstrap";
import { Form, Button } from 'react-bootstrap';
import { Link } from "react-router-dom";

export default function Register() {
  return <>
    <section className="py-5">
      <Container>
        <h2>Create Account</h2>
        <Row className="justify-content-center border p-3 mt-4 rounded-2">
          <Col >
            <Form>
              <Form.Group controlId="name" className="my-3">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter your first name"
                />
              </Form.Group>

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

              <Button className="my-3 main-bg border-0" variant="primary" type="button" block>
                Register
              </Button>
            </Form>
            <span className="text-black-50">Already have account <Link to={"/Login"} className="fw-bold text-black">Login</Link></span>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}