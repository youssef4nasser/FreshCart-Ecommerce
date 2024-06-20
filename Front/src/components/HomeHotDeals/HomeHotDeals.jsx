import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Col, Container, Image, Row, Stack } from "react-bootstrap"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getAllProducts } from "../../Redux/produtsSlice.js"

export default function HomeHotDeals() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  let {products} = useSelector((store)=> store.allProduts)

  return (
    <section className="py-5">
      <Container>
        <Row className="mt-5">
          {['Hot Deals', 'Top Rated', 'Newest Products'].map((category, idx) => (
            <Col lg={4} key={idx}>
              <h4>{category}</h4>
              {products.slice(idx * 3, idx * 3 + 3).map((product) => (
                  <Link key={product._id} to={`shop/ProductDetails/${product._id}`}>
                    <Stack direction="horizontal" className="product-item mt-3 p-3 border cursor-pointer border-hover rounded-3 shadow-sm mb-4" key={product._id}>
                      <Image className="w-img rounded" src={product.images[0].secure_url} alt="product" width={100} height={100} />
                      <div className="ms-3">
                        <h6 className="fw-bold mb-1">{product.name}</h6>
                        <h6 className="fw-bold mb-1 text-success">${product.price}</h6>
                        <div className="d-flex">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon key={i} icon={faStar} className={`me-1 ${i < 4 ? 'text-warning' : 'text-secondary'}`} />
                          ))}
                        </div>
                      </div>
                    </Stack>
                  </Link>
              ))}
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}