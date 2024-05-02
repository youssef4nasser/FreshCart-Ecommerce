// import * as style from "./Featured.styled.js"
import { faHeadset, faMoneyCheckDollar, faTruckFast } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Row } from "react-bootstrap";

export default function HomeFeatured() {
  return <>
  
  <section className="bg-body-tertiary py-5">
    <Container>  {/* shadow-sm p-3 */}
      <Row>
        <Col md={4}>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faTruckFast} size="2xl" style={{color: "#21b421"}} />
            <h5 className="pt-3">free Shipping</h5>
            <p className="lead text-muted">Free shipping on all your order.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faHeadset} size="2xl" style={{color: "#21b421"}} />
            <h5 className="pt-3">Customer Support 24/7</h5>
            <p className="lead text-muted">Instant access to Support.</p>
          </div>
        </Col>
        <Col md={4}>
          <div className="text-center d-flex flex-column justify-content-center align-items-center">
            <FontAwesomeIcon icon={faMoneyCheckDollar} size="2xl" style={{color: "#21b421"}}  />
            <h5 className="pt-3">100% Secure Payment</h5>
            <p className="lead text-muted">We ensure your money is save.</p>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}
