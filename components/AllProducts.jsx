import { Container, Row } from "react-bootstrap";
import Arrows from '../shapes-components/Arrows';
import OurProductsCard from "../dry-components/OurProductsCard";
import MainBtn from "../shapes-components/MainBtn";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../src/store/explore-our-products/allProductsSlice";

function AllProducts() {
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProductsSlice);
    // const CartItems = useSelector(state => state.cartSlice);
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
            <OurProductsCard imgSrc="../public/imgs/dog.png" isNew={false} title="Breed Dry Dog Food" price={100} rate={35} circleColor={false} id={31}/>
            <OurProductsCard imgSrc="../public/imgs/camera.png" isNew={false} title="CANON EOS DSLR Camera" price={360} rate={95} circleColor={false} id={32}/>
            <OurProductsCard imgSrc="../public/imgs/laabtop.png" isNew={false} title="ASUS FHD Gaming Laptop" price={700} rate={325} circleColor={false} id={33}/>
            <OurProductsCard imgSrc="../public/imgs/Frame 608 (1).png" isNew={false} title="Curology Product Set" price={500} rate={145} circleColor={false} id={34}/>
            <OurProductsCard imgSrc="../public/imgs/Frame 608 (1).png" isNew={true} title="Kids Electric Car" price={960} rate={65} circleColor={'red'} id={35}/>
            <OurProductsCard imgSrc="../public/imgs/stars.png" isNew={false} title="Jr. Zoom Soccer Cleats" price={1160} rate={35} circleColor={'red'} id={36}/>
            <OurProductsCard imgSrc="../public/imgs/joystake (4).png" isNew={true} title="GP11 Shooter USB Gamepad" price={660} rate={55} circleColor={'red'} id={37}/>
            <OurProductsCard imgSrc="../public/imgs/jacket.png" isNew={false} title="Quilted Satin Jacket" price={660} rate={55} circleColor={'red'} id={38}/>
        </Row>
    </Container>
    );
}

export default AllProducts;