import { Row, Col } from "react-bootstrap";
function Services() {
    return (
    <>
        <Row className="pt-5 services justify-content-center">
            <Col xs={12} md="6" lg="4" className="text-center service">
                <div className="img rounded-circle bg-dark-grey p-2 mx-auto">
                    <span className="rounded-circle bg-black">
                        <img src="../public/imgs/icon-delivery.png" alt="" />
                    </span>
                </div>
                <h4 className="mt-4 fw-bolder">FREE AND FAST DELIVERY</h4>
                <p>Free delivery for all orders over $140</p>
            </Col>
            <Col xs={12} md="6" lg="4" className="text-center service">
                <div className="img rounded-circle bg-dark-grey p-2 mx-auto">
                    <span className="rounded-circle bg-black">
                        <img src="../public/imgs/Icon-Customer service.png" alt="" />
                    </span>
                </div>
                <h4 className="mt-4 fw-bolder">24/7 CUSTOMER SERVICE</h4>
                <p>Friendly 24/7 customer support</p>
            </Col>
            <Col xs={12} xl="4" className="text-center service">
                <div className="img rounded-circle bg-dark-grey p-2 mx-auto">
                    <span className="rounded-circle bg-black">
                        <img src="../public/imgs/Icon-secure.png" alt="" />
                    </span>
                </div>
                <h4 className="mt-4 fw-bolder">MONEY BACK GUARANTEE</h4>
                <p>We reurn money within 30 days</p>
            </Col>
        </Row>
    </>
    );
}

export default Services;