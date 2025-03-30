import { Container, Row, Col } from "react-bootstrap";
import MainBtn from "../shapes-components/MainBtn";
import Card from "../dry-components/Card";
import { Link } from "react-router-dom";

function ThisMonth() {
    return (
        <Container className="py-5 main-border-bottom">
            <div className="todays d-flex align-items-center txt-orange">
                <span className="orange me-2 d-inline-block"></span>
                This Month
            </div>
            <div className="flash mt-2">
                <Row className="row-gap-4">
                    <Col xs={8} className="fs-32 fw-semibold mt-2 mt-md-0">Best Selling Products</Col>
                    <Col xs={12} md="4"className="d-flex justify-content-start justify-content-md-end">
                        <Link to="allproducts"><MainBtn content="View All" /></Link>
                    </Col>
                </Row>
            </div>
            <div className="today-products d-flex gap-4 my-4">
                <Card imgSrc="../public/imgs/Frame 605.png" title="The north coat" price={360} afterDiscount={260} rate={65} descountperc={0} sale={true} isDescountperc={false} id={45}/>
                <Card imgSrc="../public/imgs/Frame 606.png" title="Gucci duffle bag" price={1160} afterDiscount={960} rate={75} descountperc={35} sale={true} isDescountperc={false} id={46}/>
                <Card imgSrc="../public/imgs/Frame 610.png" title="RGB liquid CPU Cooler" price={170} afterDiscount={160} rate={99} descountperc={25} sale={true} isDescountperc={false} id={47}/>
                <Card imgSrc="../public/imgs/Frame 612.png" title="Small BookSelf" price={400} afterDiscount={370} rate={99} descountperc={30} sale={true} isDescountperc={false} id={48}/>
            </div>
        </Container>
    );
}

export default ThisMonth;