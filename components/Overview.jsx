import { Col, Container, Row } from "react-bootstrap";
import Bullets from "../shapes-components/Bullets";

const Overview = () => {
    return (
    <Container className="overview pb-5">
        <Row>
            <Col xs={12} md="4" className="main-border-right">
                <ul className="mt-5 me-2 parts">
                    <li className="d-flex justify-content-between"><a href="">Woman’s Fashion</a><img src="/imgs/DropDown.svg" alt="" /></li>
                    <li className="d-flex justify-content-between"><a href="">Men’s Fashion</a><img src="/imgs/DropDown.svg" alt="" /></li>
                    <li><a href="">Electronics</a></li>
                    <li><a href="">Home & Lifestyle</a></li>
                    <li><a href="">Medicine</a></li>
                    <li><a href="">Sports & Outdoor</a></li>
                    <li><a href="">Baby’s & Toys</a></li>
                    <li><a href="">Groceries & Pets</a></li>
                    <li><a href="">Health & Beauty</a></li>
                </ul>
            </Col>
            <Col xs={12} xl='8'className="py-5">
                <div className="new-items text-light">
                    <div className="item ">
                        <div className="d-flex align-items-center gap-4 pt-5">
                            <img src="/imgs/apple.png" alt="" />
                            <span>iPhone 14 Series</span>
                        </div>
                        <p className="desc fs-48 fw-bolder">
                        Up to 10% off Voucher
                        </p>
                        <a href="" className='d-block ps-2 fw-semibold text-decoration-underline text-light my-5 m-lg-0'>ShopNow</a>
                    </div>
                    <Bullets />
                </div>
            </Col>
        </Row>
    </Container>
    );
}
 
export default Overview;