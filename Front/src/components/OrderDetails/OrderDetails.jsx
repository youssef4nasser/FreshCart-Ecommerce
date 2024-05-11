import { Card, ListGroup } from "react-bootstrap"
import { Image, Table } from "react-bootstrap"
import Product1 from "../../assets/Product1.jpeg"
import Product2 from "../../assets/Product2.jpeg"
import Product3 from "../../assets/Product3.jpeg"

function OrderDetails() {
  return <>
    <div className="d-flex justify-content-between ">
        <Card bg="light" className="mb-4 shadow-sm mx-2 w-100">
            <Card.Body>
                <Card.Title>Shipping Address</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between"><span>Address:</span> <span>1234 Main St</span></ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between"><span>City:</span> <span>Giza</span></ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between"><span>State:</span> <span>Giza</span></ListGroup.Item>
            </ListGroup>
        </Card>
        <Card bg="light" className="mb-4 shadow-sm mx-2 w-100">
            <Card.Body>
                <Card.Title>Order ID: #4152</Card.Title>
            </Card.Body>
            <ListGroup variant="flush">
                <ListGroup.Item className="d-flex justify-content-between"><span>Subtotal:</span> <span>$900.00</span></ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between"><span>Shipping:</span> <span>$80.00</span></ListGroup.Item>
                <ListGroup.Item className="d-flex justify-content-between"><span>Total:</span> <span>$980.00</span></ListGroup.Item>
            </ListGroup>
        </Card>
    </div>
    <div className="mt-4">
        <Table striped bordered hover responsive className="table-sm table-responsive-md">
            <thead>
                <tr className="text-center">
                    <th>Imgae</th>
                    <th>Name</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody className="text-center">
                <tr>
                    <td>
                        <Image src={Product2} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a2</span>
                    </td>
                    <td className="py-5">299$</td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product1} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a1</span>
                    </td>
                    <td className="py-5">199$</td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product3} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a3</span>
                    </td>
                    <td className="py-5">399$</td>
                </tr>
                <tr>
                    <td>
                        <Image src={Product2} alt="Wishlist" width={90}   />
                    </td>
                    <td className="py-5">
                        <span>Product Name a2</span>
                    </td>
                    <td className="py-5">299$</td>
                </tr>
            </tbody>
        </Table>
    </div>
  </>
}

export default OrderDetails