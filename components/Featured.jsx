import { Container, Row, Col } from "react-bootstrap";
import Arrows from "../shapes-components/Arrows";
import MainBtn from "../shapes-components/MainBtn";
import OurProductsCard from "../dry-components/OurProductsCard";
import Services from "../dry-components/Services";

function Featured() {
    return (
    <Container className="new-arrival py-5 main-border-bottom position-relative">
        <div className="featured d-flex align-items-center txt-orange todays">
            <span className="orange me-2 d-inline-block"></span>
            Featured
        </div>
        <div className="d-flex justify-content-between mt-2">
            <span className="fs-32 fw-semibold">New Arrival</span>
        </div>
        <Row className="collection my-5 gap-4">
            <Col xs={12} lg="6" className="playstation bg-black p-4 rounded text-light d-flex flex-column justify-content-end">
                <h4 className="fw-semibold mb-3">PlayStation 5</h4>
                <p className="fs-14 mb-3">Black and White version of the PS5 coming out on sale.</p>
                <a href="" className="fs-16">Shop Now</a>
            </Col>
            <Col xs={12} lg="5" className="p-0">
                <div className="womens bg-black p-4 rounded text-light d-flex flex-column justify-content-end mb-4">
                    <h4 className="fw-semibold mb-3">Women’s Collections</h4>
                    <p className="fs-14 mb-3">Featured woman collections that give you another vibe.</p>
                    <a href="" className="fs-16">Shop Now</a>
                </div>
                <div className="sp-per d-flex">
                    <div className="sp bg-black p-4 rounded text-light d-flex flex-column justify-content-end me-4 w-50">
                        <h2>Speaker</h2>
                        <p className="fs-14 mb-3">Amazon wireless speakers</p>
                        <a href="" className="fs-16">Shop Now</a>
                    </div>
                    <div className="per bg-black p-4 rounded text-light d-flex flex-column justify-content-end w-50">
                        <h2>Perfume</h2>
                        <p className="fs-14 mb-3">GUCCI INTENSE OUD EDP</p>
                        <a href="" className="fs-16">Shop Now</a>
                    </div>
                </div>
            </Col>
        </Row>
        <span className="arrow-up position-absolute"><img src="../public/imgs/icons_arrow-left.svg" alt="" /></span>
        <Services />
    </Container>
    );
}

export default Featured;