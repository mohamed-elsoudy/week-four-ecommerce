import { Container, Row } from "react-bootstrap";
import Arrows from '../shapes-components/Arrows';
import OurProductsCard from "../dry-components/OurProductsCard";
import MainBtn from "../shapes-components/MainBtn";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function OurProducts() {
    const allProducts = useSelector(state => state.products.exploreProducts);
    
    return (
    <Container className="explore-products py-5 main-border-bottom">
        <div className="our-products d-flex align-items-center txt-orange todays">
            <span className="orange me-2 d-inline-block"></span>
            Our Products
        </div>
        <div className="d-flex justify-content-between mt-2">
            <span className="fs-32 fw-semibold">Explore Our Products</span>
            <Arrows></Arrows>
        </div>
        <Row className="d-flex mt-4 pt-5 gap-4 justify-content-center">
            {allProducts.map((product, i) => (
                <OurProductsCard key={i} product={product}/>
            ))}
        </Row>
        <div className="text-center my-4">
            <Link to="allproducts">
                <MainBtn content="View All Products"/>
            </Link>
        </div>
    </Container>
    );
}

export default OurProducts;