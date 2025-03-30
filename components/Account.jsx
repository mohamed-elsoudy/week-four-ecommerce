import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector } from "react-redux";

function Account() {
    const user = useSelector(state => state.authSlice.user.name);
    return (
    <Container className="pt-5 pb-6 mb-6 my-account">
        <Breadcrumb className="txt-black bread-crumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>My Account</Breadcrumb.Item>
            <span className="d-inlineblock ms-auto">Welcome! <span className="txt-orange">{user && user}</span></span>
        </Breadcrumb>
        <div className="billing-details mt-5">
        <Row className="mt-5 justify-content-between row-gap-5">
                <Col xs={12} md="3">
                    <h2 className="fs-6 fw-medium">Manage My Account</h2>
                    <ul className="txt-grey fs-16 fw-normal ms-4 mt-2">
                        <li className="active txt-orange">My Profile</li>
                        <li>Address Book</li>
                        <li>My Payment Options</li>
                    </ul>
                    <h2 className="fs-6 fw-medium mt-4">My Orders</h2>
                    <ul className="txt-grey fs-16 fw-normal ms-4 mt-2">
                        <li>My Returns</li>
                        <li>My Cancellations</li>
                    </ul>
                    <h2 className="fs-6 fw-medium mt-4">My WishList</h2>
                </Col>
                <Col xs={12} md="9" className="edit-profile py-4 px-3 px-md-5 shadow-sm">
                        <h2 className="txt-orange fs-5 fw-medium">Edit Your Profile</h2>
                        <div className="name fw-normal d-flex flex-column flex-md-row column-gap-4 row-gap-2">
                            <div className="first-name w-100">
                                <span className="d-block">First Name</span>
                                <input className="w-100 ps-3" type="text" placeholder="Md" />
                            </div>
                            <div className="last-name w-100">
                                <span className="d-block">Last Name</span>
                                <input className="w-100 ps-3" type="text" placeholder="Rimel" />
                            </div>
                        </div>
                        <div className="email-adress fs-16 fw-normal d-flex flex-column flex-md-row column-gap-4 row-gap-2">
                            <div className="email w-100">
                                <span className="d-block">Email</span>
                                <input className="w-100 ps-3" type="text" placeholder="rimel1111@gmail.com" />
                            </div>
                            <div className="address last-name w-100">
                                <span className="d-block">Address</span>
                                <input className="w-100 ps-3" type="text" placeholder="Kingston, 5236, United State" />
                            </div>
                        </div>

                        <div className="password-changes d-flex flex-column">
                            <h2 className="fs-6 fw-semibold my-4">Password Changes</h2>
                            <input type="password" placeholder="Current Password" />
                            <input type="password" placeholder="New Passwod" />
                            <input type="password" placeholder="Confirm New Passwod" />
                        </div>

                        <div className="submit ms-auto fs-16">
                            <Button variant="" className="px-4 py-2 bg-white">Cancel</Button>
                            <Button variant="danger" type="submit" className="px-4 py-2">Save Changes</Button>
                        </div>
                </Col>
            </Row>
        </div>
    </Container>
    );
}

export default Account;