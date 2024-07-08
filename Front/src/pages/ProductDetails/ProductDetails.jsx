import { faCartShopping, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col, Stack, Button, Image } from "react-bootstrap"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import ProductTabs from "../../components/ProductTabs/ProductTabs.jsx";
// import RelatedProduct from "../../components/RelatedProduct/RelatedProduct.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../../Redux/produtDetailsSlice.js";
import { addToCart, resetIsSuccess } from "../../Redux/cartSlice.js";
import { toast } from "react-toastify";

function ProductDetails() {
  const params = useParams();
  const dispatch = useDispatch()
  const [productImg, setproductImg] = useState(null)
  const [productCount, setproductCount] = useState(1)

  let {product, loading} = useSelector((store)=> store.produtDetails)

  useEffect(() => {
    dispatch(getProductDetails(params.id));
  }, []);

  let { isSuccess, error } = useSelector((store) => store.cart)
  const [isAddToCartCalled, setIsAddToCartCalled] = useState(false);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
    setIsAddToCartCalled(true);
  };

  useEffect(() => {
    if (isSuccess && isAddToCartCalled) {
      toast.success('Product added to cart');
      setIsAddToCartCalled(false);
    } else if (isAddToCartCalled && error) {
      toast.error(error);
      setIsAddToCartCalled(false);
    }
    
    dispatch(resetIsSuccess());
    
  }, [isSuccess, error, isAddToCartCalled, dispatch]);

  return <>
  {loading ? <loading /> : <section className="my-5">
    <Container>
      <Breadcrumb className="text-black-50 text-decoration-none">
        <Breadcrumb.Item className="text-black-50 text-decoration-none" href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/Shop">Shop</Breadcrumb.Item>
        <Breadcrumb.Item active>Single Product</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col xs={12} md={6}>
          <div className="border d-flex justify-content-center align-items-center">
            <Image src={productImg || product?.images[0]?.secure_url} height={500} alt="product image" />
          </div>
        </Col>

        <Col xs={12} lg={6}>
          <div className='ms-4'>
              <div>
                <h3 className="fw-bold my-3">{product?.name}</h3>
                <h6 className="fw-bold h4  my-3">${product?.price}</h6>
                <div>
                <div className="mb-3">
                    {[...Array(5)].map((star, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? "text-warning" : "text-secondary"} />
                    ))}
                </div>
                  <span className="ms-2">{product?.reviews.length} Reviews</span> <span className="border ms-2"></span>
                  <span className="ms-2">{product?.sold} Sales</span> <span className="border ms-2"></span>
                  <span className="ms-2">{product?.stock}+ In Stock</span>
                </div>
                <p className='my-4 border-bottom pb-4'>{product?.description}</p>
              </div>
              <div className='d-flex align-items-center justify-content-between mb-3'>
                <div className='border  p-2'>
                  <Button onClick={()=>setproductCount(productCount+1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                  <span className='mx-2 text-black-50'>{productCount}</span>
                  <Button onClick={() => productCount > 1 && setproductCount(productCount - 1)} size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                </div>
                <Button onClick={function () { handleAddToCart(product._id) }} className='px-sm-5 py-2 rounded-5 main-bg border-0 mx-md-5 fw-bold'>
                  Add to cart <FontAwesomeIcon className="" icon={faCartShopping} size='sm' />
                  </Button>
                <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size='xl' style={{color: "#ddd"}} />
              </div>
              <span>Category: {product?.category.name}</span>
          </div>
        </Col>

        <Col xs={12} lg={6}> 
            <Stack direction="horizontal" className="pb-2 justify-content-between">
              {product?.images.map((img,i)=> <Image key={i} onClick={()=>setproductImg(img.secure_url)} className="border cursor-pointer" fluid width={130} src={img.secure_url} alt="product image" />)}
            </Stack>
        </Col>
      </Row>
      {/* Product Details */}
      <ProductTabs />
      {/* Related Products */}
      {/* <RelatedProduct />  */}
    </Container>
  </section>}
  </>
}

export default ProductDetails