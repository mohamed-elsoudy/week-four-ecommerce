import { Container, Row, Col } from "react-bootstrap";
import Arrows from "../shapes-components/Arrows";
import Card from "../dry-components/Card";
import MainBtn from "../shapes-components/MainBtn";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Todays() {
    const products = useSelector((state) => state.products);

    return (
        <Container className="pb-5 main-border-bottom">
            <div className="todays d-flex align-items-center txt-orange">
                <span className="orange me-2 d-inline-block"></span>
                Todays
            </div>
            <div className="flash">
                <Row className="align-items-end row-gap-4">
                    <Col xs={12} md="3" className="fs-32 fw-semibold">Flash Sales</Col>
                    <Col xs={8} md="7">
                        <div className="counter d-flex align-items-center">
                            <div className="unit">
                                <span className="fs-12 d-block fw-semibold">Days</span>
                                <span className="fs-32 fw-semibold">03</span>
                            </div>
                            <div className="columns ms-2 me-2">
                                <span className="column orange"></span>
                                <span className="column orange"></span>
                            </div>
                            <div className="unit ms-1 me-1">
                                <span className="fs-12 d-block fw-semibold">Hours</span>
                                <span className="fs-32 fw-semibold">23</span>
                            </div>
                            <div className="columns ms-2 me-2">
                                <span className="column orange"></span>
                                <span className="column orange"></span>
                            </div>
                            <div className="unit">
                                <span className="fs-12 d-block fw-semibold">Minuets</span>
                                <span className="fs-32 fw-semibold">19</span>
                            </div>
                            <div className="columns ms-2 me-2">
                                <span className="column orange"></span>
                                <span className="column orange"></span>
                            </div>
                            <div className="unit ms-1 me-1">
                                <span className="fs-12 d-block fw-semibold">Seconds</span>
                                <span className="fs-32 fw-semibold">56</span>
                            </div>
                        </div>
                    </Col>
                    <Col xs={4} md="2" className="">
                        <Arrows />
                    </Col>
                </Row>
            </div>
            <div className="today-products d-flex gap-4 my-4">
                {/* <Card imgSrc="../public/imgs/joystake (4).png" title="HAVIT HV-G92 Gamepad" price={120} afterDiscount={160} rate={88} descountperc={40} sale={true} isDescountperc={true}/>
                <Card imgSrc="../public/imgs/Keyboard.png" title="AK-900 Wired Keyboard" price={1160} afterDiscount={960} rate={75} descountperc={35} sale={true} isDescountperc={true}/>
                <Card imgSrc="../public/imgs/chair.png" title="S-Series Comfort Chair" price={400} afterDiscount={375} rate={99} descountperc={25} sale={true} isDescountperc={true}/>
                <Card imgSrc="../public/imgs/screen.png" title="IPS LCD Gaming Monitor" price={400} afterDiscount={370} rate={99} descountperc={30} sale={true} isDescountperc={true}/> */}
                {products.map((el , index) =>
                <Card
                    key={index}
                    imgSrc={el.imgSrc} 
                    title={el.title} 
                    price={el.price} 
                    afterDiscount={el.afterDiscount} 
                    rate={el.rate} 
                    descountperc={el.descountperc} 
                    sale={el.sale} 
                    isDescountperc={el.isDescountperc} 
                    id={index + 40}
                />)}
            </div>
            <div className="text-center">
                <Link to="allproducts"><MainBtn content="View All Products"/></Link>
            </div>
        </Container>
    );
}

export default Todays;