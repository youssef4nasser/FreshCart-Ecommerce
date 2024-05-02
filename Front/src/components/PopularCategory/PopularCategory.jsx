import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";
import CategoryImage from "../../assets/CategoryImage.png"
import CategoryImage1 from "../../assets/CategoryImage1.png"
import CategoryImage2 from "../../assets/CategoryImage2.png"
import CategoryImage3 from "../../assets/CategoryImage3.png"
import CategoryImage4 from "../../assets/CategoryImage4.png"
import CategoryImage5 from "../../assets/CategoryImage5.png"
import styles from "./PopularCategory.module.css"

export default function PopularCategory() {
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
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Accessories</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage1} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Smart TVs</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage3} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Smartwatches</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage4} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Headphones</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage5} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Laptops</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={CategoryImage2} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Mobiles & Tablets</h4>
          </Stack>
        </Col>
        {/* <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col>
        <Col xs={4} lg={2}>
          <Stack direction="vertical" className="text-center cursor-pointer  main-hover rounded-2">
            <Image src={imgCategory} alt='category' />
            <h4 className={`${styles.fss} mt-3`}>Category</h4>
          </Stack>
        </Col> */}
      </Row>
    </Container>
  </section>
  </>
}
