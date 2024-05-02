import {Container, Row, Col, Breadcrumb, Table, Image, Button, Card, ListGroup, InputGroup, FormControl} from "react-bootstrap"
import Product1 from "../../assets/Product1.jpeg"
import Product2 from "../../assets/Product2.jpeg"
import Product3 from "../../assets/Product3.jpeg"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

function Cart() {
    const [productCount, setproductCount] = useState(1)

  return <>
  <section className="my-5">
    <Container>
        <Breadcrumb className="text-black-50 text-decoration-none">
            <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Cart</Breadcrumb.Item>
        </Breadcrumb>
        <h2 className="mb-5 fw-bold text-center">Cart</h2>
        <Row className="justify-content-center mt-4">
            <Col xs={8}>
                <Table   hover >
                    <thead>
                        <tr  className="bg-info text-center">
                        <th>Imgae</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Total</th>
                        <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        <tr>
                            <td>
                                <Image src={Product2} alt="Cart" width={90}   />
                            </td>
                            <td className="py-5">
                                <span>Product Name a2</span>
                            </td>
                            <td className="py-5">299$</td>
                            <td className="py-5">
                                <div className='border  p-2'>
                                    <Button onClick={()=>setproductCount(productCount+1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                                    <span className='mx-2 text-black-50'>{productCount}</span>
                                    <Button onClick={()=>setproductCount(productCount-1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                                </div>
                            </td>
                            <td className="py-5">999.00$</td>
                            <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                        </tr>
                        <tr>
                            <td>
                                <Image src={Product1} alt="Cart" width={90}   />
                            </td>
                            <td className="py-5">
                                <span>Product Name a1</span>
                            </td>
                            <td className="py-5">199$</td>
                            <td className="py-5">
                                <div className='border  p-2'>
                                    <Button onClick={()=>setproductCount(productCount+1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                                    <span className='mx-2 text-black-50'>{productCount}</span>
                                    <Button onClick={()=>setproductCount(productCount-1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                                </div>
                            </td>
                            <td className="py-5">999.00$</td>
                            <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                        </tr>
                        <tr>
                            <td>
                                <Image src={Product3} alt="Cart" width={90}   />
                            </td>
                            <td className="py-5">
                                <span>Product Name a3</span>
                            </td>
                            <td className="py-5">399$</td>
                            <td className="py-5">
                                <div className='border  p-2'>
                                    <Button onClick={()=>setproductCount(productCount+1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                                    <span className='mx-2 text-black-50'>{productCount}</span>
                                    <Button onClick={()=>setproductCount(productCount-1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                                </div>
                            </td>
                            <td className="py-5">999.00$</td>
                            <td className="py-5"><FontAwesomeIcon className="cursor-pointer"  icon={faXmark} size="lg" /></td>
                        </tr>
                    </tbody>
                </Table>
            </Col>
            {/* Cart Summary */}
            <Col xs={12} sm={4}>
                <Card bg="light" className="mb-4 shadow-sm">
                    <Card.Body>
                        <Card.Title>Cart summary</Card.Title>
                    </Card.Body>
                    <ListGroup variant="flush">
                        <ListGroup.Item className="d-flex justify-content-between"><span>Subtotal:</span> <span>$900.00</span></ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between"><span>Shipping:</span> <span>$80.00</span></ListGroup.Item>
                        <ListGroup.Item className="d-flex justify-content-between"><span>Total:</span> <span>$980.00</span></ListGroup.Item>
                    </ListGroup>
                </Card>
                {/* Discount code */}
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <InputGroup className="grow">
                        <FormControl className="p-2" placeholder="Enter your discount code" aria-label="Discount Code" />
                        <Button variant="outline-secondary">Apply</Button>
                    </InputGroup>
                </div>
                <Button className="main-bg border-0 fsp" block size="lg" type="submit">Checkout</Button>
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default Cart