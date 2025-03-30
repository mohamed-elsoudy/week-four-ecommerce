import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Bullets from "../shapes-components/Bullets";
import Services from "../dry-components/Services";

function AboutUs() {
    return (
        <>
        <div className="about-us">
            <div className="pt-5 pb-6 mb-6 text-black text-center">
                <Breadcrumb className="txt-black bread-crumb">
                    <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                    <Breadcrumb.Item active>About</Breadcrumb.Item>
                </Breadcrumb>
                <div className="ourStory d-flex align-items-center text-black gap-5">
                    <div className="brief text-start">
                        <h2>Our Story</h2>
                        <p className="mt-4 mb-3">Launced in 2015, Exclusive is South Asia’s premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. </p>
                        <p>Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
                    </div>
                    <div className="img d-none d-lg-block" style={{backgroundColor: "#EB7EA8", width: 2705, height: 609}}>
                        {/* <img src="../public/imgs/" alt="" /> */}
                    </div>
                </div>
            </div>
            <Container>
                <Row className="slaes gap-4 pb-5 justify-content-center justify-content-lg-start">
                    <Col xs={3} className="px-5 py-4 main-border rounded text-center">
                        <div className="icon rounded-circle bg-grey mb-4">
                            <span className="rounded-circle bg-black">
                                <img src="../public/imgs/icon_shop.png" alt="" />
                            </span>
                        </div>
                        <div className="fs-32 fw-bolder">10.5k </div>
                        <p className="fs-16">Sallers active our site</p>
                    </Col>
                    <Col xs={3} className="px-5 py-4 main-border rounded text-center orange text-light">
                        <div className="icon rounded-circle bg-grey mb-4">
                            <span className="rounded-circle bg-white">
                                <img src="../public/imgs/Icon-Sale.png" alt="" />
                            </span>
                        </div>
                        <div className="fs-32 fw-bolder">33k</div>
                        <p className="fs-16">Mopnthly Produduct Sale</p>
                    </Col>
                    <Col xs={3} className="px-5 py-4 main-border rounded text-center">
                        <div className="icon rounded-circle bg-grey mb-4">
                            <span className="rounded-circle bg-black">
                                <img src="../public/imgs/Icon-Shopping bag.png" alt="" />
                            </span>
                        </div>
                        <div className="fs-32 fw-bolder">45.5k</div>
                        <p className="fs-16">Customer active in our site</p>
                    </Col>
                    <Col xs={3} className="px-5 py-4 main-border rounded text-center">
                        <div className="icon rounded-circle bg-grey mb-4">
                            <span className="rounded-circle bg-black">
                                <img src="../public/imgs/Icon-Moneybag.png" alt="" />
                            </span>
                        </div>
                        <div className="fs-32 fw-bolder">25k</div>
                        <p className="fs-16">Anual gross sale in our site</p>
                    </Col>
                </Row>
            </Container>
        </div>
        <Container>
                <Row className="our-awesome-employees mt-5">
                    <Col xs={12} sm="6" lg="4">
                        <div className="employee-img bg-grey text-center rounded">
                            <img src="../public/imgs/tom.png" alt="" />
                        </div>
                        <h2 className="fs-32 mt-4 mb-1">Tom Cruise</h2>
                        <p className="text-black mb-3">Founder & Chairman</p>
                        <ul className="icons d-flex gap-3">
                            <li><img src="../public/imgs/Icon-Twitter.svg" alt="" /></li>
                            <li><img src="../public/imgs/icon-instagram.svg" alt="" /></li>
                            <li><img src="../public/imgs/Icon-Linkedin.svg" alt="" /></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm="6" lg="4">
                        <div className="employee-img bg-grey text-center rounded">
                            <img src="../public/imgs/emma.png" alt="" />
                        </div>
                        <h2 className="fs-32 mt-4 mb-1">Emma Watson</h2>
                        <p className="text-black mb-3">Managing Director</p>
                        <ul className="icons d-flex gap-3">
                            <li><img src="../public/imgs/Icon-Twitter.svg" alt="" /></li>
                            <li><img src="../public/imgs/icon-instagram.svg" alt="" /></li>
                            <li><img src="../public/imgs/Icon-Linkedin.svg" alt="" /></li>
                        </ul>
                    </Col>
                    <Col xs={12} sm="6" lg="4">
                        <div className="employee-img bg-grey text-center rounded">
                            <img src="../public/imgs/wills.png" alt="" />
                        </div>
                        <h2 className="fs-32 mt-4 mb-1">Will smith</h2>
                        <p className="text-black mb-3">Product Designer</p>
                        <ul className="icons d-flex gap-3">
                            <li><img src="../public/imgs/Icon-Twitter.svg" alt="" /></li>
                            <li><img src="../public/imgs/icon-instagram.svg" alt="" /></li>
                            <li><img src="../public/imgs/Icon-Linkedin.svg" alt="" /></li>
                        </ul>
                    </Col>
                </Row>
                <div className="mt-6 pt-3 position-relative">
                    <Bullets />
                </div>
                <div className="my-6">
                    <Services />
                </div>
        </Container>
        </>
    );
}

export default AboutUs;