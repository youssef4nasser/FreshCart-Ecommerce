import MdalShow from "../modal/ModalShow.jsx";
import { faCartArrowDown, faHeart, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { Col, Row, Card, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../Redux/produtsSlice.js";
import { addToCart, resetIsSuccess } from "../../Redux/cartSlice.js";
import { toast } from "react-toastify";

function Products() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts());
    }, []);
    
    let {products} = useSelector((store)=> store.allProduts)
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
        <div className="container mt-4">
            <Row className="g-4">
                {products.map((item, index) => (
                    <Col key={index} xs={12} sm={6} md={3} lg={4}>
                        <Card className="h-100 shadow-sm product-item">
                            <Link to={`ProductDetails/${item._id}`} className="text-decoration-none text-dark">
                                <Card.Img variant="top" src={item.images[0].secure_url} alt='product' />
                                <Card.Body className="d-flex flex-column">
                                    <Card.Title className="h6 fw-bold">{item.name}</Card.Title>
                                    <Card.Text className="fw-bold main-color">${item.price}</Card.Text>
                                    <div className="d-flex justify-content-start my-2">
                                        {[...Array(5)].map((star, i) => (
                                            <FontAwesomeIcon
                                                key={i}
                                                icon={faStar}
                                                className={`me-1 ${i < 4 ? "text-warning" : "text-secondary"}`}
                                            />
                                        ))}
                                    </div>
                                </Card.Body>
                            </Link>
                            <Card.Footer className="bg-white border-0">
                                <div className="d-flex justify-content-around">
                                    <Button onClick={function () { handleAddToCart(item._id) }} variant="light">
                                        <FontAwesomeIcon icon={faCartArrowDown} className="text-secondary" />
                                    </Button>
                                    <Button variant="light">
                                        <FontAwesomeIcon icon={faHeart} className="text-secondary" />
                                    </Button>
                                    <Button variant="light">
                                        <MdalShow data={item} />
                                    </Button>
                                </div>
                            </Card.Footer>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default Products