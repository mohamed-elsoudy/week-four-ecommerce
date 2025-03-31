import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { useDispatch, useSelector } from "react-redux";
import { increaseQuantity, dicreaseQuantity } from "../src/store/explore-our-products/cartSlice";
import { Link } from "react-router-dom";

function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cartSlice);
    // console.log(cartItems);
    const subTotlal = cartItems.reduce((acc, cartItem) => {
        acc += cartItem.price * cartItem.quantity;
        return acc;
    }, 0) 
    
    return (
        <Container className="pt-5 pb-6 cart">
            <Breadcrumb className="txt-black bread-crumb">
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Cart</Breadcrumb.Item>
            </Breadcrumb>
            <div className="cart-products-table mt-5">
                <Row className="py-3 px-4 shadow-sm rounded fw-normal align-items-center mx-0">
                    <Col>Product</Col>
                    <Col>Price</Col>
                    <Col>Quantity</Col>
                    <Col>Subtotal</Col>
                </Row>

                {
                cartItems.map((cartItem) => {
                    return (
                    <Row key={cartItem.id} className="py-3 px-4 shadow-sm rounded fw-normal mt-4 align-items-center mx-0">
                    <Col className="d-flex gap-3">
                        <img src={cartItem.image} width={50} alt="" />
                        <span>{cartItem.title}</span>
                    </Col>
                    <Col>${cartItem.price}</Col>
                    <Col>
                        <div className="quantity rounded p-2 d-flex justify-content-between align-items-center">
                            <span>0{cartItem.quantity}</span>
                            <div className="quantity-arrows">
                                <img src="/imgs/up.svg" alt="" onClick={() => dispatch(increaseQuantity(cartItem))} />
                                <img src="/imgs/small.svg" alt="" onClick={() => dispatch(dicreaseQuantity(cartItem))} />
                            </div>
                        </div>
                    </Col>
                    <Col>${(cartItem.quantity * cartItem.price).toFixed(2)}</Col>
                </Row>)
                })
                }

                <div className="mt-6 mt-sm-4 d-flex justify-content-between">
                    <Link to="/allproducts"><div><Button variant="white" className="px-sm-5 py-sm-3 border-black ms-auto text-black">Return To Shop</Button></div></Link>
                    <div><Button variant="white" className="px-sm-5 py-sm-3 border-black ms-auto">Update Cart</Button></div>
                </div>
            </div>
            <div className="mt-5 d-flex flex-wrap row-gap-5 justify-content-between">
                <div className="coupon d-flex flex-wrap row-gap-3">
                    <input type="text" placeholder="Coupon Code" className="p-2 me-3" />
                    <Button variant="danger" className="">Apply Coupon</Button>
                </div>
                <div className="checkout rounded px-3 py-4">
                    <p className="fw-semibold">Cart Total</p>
                    <div className="py-3 fw-normal main-border-bottom d-flex justify-content-between">
                        <span>Subtotal:</span>
                        <span>${subTotlal.toFixed(2)}</span>
                    </div>
                    <div className="py-3 fw-normal main-border-bottom d-flex justify-content-between">
                        <span>Shipping:</span>
                        <span>$0</span>
                    </div>
                    <div className="py-3 fw-normal d-flex justify-content-between">
                        <span>Total:</span>
                        <span>${subTotlal.toFixed(2)}</span>
                    </div>
                    <Link to="/billingdetails"><Button variant="danger" className="mt-4 p-3 mx-auto d-block">Procees to checkout</Button></Link>
                </div>
            </div>
        </Container>
    );
}

export default Cart;