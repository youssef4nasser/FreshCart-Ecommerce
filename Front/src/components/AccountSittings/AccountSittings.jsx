import {Button, Form } from "react-bootstrap";
import userProfile from "../../assets/1.png"
import { useSelector } from "react-redux";

function AccountSittings() {

    const x = useSelector((store)=> store.user)
    console.log(x);

  return (
    <div id="accountSettings" className="">
    <Form>
        <div className="p-3 p-lg-4 rounded shadow-sm border-2 mb-4 border">
            <h5 className="fw-bold mb-4">Account sittings</h5>
            <div className="d-flex justify-content-between">
                <div className="w-50">
                <Form.Group className="mb-3" controlId="FirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter First Name" />
                </Form.Group>
                    
                <Form.Group className="mb-3" controlId="LastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="email" placeholder="Enter Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control type="number" placeholder="Enter Phone Number" />
                </Form.Group>
                <Button className="main-bg border-0" type="button">
                    Save Changes
                </Button>
                </div>
                <div className="w-25 text-center d-flex justify-content-center align-items-center">
                    <Form.Group controlId="formFile">
                        <img src={userProfile} alt="" loading="lazy" className="rounded-circle img-fluid" />
                        <Button className="main-bg border-0 my-3" type="button">Chose image</Button> 
                    </Form.Group>
                </div>
            </div>
        </div>
        {/* Change password */}
        <div className="p-3 p-lg-4 rounded shadow-sm border-2 mb-4 border">
            <h5 className="fw-bold mb-4">Change Password</h5>
            <Form.Group className="mb-3" controlId="formGridAddress">
                <Form.Label>Old Password*</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridCity">
                <Form.Label>New Password*</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button className="main-bg border-0" type="button">
                Change password
            </Button>
        </div>
    </Form>
    </div>
  )
}

export default AccountSittings