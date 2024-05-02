import { faStar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {Form} from "react-bootstrap"

function Filter() {
  return <>
    {/* categories */}
    <div className="border-bottom">
        <h4 className="mt-3">categories</h4>
        <Form.Check 
        type='checkbox'
        id={`AllCategories-checkbox`}
        label={`All Categories`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Accessories-checkbox`}
        label={`Accessories`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Smart TVs-checkbox`}
        label={`Smart TVs`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Smartwatches-checkbox`}
        label={`Smartwatches`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Headphones-checkbox`}
        label={`Headphones`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Laptops-checkbox`}
        label={`Laptops`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`MobilesTablets-checkbox`}
        label={`Mobiles & Tablets`}
        className="my-3 pe-0"
        />
    </div>
    {/* Price */}
    <div className="border-bottom">
        <h4 className="mt-3">Price</h4>
        <Form.Check 
        type='checkbox'
        id={`price1`}
        label={`All Price`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`price2`}
        label={`$0.00 - 99.99`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Price3`}
        label={`$100.00 - 199.99`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`price4`}
        label={`$200.00 - 299.99`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`price5`}
        label={`$300.00 - 399.99`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`price6`}
        label={`$500.00+`}
        className="my-3 pe-0"
        />
    </div>
    {/* Rating */}
    <div className="border-bottom">
        <h4 className="mt-3">Rating</h4>
        <Form.Check className="my-3" type='checkbox' id="Rating5">
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label>
            <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
            </span>
            <span className="ms-2 text-black">5.0</span>
            </Form.Check.Label>
        </Form.Check>
        <Form.Check className="mb-3" type='checkbox' id="Rating4">
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label>
            <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
            </span>
            <span className="ms-2 text-black">4.0 & up</span>
            </Form.Check.Label>
        </Form.Check>
        <Form.Check className="mb-3" type='checkbox' id="Rating3">
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label>
            <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
            </span>
            <span className="ms-2 text-black">3.0 & up</span>
            </Form.Check.Label>
        </Form.Check>
        <Form.Check className="mb-3" type='checkbox' id="Rating2">
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label>
            <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
            </span>
            <span className="ms-2 text-black">2.0 & up</span>
            </Form.Check.Label>
        </Form.Check>
        <Form.Check className="mb-3" type='checkbox' id="Rating1">
            <Form.Check.Input type="checkbox" isValid />
            <Form.Check.Label>
            <span className="fw-bold">
                <FontAwesomeIcon icon={faStar} style={{color: "#FF8A00"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
                <FontAwesomeIcon icon={faStar} style={{color: "#ddd"}} />
            </span>
            <span className="ms-2 text-black">1.0 & up</span>
            </Form.Check.Label>
        </Form.Check>
    </div>
    {/* Brands */}
    <div >
        <h4 className="mt-3">Brands</h4>
        <Form.Check 
        type='checkbox'
        id={`Apple-checkbox`}
        label={`Apple`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Samsung-checkbox`}
        label={`Samsung`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Walton-checkbox`}
        label={`Walton`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Oneplus-checkbox`}
        label={`Oneplus`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Vivo-checkbox`}
        label={`Vivo`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Oppo-checkbox`}
        label={`Oppo`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Xiomi-checkbox`}
        label={`Xiomi`}
        className="my-3 pe-0"
        />
        <Form.Check 
        type='checkbox'
        id={`Php-checkbox`}
        label={`Php`}
        className="my-3 pe-0"
        />
    </div>
  </>
}

export default Filter