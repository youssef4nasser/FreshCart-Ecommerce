import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../../assets/freshcart-logo.svg"
import { Badge, Button, Dropdown, Image, Nav, NavDropdown, Offcanvas, Stack } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faUser, faCartShopping, faEnvelope, faPhone, faRightToBracket, faListCheck } from '@fortawesome/free-solid-svg-icons';
import userProfile from "../../assets/1.png"
import { useState } from 'react';
import style from './Navbar.module.css'

function NavSearsh() {
  const [showOffcanvas, setShowOffcanvas] = useState(false);
  const handleOffcanvasToggle = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  return (
  <>
    <Navbar className={`${style.fss} bg-body-tertiary p-1`} >
      <Container className='justify-content-between'>
        <div>
            <FontAwesomeIcon icon={faEnvelope} /> <span> youssef4nasser@gmail.com</span>
            {/* <div className="vr mx-2" /> */}
        </div>
        <div>
          <FontAwesomeIcon icon={faPhone} /> <span>+201061235332</span>
          {/* <Nav>
              <NavDropdown 
                align={{ md: 'end' }}
                id="nav-dropdown-dark-example"
                title="languages"
                menuVariant="white"
              >
                <NavDropdown.Item href="#action/3.1">English</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Arabic</NavDropdown.Item>
              </NavDropdown>
          </Nav> */}
        </div>
      </Container>
    </Navbar>
    <Navbar expand="lg" className='border-bottom'>
      <Container>
        <Navbar.Brand href="/"><Image src={logo} alt="logo freshCart" /></Navbar.Brand>
        <Navbar.Toggle aria-controls={'offcanvasNavbar-expand-lg'} onClick={handleOffcanvasToggle} />
        <Navbar.Offcanvas
         show={showOffcanvas}
         onHide={handleOffcanvasToggle}
         id={'offcanvasNavbar-expand-lg'}
         aria-labelledby={"offcanvasNavbarLabel-expand-lg"}
         placement="start"
         >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={"offcanvasNavbarLabel-expand-lg"}>
              FreshCart
            </Offcanvas.Title>
          </Offcanvas.Header>
          {showOffcanvas ?
          <Offcanvas.Body>
            <Form className="d-flex my-2 my-lg-0 w-100">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className=''>
              <Stack direction='vertical' gap={3}>
                <Nav.Item className="mt-4">
                <div className="d-flex align-items-center justify-content-between">
                  <img src={userProfile} className='rounded-circle' width={58} height={58} />
                  <h1 className="my-2 h5 fw-bold">Youssef AboZaid</h1>
                  </div>
                </Nav.Item>

                <Nav.Item className='main-hover'>
                  <Nav.Link className='d-flex justify-content-between'>
                      <span>My Account</span>
                      <FontAwesomeIcon icon={faUser} size='lg'/>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='main-hover'>
                  <Nav.Link className='d-flex justify-content-between'>
                        <span>My Order</span>
                        <FontAwesomeIcon icon={faListCheck}  size='lg'/>
                    </Nav.Link>
                </Nav.Item>

                <Nav.Item className='main-hover'>
                  <Nav.Link className='position-relative  d-flex justify-content-between'>
                    <span>Cart</span>
                    <div>
                      <Badge bg='success' className="position-absolute top-0 end-75 translate-middle badge rounded-pill">3</Badge>
                      <FontAwesomeIcon icon={faCartShopping} size='lg' />
                    </div>
                  </Nav.Link>
                </Nav.Item>

                <Nav.Item className='main-hover'>
                <Nav.Link className='d-flex justify-content-between'>
                  <span>Wishlist</span>
                  <div className='position-relative  d-flex justify-content-between'>
                    <Badge bg='success' className="position-absolute top-0 end-75 translate-middle badge rounded-pill">3</Badge>
                    <FontAwesomeIcon icon={faHeart} size='lg' />
                  </div>
                </Nav.Link>
                </Nav.Item>

                <Nav.Item className='main-hover'>
                  <Nav.Link className='d-flex justify-content-between'>
                    <span>Log out</span>
                    <FontAwesomeIcon icon={faRightToBracket} size='lg'/>
                  </Nav.Link>
                </Nav.Item>

                {/* <Nav.Item className='main-hover'>
                  <Nav.Link>Register</Nav.Link>
                  <Nav.Link>Login</Nav.Link>
                </Nav.Item> */}
              </Stack>
            </Nav>
          </Offcanvas.Body>
          :
          <Offcanvas.Body>
            <Form className="d-flex my-2 my-lg-0 w-100">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className='align-items-center'>
              <div className='position-relative mx-3 cursor-pointer'>
                <FontAwesomeIcon className="" icon={faHeart} size='lg' />
                <span className="position-absolute top-0 end-75 translate-middle badge rounded-pill bg-success">31</span>
              </div>
              <div className='position-relative mx-3 cursor-pointer'>
                <FontAwesomeIcon className="" icon={faCartShopping} size='lg' />
                <span className="position-absolute top-0 end-75 translate-middle badge rounded-pill bg-success">9</span>
              </div>
              <div className='cursor-pointer'>
                <Dropdown align={'end'} >
                  <Dropdown.Toggle variant="white" id="dropdown-basic">
                    <FontAwesomeIcon className="px-2" icon={faUser} size='lg' />
                  </Dropdown.Toggle>

                  {/* <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Register</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
                  </Dropdown.Menu> */}

                  <Dropdown.Menu style={{width:200}}>
                    <div className=" text-center">
                      <img src={userProfile} className='rounded-circle' width={65} height={65} />
                      <div>
                        <h6 className="my-2 fw-bold">Youssef AboZaid</h6>
                      </div>
                    </div>
                    <NavDropdown.Divider />
                    <Dropdown.Item href="#/action-1">My Account</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">My Order</Dropdown.Item>
                    <NavDropdown.Divider />
                    <Dropdown.Item href="#/action-3"><FontAwesomeIcon icon={faRightToBracket} /> Log out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </Nav>
          </Offcanvas.Body>}
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  </>
  );
}

export default NavSearsh;