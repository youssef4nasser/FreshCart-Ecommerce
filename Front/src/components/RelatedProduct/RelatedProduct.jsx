import { faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Container, Row, Col, Stack, Image} from "react-bootstrap"
import { Link } from "react-router-dom"
// import MdalShow from "../modal/ModalShow.jsx"
import imagesrc from "../../assets/Product1.jpeg"

function RelatedProduct() {
  return <>
  <section className="my-4">
    <Container>
        <Row>
            <Col md={12} >
            <h2 className="py-3 text-capitalize fw-bold">Related Products</h2>
            </Col>
            <Col xs={6} lg={3} className="border border-hover position-relative">
              <Link to={`ProductDetails/1`} className="text-black text-decoration-none">
                <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                <div>
                  <Image src={imagesrc} alt='product' className="w-100"/>
                  <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                    <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                    <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                    {/* <MdalShow data={item} /> */}
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 mt-2">Product Name</h5>
                  <h6 className="fw-bold mb-1">item price</h6>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                  </span>
                </div>
                </Stack>
              </Link>
            </Col>
            <Col xs={6} lg={3} className="border border-hover position-relative">
              <Link to={`ProductDetails/1`} className="text-black text-decoration-none">
                <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                <div>
                  <Image src={imagesrc} alt='product' className="w-100"/>
                  <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                    <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                    <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                    {/* <MdalShow data={item} /> */}
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 mt-2">Product Name</h5>
                  <h6 className="fw-bold mb-1">item price</h6>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                  </span>
                </div>
                </Stack>
              </Link>
            </Col>
            <Col xs={6} lg={3} className="border border-hover position-relative">
              <Link to={`ProductDetails/1`} className="text-black text-decoration-none">
                <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                <div>
                  <Image src={imagesrc} alt='product' className="w-100"/>
                  <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                    <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                    <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                    {/* <MdalShow data={item} /> */}
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 mt-2">Product Name</h5>
                  <h6 className="fw-bold mb-1">item price</h6>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                  </span>
                </div>
                </Stack>
              </Link>
            </Col>
            <Col xs={6} lg={3} className="border border-hover position-relative">
              <Link to={`ProductDetails/1`} className="text-black text-decoration-none">
                <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                <div>
                  <Image src={imagesrc} alt='product' className="w-100"/>
                  <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                    <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                    <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                    {/* <MdalShow data={item} /> */}
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 mt-2">Product Name</h5>
                  <h6 className="fw-bold mb-1">item price</h6>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                  </span>
                </div>
                </Stack>
              </Link>
            </Col>
        </Row>
    </Container>
  </section>
  </>
}

export default RelatedProduct