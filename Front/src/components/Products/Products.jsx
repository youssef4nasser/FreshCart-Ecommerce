// import MdalShow from "../modal/ModalShow.jsx";
import { faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Col, Image, Stack, Row } from "react-bootstrap";
import { allProducts } from "../../../FakeData/allProducts.js";

function Products() {
  return <>
    <div>
        <Row className="g-4">
        {allProducts.map((ele,index)=>{
            return(
                <Col key={index} md={4} className="">
                    <div className="border border-hover position-relative">
                    <Link to={`/ProductDetails/${index}`}>
                        <Stack direction="vertical" className="py-3 cursor-pointer product-item">
                            <div>
                            <Image src={ele.imagesrc} alt='product' className="w-100"/>
                            <div className="position-absolute top-0 end-0 my-3 d-flex flex-column btn-add cursor-pointer">
                                <FontAwesomeIcon icon={faCartArrowDown} style={{color: "#ddd"}} size='lg' />
                                <FontAwesomeIcon className="p-3" icon={faHeart} style={{color: "#ddd"}} size='lg' />
                                {/* <MdalShow data={ele} /> */}
                            </div>
                            </div>
                            <div>
                            <h5 className="fw-bold mb-1 mt-2">{ele.name}</h5>
                            <h6 className="fw-bold mb-1">{ele.price}</h6>
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
                    </div>

                </Col>
        )})}
        </Row>
    </div>
  </>
}

export default Products