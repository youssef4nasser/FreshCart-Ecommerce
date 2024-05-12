import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./PopularCategory.module.css"
import axios from "axios";
import { useEffect, useState } from "react";

export default function PopularCategory() {
  const [categoryList, setCategoryList] = useState([]);
  // Fetch data from backend when component is mounted
  const getCategories = async ()=>{
    const res = await axios.get('/api/api/v1/categories');
    if (res.data.category){
      setCategoryList(res.data.category);
    } else {
      alert('Failed to load category list!')
    }
  }
  
  useEffect(() => {
    getCategories()
  }, [])
  
  return <>
  <section className="py-5">
    <Container>
      <Row className="gy-4">
        <Col md={12}>
          <Stack direction="horizontal" className="justify-content-between">
            <h2>Popular Category</h2>
            <Link className="main-color text-decoration-none" href="/categories">View All <FontAwesomeIcon icon={faArrowRight} /></Link>
          </Stack>
        </Col>
        {categoryList.map((item)=>{ 
          return <Col key={item._id} xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={item.image.secure_url} alt={item.name} width={165} />
            <h4 className={`${styles.fss} mt-3`}>{item.name}</h4>
          </Stack>
        </Col> 
        })}
      </Row>
    </Container>
  </section>
  </>
}
