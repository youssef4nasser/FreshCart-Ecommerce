import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Image, Row, Stack } from "react-bootstrap"
import Hot1 from "../../assets/Hot1.png"
import Hot2 from "../../assets/Hot2.png"
import Hot3 from "../../assets/Hot3.png"
import Hot4 from "../../assets/Hot4.png"
import Hot5 from "../../assets/Product5.webp"

export default function HomeHotDeals() {
  return <>
  <section className="py-5">
    <Container>
      <Row className="mt-5">
        <Col lg={4}>
          <h4>Hot Deals</h4>
          <Stack direction="horizontal" className="product-item mt-3 p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot3} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot4} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot3} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <h4>Top Rated</h4>
          <Stack direction="horizontal" className="product-item mt-3 p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot2} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot1} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot5} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
        </Col>
        <Col lg={4}>
          <h4>Newest Products</h4>
          <Stack direction="horizontal" className="product-item mt-3 p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot4} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot3} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
          <Stack direction="horizontal" className="product-item p-1 border cursor-pointer border-hover mb-4">
            <div>
              <Image className="w-img" src={Hot2} alt='product'/>
            </div>
            <div>
              <h6 className="fw-bold mb-1 mt-2">iPhone XR (Space Gray)</h6>
              <h6 className="fw-bold mb-1">$999.99</h6>
              <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
              </span>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  </section>
  </>
}
