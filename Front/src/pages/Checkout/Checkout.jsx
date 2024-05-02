import { Breadcrumb, Button, Container,Form } from "react-bootstrap"

function Checkout() {
  return <>
    <section className="my-5">
        <Container>
            <Breadcrumb className="text-black-50 text-decoration-none">
                <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Checkout</Breadcrumb.Item>
            </Breadcrumb>
            <h2 className="mb-5 fw-bold text-center">Checkout</h2>
            <div className="row justify-content-around align-items-start">
                <div className="col-12 col-md-6 mb-4 mb-lg-0">
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
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control placeholder="1234 Main St" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control placeholder="City" />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formGridCity">
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
                </div>
            </div>
        </Container>
    </section>
  </>
}

export default Checkout