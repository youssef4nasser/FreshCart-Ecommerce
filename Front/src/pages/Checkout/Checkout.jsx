import { Breadcrumb, Button, Card, Col, Container,Form, ListGroup, Row } from "react-bootstrap"

function Checkout() {
  return <>
    <section className="my-5">
        <Container>
            <Breadcrumb className="text-black-50 text-decoration-none">
                <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="mb-5 fw-bold text-center">Checkout</h2>
            <Row className="mt-4">
                <Col sm={8} className="mb-4 mb-lg-0">
                    <Form>
                        <div className="p-3 p-lg-4 bg-white rounded shadow-sm border-2 mb-4 border">
                            <h5 className="fw-bold mb-4">Contact Infomation</h5>
                            <Form.Group className="mb-3" controlId="FirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter First Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="LastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter Last Name" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="phone">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="number" placeholder="Enter Phone Number" />
                            </Form.Group>
                        </div>
                        <div className="p-3 p-lg-4 bg-white rounded shadow-sm border-2 mb-4 border">
                            <h5 className="fw-bold mb-4">Shipping Address</h5>
                            <Form.Group className="mb-3" controlId="formGridAddress">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridState">
                            <Form.Label>State</Form.Label>
                                <Form.Control placeholder="State" />
                            </Form.Group>
                        </div>
                        <div className="p-3 p-lg-4 bg-white rounded shadow-sm border-2 mb-4 border">
                            <h5 className="fw-bold mb-4">Payment method</h5>
                            <Form.Group as="fieldset" className="mb-3">
                                <Form.Check
                                        type="radio"
                                        label="Cash on Delivery"
                                        name="paymentMethod"
                                        id="cashOnDelivery"
                                    />
                                    <Form.Check
                                        type="radio"
                                        label="Credit/Debit Cards"
                                        name="paymentMethod"
                                        id="creditDebitCards"
                                    />
                            </Form.Group>
                            <Button className="main-bg border-0" type="submit">
                                Place Order Now
                            </Button>
                        </div>
                    </Form>
                </Col>
                {/* Order Summary */}
                <Col sm={4}>
                    <Card bg="light" className="mb-4 shadow-sm">
                        <Card.Body>
                            <Card.Title>Order summary</Card.Title>
                            <hr/>
                            <Row className="gy-3">
                                <Col md={12} className="py-1">
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <h5 className="font-weight-normal">Product</h5>
                                        <h5 className="font-weight-normal">$Total</h5>
                                    </div>
                                </Col>
                                <Col md={12} className="py-1">
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <h6 className="text-muted font-weight-normal">Apple Watch <span className="fw-bold text-dark text-opacity-50">x1</span></h6>
                                        <h6>$75</h6>
                                    </div>
                                </Col>
                                <Col md={12} className="py-1">
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <h6 className="text-muted font-weight-normal">Apple Watch <span className="fw-bold text-dark text-opacity-50">x3</span></h6>
                                        <h6>$75</h6>
                                    </div>
                                </Col>
                                <Col md={12} className="py-1">
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <h6 className="text-muted font-weight-normal">Apple Watch <span className="fw-bold text-dark text-opacity-50">x5</span></h6>
                                        <h6>$75</h6>
                                    </div>
                                </Col>
                                <Col md={12} className="py-1">
                                    <div className=" d-flex justify-content-between align-items-center">
                                        <h6 className="text-muted font-weight-normal">Apple Watch <span className="fw-bold text-dark text-opacity-50">x1</span></h6>
                                        <h6>$75</h6>
                                    </div>
                                </Col>
                            </Row>
                        </Card.Body>
                        <ListGroup variant="flush">
                            <ListGroup.Item className="d-flex justify-content-between"><span>Subtotal:</span> <span>$900.00</span></ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between"><span>Shipping:</span> <span>$80.00</span></ListGroup.Item>
                            <ListGroup.Item className="d-flex justify-content-between"><span>Total:</span> <span>$980.00</span></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </Container>
    </section>
  </>
}

export default Checkout