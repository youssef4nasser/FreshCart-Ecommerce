import { Col, Container, Image, Row } from "react-bootstrap";
import notFound from "../../assets/NotFound.png"
import { Link } from "react-router-dom";
export default function NotFound() {
  return <>
  <section className="py-5">
    <Container>
      <Row>
        <Col className="text-center" >
          <Image src={notFound} alt='notFound' className="img-fluid"/>
          <h2 className="my-3">Oops! page not found</h2>
          <p className="mb-4">Ut consequat ac tortor eu vehicula. Aenean accumsan purus eros.<br /> Maecenas sagittis tortor at metus mollis</p>
          <Link to={"/"} className="main-bg py-2 px-4 rounded-5 text-decoration-none text-white">Back to Home</Link>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}
