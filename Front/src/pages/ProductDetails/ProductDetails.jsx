import { faCartShopping, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Stack, Button, Image } from "react-bootstrap"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Product1 from "../../assets/Product1.jpeg"
import Product2 from "../../assets/Product2.jpeg"
import ProductTabs from "../../components/ProductTabs/ProductTabs.jsx";
import RelatedProduct from "../../components/RelatedProduct/RelatedProduct.jsx";
import { useState } from "react";

function ProductDetails() {
  const [productImg, setproductImg] = useState(Product1)
  const [productCount, setproductCount] = useState(1)

  return <>
  <section className="my-5">
    <Container>
      <Breadcrumb className="text-black-50 text-decoration-none">
        <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Shop">Shop</Breadcrumb.Item>
        <Breadcrumb.Item active>Single Product</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col xs={12} md={6}>
          <div className="border d-flex justify-content-center align-items-center">
            <Image src={productImg} height={500} alt="product image" />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className='ms-4'>
              <div>
                <h3 className="fw-bold my-3">Lorem ipsum small speaker</h3>
                <h6 className="fw-bold h4  my-3">$6.99</h6>
                <div>
                  <span className="fw-bold">
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                    <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                  </span>
                  <span className="ms-2">6 Reviews</span> <span className="border ms-2"></span>
                  <span className="ms-2">99 Sales</span> <span className="border ms-2"></span>
                  <span className="ms-2">250+ In Stock</span>
                </div>
                <p className='my-4 border-bottom pb-4'>
                  Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                  dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                  consectetur ac, vestibulum at eros.
                </p>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <div className='border  p-2'>
                  <Button onClick={()=>setproductCount(productCount+1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                  <span className='mx-2 text-black-50'>{productCount}</span>
                  <Button onClick={()=>setproductCount(productCount-1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                </div>
                <Button className='px-sm-5 py-2 rounded-5 main-bg border-0 mx-md-5 fw-bold'>Add to cart <FontAwesomeIcon className="" icon={faCartShopping} size='sm' /></Button>
                <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size='xl' style={{color: "#ddd"}} />
              </div>
              <span>Categories : Laptops</span>
          </div>
        </Col>

        <Col xs={12} lg={6}> 
            <Stack direction="horizontal" className="py-3 justify-content-between">
              <Image onClick={()=>setproductImg(Product1)} className="border cursor-pointer" fluid width={130} src={Product1} alt='Carousel Banner' />
              <Image onClick={()=>setproductImg(Product2)} className="border cursor-pointer" fluid width={130} src={Product2} alt='Carousel Banner' />
              <Image onClick={()=>setproductImg(Product1)} className="border cursor-pointer" fluid width={130} src={Product1} alt='Carousel Banner' />
              <Image onClick={()=>setproductImg(Product2)} className="border cursor-pointer" fluid width={130} src={Product2} alt='Carousel Banner' />
            </Stack>
        </Col>
      </Row>
      {/* Product Details */}
      <ProductTabs />
      {/* Related Products */}
      <RelatedProduct /> 
    </Container>
  </section>
  </>
}

export default ProductDetails