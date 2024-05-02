import { faCartShopping, faEye, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button, Carousel, Col, Container, Image, Row, Stack } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

export default function MdalShow(props) {

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return <>
    <FontAwesomeIcon onClick={handleShow} icon={faEye} style={{color: "#ddd"}} size='lg' />
    
    <Modal show={show} onHide={handleClose}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
      </Modal.Header>
      <Modal.Body>
        <Container>
          <Row>
            <Col lg={4}>
              <Stack direction="horizontal" className="py-3 justify-content-center">
                  <Carousel fade indicators={false}>
                    <Carousel.Item>
                        <Image fluid width={265} src={props.data.imagesrc} alt='Carousel Banner' />
                    </Carousel.Item>
                  </Carousel>
              </Stack>
            </Col>
            <Col lg={8}>
              <div className='ms-4'>
                  <div>
                    <h5 className="fw-bold my-3">{props.data.name}</h5>
                    <h6 className="fw-bold  my-3">{props.data.price}</h6>
                    <span className="fw-bold">
                      <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                      <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                      <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                      <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                      <FontAwesomeIcon icon={faStar} style={{color: "#DDD"}} />
                    </span>
                    <p className=' my-4'>
                      Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                      dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                      consectetur ac, vestibulum at eros.
                    </p>
                  </div>
                  <hr />
                  <div className='d-flex align-items-center justify-content-between'>
                    <div className='border p-2 rounded-5'>
                      <Button size='sm' className='rounded-5 fw-bold text-bg-secondary border-0'>+</Button>
                      <span className='mx-2'>5</span>
                      <Button size='sm' className='rounded-5 fw-bold text-bg-secondary border-0'>-</Button>
                    </div>
                    <Button className='px-sm-5 py-2 rounded-5 main-bg border-0 mx-md-5 fw-bold'>Add to cart <FontAwesomeIcon className="" icon={faCartShopping} size='sm' /></Button>
                    <FontAwesomeIcon className="cursor-pointer" icon={faHeart} size='xl' style={{color: "#ddd"}} />
                  </div>
              </div>
            </Col>
          </Row> 
        </Container>
      </Modal.Body>
    </Modal>
  </>
}