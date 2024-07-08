import { faCartShopping, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Carousel, Col, Container, Image, Row } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, resetIsSuccess } from '../../Redux/cartSlice.js';
import { toast } from 'react-toastify';

export default function MdalShow({data}) {
  const [show, setShow] = useState(false);
  const [productCount, setproductCount] = useState(1)
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch()

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

  return (
    <>
      <FontAwesomeIcon className="text-secondary cursor-pointer" onClick={handleShow} icon={faEye} />
    
      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton />
        <Modal.Body>
          <Container>
            <Row>
              <Col lg={5} className="d-flex justify-content-center align-items-center">
                <Carousel fade className="w-100">
                  {data.images?.map((image, index) => (
                    <Carousel.Item key={index}>
                      <Image fluid src={image.secure_url} alt={`Product Image ${index}`} />
                    </Carousel.Item>
                  ))}
                </Carousel>
              </Col>
              <Col lg={7}>
                <div className="ms-lg-4">
                  <h5 className="fw-bold my-3">{data.name}</h5>
                  <h6 className="fw-bold text-success my-3">${data.price}</h6>
                  <div className="mb-3">
                    {[...Array(5)].map((star, i) => (
                      <FontAwesomeIcon key={i} icon={faStar} className={i < 4 ? "text-warning" : "text-secondary"} />
                    ))}
                  </div>
                  <p className="text-muted my-4">
                    {data.description}
                  </p>
                  <hr />
                  <div className="d-flex align-items-center justify-content-between mt-4">
                  <div className='border  p-2'>
                  <Button onClick={()=>setproductCount(productCount+1)}  size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>+</Button>
                  <span className='mx-2 text-black-50'>{productCount}</span>
                  <Button onClick={()=>setproductCount(productCount-1)}  size='sm' className=' fw-bold bg-transparent text-black-50 border-0'>-</Button>
                </div>
                    <Button onClick={function () { handleAddToCart(data.id) }} className="px-4 py-2 rounded-5 main-bg fw-bold mx-4 border-0">
                      Add to cart <FontAwesomeIcon icon={faCartShopping}  />
                    </Button>
                    <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size="lg" style={{color: "#ddd"}} />
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  );
}

MdalShow.propTypes = {
  data: PropTypes.object.isRequired,
};