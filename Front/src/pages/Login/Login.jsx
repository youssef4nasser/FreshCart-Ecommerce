import { useEffect, useState } from "react";
import { Col, Container, Row, Spinner} from "react-bootstrap";
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { login, reset } from "../../Redux/authSlice.js";
import { toast } from 'react-toastify';

export default function Login() {
  const [email, setemail] = useState(null)
  const [password, setpassword] = useState(null)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = (e)=>{
    e.preventDefault();
    dispatch(login({email, password}))
  }

  const {loading, error, isSuccess, user} = useSelector((store)=> store.auth)

  useEffect(() => {
    if (isSuccess) {
      toast.success('you have logged in Successfully') 
      localStorage.setItem("userInfo", JSON.stringify(user));
      navigate('/')
    }
    
    if (error){
      toast.error(error)
    }

    dispatch(reset())
    
  }, [ error, isSuccess, user, navigate, dispatch])

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
                value={email}
                onChange={(e)=> setemail(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formPassword" className="my-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=> setpassword(e.target.value)}
              />
            </Form.Group>

            <Button onClick={handleLogin}
              className="my-3 main-bg border-0"  type="button" block>
              {loading ? <Spinner animation="border" variant="success" size="sm" disabled /> : "Login"}
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
