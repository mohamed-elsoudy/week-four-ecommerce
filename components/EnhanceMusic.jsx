import { Container, Row, Col } from "react-bootstrap";

function EnhanceMusic() {
    return (
        <div className="enhance-music py-4">
            <Container className="p-5 bg-black d-flex">
                <Row>
                    <Col xs={12} lg="4" className="data">
                            <span className="fs-16 fw-semibold txt-green">Categories</span>
                            <h2 className="fw-semibold text-light my-4 lh-sm fs-48">Enhance Your Music Experience</h2>
                            <div className="music-counter my-4 d-flex">    
                                <div className="circle rounded-circle bg-white text-black">
                                    <div className="fs-16 fw-bolder">23</div>
                                    <div className="fs-12 fw-semibold">Hours</div>
                                </div>
                                <div className="circle rounded-circle bg-white text-black">
                                    <div className="fs-16 fw-bolder">05</div>
                                    <div className="fs-12 fw-semibold">Days</div>
                                </div>
                                <div className="circle rounded-circle bg-white text-black">
                                    <div className="fs-16 fw-bolder">59</div>
                                    <div className="fs-12 fw-semibold">Minuets</div>
                                </div>
                                <div className="circle rounded-circle bg-white text-black">
                                    <div className="fs-16 fw-bolder">35</div>
                                    <div className="fs-12 fw-semibold">Seconds</div>
                                </div>
                            </div>
                            <button className="green text-light border-none py-3 px-5 rounded">Buy Now</button>
                    </Col>
                    <Col className="d-none d-lg-flex justify-content-end" xs={8}>
                        <img src="../public/imgs/Frame 694.png" width={600} height={420} alt="" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default EnhanceMusic;