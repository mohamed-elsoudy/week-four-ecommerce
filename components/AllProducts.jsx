import { Container, Row } from "react-bootstrap";
import Arrows from '../shapes-components/Arrows';
import OurProductsCard from "../dry-components/OurProductsCard";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../src/store/explore-our-products/allProductsSlice";

function AllProducts() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProductsSlice);
    const OurProducts = useSelector(state => state.products.exploreProducts);
    // console.log(CartItems);
    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    return (
    <Container className="explore-products py-5 main-border-bottom">
        <div className="our-products d-flex align-items-center txt-orange todays">
            <span className="orange me-2 d-inline-block"></span>
            All Products
        </div>
        <div className="d-flex justify-content-between mt-2">
            <span className="fs-32 fw-semibold">Explore Our Products</span>
            <Arrows></Arrows>
        </div>
        <Row className="d-flex mt-4 pt-5 gap-4 justify-content-center">
            {allProducts.map((product) => {
                return  <OurProductsCard key={product.id} imgSrc={product.image} isNew={false} title={product.title} price={product.price} rate={product.rating.count} circleColor={false} product={product}/>
            })}
            {OurProducts.map((product) => {
                return <OurProductsCard key={product.id} product={product}/>
            })}
        </Row>
    </Container>
    );
}

export default AllProducts;