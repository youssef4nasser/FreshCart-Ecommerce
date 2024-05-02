import {Container, Row, Breadcrumb} from "react-bootstrap"
import Filter from "../../components/Filter/Filter.jsx"
import { Col } from "react-bootstrap";
import Products from "../../components/Products/Products.jsx";

function Shop() {
  return <>
  <section className="my-5">
    <Container>
        <Breadcrumb className="text-black-50 text-decoration-none">
            <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
        <Row >
            <Col md={3}>
                <aside>
                    <Filter />
                </aside>
            </Col>

            <Col md={9} >
                <Products />
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default Shop