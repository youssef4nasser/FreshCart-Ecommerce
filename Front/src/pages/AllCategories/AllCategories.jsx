import { useEffect } from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCategories } from "../../Redux/categorySlice.js";
import { useDispatch, useSelector } from "react-redux";

function AllCategories() {

    let {categories} = useSelector((store)=> store.categories)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(getCategories())
    }, [])
    
  return (
<Container className="py-5">
      <Row className="align-items-center">
        <Col md={3} className="mb-4">
          <h2 className="h1 main-text">Our <span className="main-color">Categories</span></h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium?</p>
        </Col> 
        {categories.map((Category) => (
          <Col key={Category._id} xs={6}  md={4} lg={3} className="mb-4">
            <Link to={`/shop`} className="text-decoration-none">
              <Stack direction="vertical" className="align-items-center cursor-pointer main-hover rounded-2">
                <Image src={Category.image.secure_url} alt={Category.name} width={200} className="rounded" />
                <h6 className="text-center mt-3">{Category.name}</h6>
              </Stack>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default AllCategories