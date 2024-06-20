import { faArrowRight, faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import MdalShow from "../modal/ModalShow.jsx";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/produtsSlice.js";

export default function TopSelling() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let {products} = useSelector((store)=> store.allProduts)

  return <>
   <section className="bg-body-tertiary py-5">
    <Container>
      <Row className="g-4">
      <Col md={12}>
          <Stack direction="horizontal" className="justify-content-between mb-4">
            <h2>Top Selling Products</h2>
            <Link className="main-color text-decoration-none"to={"/shop"}>View All <FontAwesomeIcon icon={faArrowRight} /></Link>
          </Stack>
      </Col>
      {products.map((item)=>{
          return(
            <Col key={item._id} md={6}>
              <div className="p-3 h-100 border rounded-3 shadow-sm cursor-pointer product-item bg-white border-hover">
                <Stack direction="horizontal" className="justify-content-between">
                  <Link to={`shop/ProductDetails/${item._id}`}>
                    <div className="d-flex align-items-center">
                      <Image
                        src={item?.images[0].secure_url}
                        alt="product"
                        width={150}
                        height={130}
                        className="img-fluid rounded"
                      />
                    </div>
                  </Link>
                  <div className="ms-3 flex-grow-1">
                    <Link to={`shop/ProductDetails/${item._id}`}>

                      <h5 className="fw-bold mb-1">{item.name}</h5>
                      <h6 className="fw-bold mb-1 text-success">${item.price}</h6>
                      <div className="d-flex my-3">
                        {[...Array(5)].map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`me-1 ${i < 4 ? 'text-warning' : 'text-secondary'}`}
                          />
                        ))}
                      </div>
                    </Link>
                    <div className="d-flex justify-content-around">
                      <Button variant="light">
                          <FontAwesomeIcon icon={faCartArrowDown} className="text-secondary" />
                      </Button>
                      <Button variant="light">
                          <FontAwesomeIcon icon={faHeart} className="text-secondary" />
                      </Button>
                      <Button variant="light">
                          <MdalShow data={item} />
                      </Button>
                    </div>
                  </div>
                </Stack>
              </div>
            </Col>
          )
        })}
      </Row>
    </Container>
   </section>
  </>
}
