import { faFacebook, faSquareInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Col, Form, Image, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import logo from "../../assets/freshcart-logo.svg"
import mastart from "../../assets/master.png"
import paypal from "../../assets/paypal.png"
import visa from "../../assets/visa.png"
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

function Footer() {
  return (
    <>
    <footer className='bg-dark text-white py-4'>
      <Container>
        <Row>
          <Col md={6} lg={3}>
            <div className="p-2">
              <div className='bg-white rounded-5 text-center p-2  mb-3'>
                <Image src={logo} alt="logo freshCart" fluid />
              </div>
              <p className='lh-lg text-white-50'>FreshCart is one of the best stores selling products at the best prices. shop now and enjoy the best offers and discounts</p>
            </div>
          </Col>
          <Col md={6} lg={3}>
            <div className="p-2">
              <h5>Important links</h5>
              <ul className='list-unstyled d-flex flex-column'>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Help Center</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Contact Us</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Faqs</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Aboute</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Privacy policy</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Term & conditions</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={2}>
            <div className="p-2">
              <h5>Quick links</h5>
              <ul className='list-unstyled d-flex flex-column'>
                <li className='py-2'><Link className={styles.LinkHover} href="#">My account</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Cart</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Orders</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Wishlist</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">Checkout</Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#">New Products</Link></li>
              </ul>
            </div>
          </Col>
          <Col md={6} lg={4}>
          <div className="p-2 d-flex flex-column ">
            <div className='mb-5'>
              <h5>Subscribe</h5>
              <p className='text-white-50'>Enter your email below to be the first to know <br /> about new collections.</p>
              <div className='d-flex'>
                <Form.Control size="lg" className="me-2" type="email" placeholder="Enter your email" />
                <button className="btn btn-primary"><FontAwesomeIcon icon={faArrowRight} /></button>
              </div>
            </div>
            <div>
              <h5>Follow Us :</h5>
              <ul className='list-unstyled d-flex justify-content-between'>
                <li className='py-2'><Link className={styles.LinkHover} href="#"><FontAwesomeIcon icon={faFacebook} size='2xl' /></Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#"><FontAwesomeIcon icon={faTwitter} size='2xl' /></Link></li>
                <li className='py-2'><Link className={styles.LinkHover} href="#"><FontAwesomeIcon icon={faSquareInstagram} size='2xl' /></Link></li>
              </ul>
            </div>
          </div>
          </Col>
          <hr/>
          <Col>
          <div className='d-flex flex-wrap justify-content-between align-items-center'>
            <p className='m-0'>
            ©2024 All rights reserved.
            Made by <Link className='text-white-50 fw-bold d-inline-block' href="https://www.linkedin.com/in/youssef-abozaid/">Youssef AboZaid</Link>
            </p>
            <div>
            <Image className='mx-2' src={mastart} alt="logo freshCart" fluid />
            <Image className='mx-2' src={paypal} alt="logo freshCart" fluid />
            <Image className='mx-2' src={visa} alt="logo freshCart" fluid />
            </div>
          </div>
          </Col>
        </Row>
      </Container>
    </footer>
    </>
  );
}

export default Footer;