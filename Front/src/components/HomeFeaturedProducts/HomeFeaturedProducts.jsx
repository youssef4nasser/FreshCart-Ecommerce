import { faArrowRight, faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { productsData } from "../../../FakeData/featuredProducts.js";
import MdalShow from "../modal/ModalShow.jsx";

export default function HomeFeaturedProducts() {
  return <>
  <section className="py-5">
    <Container>
      <Row>
        <Col md={12}>
          <Stack direction="horizontal" className="justify-content-between mb-4">
            <h2>Featured Products</h2>
            <Link className="main-color text-decoration-none" href="/categories">View All <FontAwesomeIcon icon={faArrowRight} /></Link>
          </Stack>
        </Col>
        {productsData.map((item, index)=>{
          return(
            <Col key={index} xs={6} lg={3} className="border border-hover position-relative">
              <Link to={`ProductDetails/${index}`}>
                <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                <div>
                  <Image src={item.imagesrc} alt='product' className="w-100"/>
                  <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                    <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                    <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                    <MdalShow data={item} />
                  </div>
                </div>
                <div>
                  <h5 className="fw-bold mb-1 mt-2">{item.name}</h5>
                  <h6 className="fw-bold mb-1">{item.price}</h6>
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
          )
        })}
      </Row>
    </Container>
  </section>
  </>
}
