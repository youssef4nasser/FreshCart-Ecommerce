import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import ReviewsImg1 from "../../assets/rev.png"
import ReviewsImg2 from "../../assets/rev2.png"
import ReviewsImg3 from "../../assets/rev3.png"

function ProductTabs() {
  return (
    <Tabs
      defaultActiveKey="descriptions"
      id="uncontrolled-tab-example"
      className="my-5 mx-auto"
      justify
    >
      <Tab eventKey="descriptions" title="Descriptions">
        <p className='my-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry{"'"}s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries but also the on leap into electronic typesetting, remaining essentially unchanged. It wasn’t popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, andei more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum to make a type specimen book.</p>
      </Tab>
      <Tab eventKey="information" title="Additional Information">
        <ul className='my-5'>
          <li><b>Material:</b> Polyester, cotton and wool. </li>
          <br/>
          <li><b>Size:</b> Regular fit; length approximately 70 cm (28 inches), sleeve approx. 46 cm (18 inches). </li>
          <br/>
          <li><b>Colors:</b> Available in black or white.</li>
        </ul>
      </Tab>
      <Tab eventKey="feedback" title="Customer Feedback">
        <h4 className='fw-bold my-4'>11 Reviews</h4>
        <div className="border-bottom my-3">
          <div className="d-flex align-items-start">
            <img src={ReviewsImg1} alt="Customer Feedback" width={60} height={60} />
            <div className="ms-3">
              <h5 className="fw-bold">John Doe</h5>
               &#9733;&#9733;&#9733;&#9733;&#9734;
              <p className="mt-2 pb-1">I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
            </div>
          </div>
        </div>
        <div className="border-bottom my-3">
          <div className="d-flex align-items-start">
            <img src={ReviewsImg2} alt="Customer Feedback" width={60} height={60} />
            <div className="ms-3">
              <h5 className="fw-bold">Nicolas Jensen</h5>
               &#9733;&#9733;&#9733;&#9733;&#9734;
              <p className="mt-2 pb-1">I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
            </div>
          </div>
        </div>
        <div className="border-bottom my-3">
          <div className="d-flex align-items-start">
            <img src={ReviewsImg3} alt="Customer Feedback" width={60} height={60} />
            <div className="ms-3">
              <h5 className="fw-bold">John Doe</h5>
               &#9733;&#9733;&#9733;&#9733;&#9734;
              <p className="mt-2 pb-1">I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.</p>
            </div>
          </div>
        </div>
      </Tab>
    </Tabs>
  );
}

export default ProductTabs