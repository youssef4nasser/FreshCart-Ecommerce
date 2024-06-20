import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import { useSelector } from 'react-redux';
function ProductTabs() {

  let {product} = useSelector((store)=> store.produtDetails)

  return (
    <Tabs
      defaultActiveKey="descriptions"
      id="uncontrolled-tab-example"
      className="my-5 mx-auto"
      justify
    >
      {/* Description */}
      <Tab eventKey="descriptions" title="Descriptions">
        <p className='my-5'>{product?.description}</p>
      </Tab>
      {/* Additional Information */}
      {/* <Tab eventKey="information" title="Additional Information">
        <ul className='my-5'>
          <li><b>Material:</b> Polyester, cotton and wool. </li>
          <br/>
          <li><b>Size:</b> Regular fit; length approximately 70 cm (28 inches), sleeve approx. 46 cm (18 inches). </li>
          <br/>
          <li><b>Colors:</b> Available in black or white.</li>
        </ul>
      </Tab> */}
      {/* Reviews */}
      <Tab eventKey="feedback" title="Customer Feedback">
        <h4 className='fw-bold my-4'>{product?.reviews?.length} Reviews</h4>
        {product?.reviews == 0 ? <h2 className='h2 text-center my-3'>This product {`doesn't`} have any review now...</h2>: product?.reviews.map((review)=>{
          return(
            <div key={review._id} className="border-bottom my-3">
              <div className="d-flex align-items-start">
                <img src={review.user.profileImage.secure_url} alt="Customer Feedback" width={60} height={60} />
                <div className="ms-3">
                  <h5 className="fw-bold">{review.user.name}</h5>
                  <div className="mb-3">
                    {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon
                        key={i}
                        icon={faStar}
                        className={i < review.rating ? "text-warning" : "text-secondary"}
                      />
                    ))}
                  </div>
                  <p className="mt-2 pb-1">{review.review}</p>
                </div>
              </div>
            </div>
          )
        })}
      </Tab>
    </Tabs>
  );
}

export default ProductTabs