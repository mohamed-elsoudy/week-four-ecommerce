import { Container, Row, Col, Button } from "react-bootstrap";
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Contact() {
    return (
    <Container className="pt-5 pb-6 mb-6 contact text-black">
        <Breadcrumb className="txt-black bread-crumb">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Contact</Breadcrumb.Item>
        </Breadcrumb>
        <Row className="mt-5 justify-content-start gap-4">
                <Col xs={12} md="3" className="shadow-sm p-4">
                    <h2 className="fs-6 fw-medium"><img src="../public/imgs/icons-phone.png" alt="" className="me-3" />Call To Us</h2>
                    <ul className="fs-16 fw-normal mt-3 border-solid-bottom">
                        <li className="mb-2">We are available 24/7, 7 days a week.</li>
                        <li className="mb-4">Phone: +8801611112222</li>
                    </ul>
                    <h2 className="fs-6 fw-medium mt-4"><img src="../public/imgs/icons-mail.png" alt="" className="me-3" />Write To Us</h2>
                    <ul className="fs-16 fw-normal mt-3">
                        <li className="mb-3 lh-sm">Fill out our form and we will contact you within 24 hours.</li>
                        <li className="mb-4">Emails: customer@exclusive.com</li>
                        <li className="mb-4">Emails: support@exclusive.com</li>
                    </ul>
                </Col>
                <Col xs={12} md="8" className="px-4 py-4 shadow-sm">
                        <div className="details fw-normal d-flex flex-column flex-md-row column-gap-4 row-gap-2">
                            <div className="your-name w-100">
                                <input className="w-100 ps-3" type="text" placeholder="Your Name *" />
                            </div>
                            <div className="your-email w-100">
                                <input className="w-100 ps-3" type="email" placeholder="Your Email *" />
                            </div>
                            <div className="your-phone w-100">
                                <input className="w-100 ps-3" type="text" placeholder="Your Phone *" />
                            </div>
                        </div>

                        <textarea name="" className="d-block my-4" placeholder="Your Message" id=""></textarea>

                        <div className="send ms-auto fs-16">
                            <Button variant="danger" type="submit" className="py-3 px-5 ">Send Messages</Button>
                        </div>
                </Col>
            </Row>
    </Container>
    );
}

export default Contact;