import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import filter from "../../assets/filter.png";
import Enjoy from "../../assets/Enjoy.png";
import Fast from "../../assets/Fast.png";
import bag from "../../assets/bag.png";

export default function HomeNumbers() {
  return <>
    <section className="bg-body-tertiary py-5 text-center">
      <Container>
        <Row>
          <Col sm={6} lg={3}>
            <Stack className="">
              <div className="my-4">
                <Image fluid width={140} className="rounded-5" src={filter} alt="" />
              </div>
              <div className="text-center">
              <span className="bg-danger my-4 p-1 rounded-3">Step 1</span>
              <h4 className="my-4 fw-bold">Filter & Discover</h4>
              <p className="my-2">Smart filtering and suggestions make it easy to find</p>
              </div>
            </Stack>
          </Col>
          <Col sm={6} lg={3}>
            <Stack className="">
              <div className="my-4">
                <Image fluid width={140} className="rounded-5" src={bag} alt="" />
              </div>
              <div className="text-center">
                <span className="bg-primary my-4 p-1 rounded-3">Step 2</span>
                <h4 className="my-4 fw-bold">Add to bag</h4>
                <p className="my-2">Easily select the correct items and add them to the cart</p>
              </div>
            </Stack>
          </Col>
          <Col sm={6} lg={3}>
            <Stack className="">
              <div className="my-4">
                <Image fluid width={140} className="rounded-5" src={Fast} alt="" />
              </div>
              <div className="text-center">
                <span className="bg-success my-4 p-1 rounded-3">Step 3</span>
              <h4 className="my-4 fw-bold">Fast shipping</h4>
              <p className="my-2">The carrier will confirm and ship quickly to you</p>
              </div>
            </Stack>
          </Col>
          <Col sm={6} lg={3}>
            <Stack className="">
              <div className="my-4">
                <Image fluid width={140} className="rounded-5" src={Enjoy} alt="" />
              </div>
              <div className="text-center">
                <span className="bg-info my-4 p-1 rounded-3">Step 4</span>
              <h4 className="my-4 fw-bold">Enjoy the product</h4>
              <p className="my-2">Have fun and enjoy your 5-star quality products</p>
              </div>
            </Stack>
          </Col>
        </Row>
      </Container>
    </section>
  </>
}
