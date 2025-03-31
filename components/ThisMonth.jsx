import { Container, Row, Col } from "react-bootstrap";
import MainBtn from "../shapes-components/MainBtn";
import Card from "../dry-components/Card";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
function ThisMonth() {
const products = useSelector(state => state.products.thismonthProducts) 
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
                {products.map((product, i) => {
                    <Card key={i} product={product}/>
                })}
            </div>
        </Container>
    );
}

export default ThisMonth;