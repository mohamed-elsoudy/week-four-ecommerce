import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useSelector } from "react-redux";

function BillingDetails() {
    const cartItems = useSelector((state) => state.cartSlice);
    const subTotal = cartItems.reduce((acc, cartItem) => {
        acc += cartItem.price * cartItem.quantity;
        return acc;
    }, 0) 

    return (
    <Container className="pt-5 pb-6 mb-6 cart billing-details">
        <Breadcrumb className="txt-black bread-crumb">
            <Breadcrumb.Item href="#">Account</Breadcrumb.Item>
            <Breadcrumb.Item>My Account</Breadcrumb.Item>
            <Breadcrumb.Item>Product</Breadcrumb.Item>
            <Breadcrumb.Item>View Cart</Breadcrumb.Item>
            <Breadcrumb.Item active>CheckOut</Breadcrumb.Item>
        </Breadcrumb>
        <div className="billing-details mt-5">
            <h2>Billing Details</h2>
            <Row className="mt-5 gap-4 justify-content-between">
                <Col xs={12} lg="5" className="d-flex flex-column txt-grey">
                    <label htmlFor="first-name">First Name<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="company-name">Company Name<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="street-name">Street Address<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="apartment-name">Apartment, floor, etc. (optional)<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="town">Town/City<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="phone">Phone Number<sup className="txt-orange">*</sup></label>
                    <input type="text" id="first-name"/>

                    <label htmlFor="email">Email Address<sup className="txt-orange">*</sup></label>
                    <input type="text" id="email"/>
                        
                    <label htmlFor="save-information" className="d-flex gap-3">
                        <input type="checkbox" id="save-information" className="d-none"/>
                        <div className="save-informations">
                            <span><img src="/imgs/right.svg" alt="" /></span>
                        </div>
                        Save this information for faster check-out next time
                    </label>
                </Col>
                <Col xs={12} lg="5">
                    <div className="billing-elements">  
                        {cartItems.map((cartItem) => {
                            return(
                        <div className="d-flex gap-3 mt-4" key={cartItem.id}>
                            <img src={cartItem.image} width={45} alt="" />
                            <span>{cartItem.title}<span className="txt-orange"> X </span>{cartItem.quantity}</span>
                            <span className="d-inlineblock ms-auto">${cartItem.price * cartItem.quantity}</span>
                        </div>
                        );
                        })}
                    </div>
                    <div className="billing-elements mt-4">  
                        <div className="pb-3 pt-2 fw-normal main-border-bottom d-flex justify-content-between">
                            <span>Subtotal:</span>
                            <span>${subTotal}</span>
                        </div>
                        <div className="pb-3 pt-2 fw-normal main-border-bottom d-flex justify-content-between">
                            <span>Shipping:</span>
                            <span>Free</span>
                        </div>
                        <div className="pb-3 pt-2 fw-normal d-flex justify-content-between">
                            <span>Total:</span>
                            <span>${subTotal}</span>
                        </div>
                    </div>
                    <div className="howto-pay">
                        <div className="bank d-flex justify-content-between mt-3 mb-2">
                            <input type="radio" name="bank" id="bank" />
                            <label htmlFor="bank" className="flex-grow-1 d-flex gap-3"><div></div>Bank</label>
                            <img src="/imgs/bank.svg" alt="" />
                        </div>
                        <div className="cash">
                            <input type="radio" name="bank" id="cash" />
                            <label htmlFor="cash" className=" d-flex gap-3"><div></div>Cash on delivery</label>
                        </div>
                    </div>
                    <div className="billing-coupon d-flex mt-4">
                        <input type="text" placeholder="Coupon Code" className="p-2 me-3" />
                        <Button variant="danger" className="">Apply Coupon</Button>
                    </div>
                    <Button variant="danger" className="mt-4 place-order">Place Order</Button>
                </Col>
            </Row>
        </div>
    </Container>
    );
}

export default BillingDetails;