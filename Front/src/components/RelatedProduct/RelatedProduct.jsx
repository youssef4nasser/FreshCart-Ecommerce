import { faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Container, Row, Col, Button, Card} from "react-bootstrap"
import { Link } from "react-router-dom"
// import MdalShow from "../modal/ModalShow.jsx"

function RelatedProduct() {

  return <>
  <section className="my-4">
    <Container>
        <Row className="g-4">
            <Col md={12} >
              <h2 className="py-2 text-capitalize fw-bold">Related Products</h2>
            </Col>
            {/* {product.slice(0, 4).map((item, index)=>{ */}
              return(
                <Col xs={12} sm={6} lg={3}>
                    <Card className="h-100 shadow-sm product-item border-hover">
                        <Link 
                        // to={`/shop/ProductDetails/${item._id}`}
                         className="text-decoration-none text-dark">
                            <Card.Img variant="top" src={"item?.images[0].secure_url"} alt='product' />
                            <Card.Body className="d-flex flex-column">
                                <Card.Title className="h6 fw-bold">{"item.name"}</Card.Title>
                                <Card.Text className="fw-bold main-color">${"item.price"}</Card.Text>
                                <div className="d-flex justify-content-start my-2">
                                    {[...Array(5)].map((star, i) => (
                                        <FontAwesomeIcon
                                            key={i}
                                            icon={faStar}
                                            className={`me-1 ${i < 4 ? "text-warning" : "text-secondary"}`}
                                        />
                                    ))}
                                </div>
                            </Card.Body>
                        </Link>
                        <Card.Footer className="bg-white border-0">
                            <div className="d-flex justify-content-around">
                                <Button variant="light">
                                    <FontAwesomeIcon icon={faCartArrowDown} className="text-secondary" />
                                </Button>
                                <Button variant="light">
                                    <FontAwesomeIcon icon={faHeart} className="text-secondary" />
                                </Button>
                                <Button variant="light">
                                    {/* <MdalShow data={item} /> */}
                                </Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
              )
            {/* })} */}
        </Row>
    </Container>
  </section>
  </>
}

export default RelatedProduct