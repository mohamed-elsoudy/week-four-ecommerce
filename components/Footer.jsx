import { Container, Row } from "react-bootstrap";

function Footer() {
    return (
        <>
            <footer className="bg-black text-light">
                <Container className="">
                    <Row className="footer">
                    <div className="exclusive col-12 col-sm-6 col-md-4 col-xl-auto">
                        <h5 className="fs-24">Exclusive</h5>
                        <ul className="lh-lg mt-2">
                            <li className="mt-3 fs-20">Subscribe</li>
                            <li className="mt-2 fs-16 fw-normal">Get 10% off your first order</li>
                            <li className="exclusive-input position-relative mt-2">
                                <img src="/imgs/icon-send.png" className="icon-send" alt="" />
                                <input type="email" placeholder="Enter your email" className=""/>
                            </li>
                        </ul>
                    </div>
                    <div className="services col-12 col-sm-5 col-md-4 col-xl-2">
                        <h5 className="c-white fs-20 fw-semibold">Support</h5>
                        <ul className="lh-lg mt-4 fs-16">
                            <li className="lh-sm">111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
                            <li className="mt-3">exclusive@gmail.com</li>
                            <li className="mt-2">+88015-88888-9999</li>
                        </ul>
                    </div>
                    <div className="services col-12 col-sm-6 col-md-3 col-xl-auto">
                        <h5 className="c-white fs-20 fw-semibold">Account</h5>
                        <ul className="lh-lg mt-4 fs-16">
                            <li className="mt-3">My Account</li>
                            <li className="mt-2">Login / Register</li>
                            <li className="mt-2">Cart</li>
                            <li className="mt-2">Wishlist</li>
                            <li>Shop    </li>
                        </ul>
                    </div>
                    <div className="services col-12 col-sm-5 col-xl-auto">
                        <h5 className="c-white fs-20 fw-semibold">Quick Link</h5>
                        <ul className="lh-lg mt-4 fs-16">
                            <li className="mt-2">Privacy Policy</li>
                            <li className="mt-2">Terms Of Use</li>
                            <li className="mt-2">FAQ</li>
                            <li className="mt-2">Contact</li>
                        </ul>
                    </div>
                    <div className="services col-12 col-sm-6 col-xl-3">
                        <h5 className="c-white fs-20 fw-semibold">Download App</h5>
                        <p className="mt-4">Save $3 with App New User Only</p>
                        <div className="d-flex gap-3">
                            <img src="/imgs/Qr Code.png" alt="" />
                            <div className="download d-flex flex-column">
                                <img src="/imgs/google.png" alt="" className="mb-3"/>
                                <img src="/imgs/download-appstore.png" alt=""/>
                            </div>
                        </div>
                        <ul className="d-flex gap-4 mt-4">
                            <li><a href=""><img src="/imgs/Icon-Facebook.png" alt="" /></a></li>
                            <li><a href=""><img src="/imgs/Icon-Twitter.png" alt="" /></a></li>
                            <li><a href=""><img src="/imgs/icon-instagram.png" alt="" /></a></li>
                            <li><a href=""><img src="/imgs/Icon-linkedin.png" alt="" /></a></li>
                        </ul>
                    </div>
                    </Row>
                </Container>
            </footer>
            <div className="copy-right text-center txt-grey bg-black p-4 border-top border-dark">
                &copy;Copyright Rimel 2022. All right reserved
            </div>
        </>
    );
}

export default Footer;