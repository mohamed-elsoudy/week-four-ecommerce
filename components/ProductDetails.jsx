import { Container, Breadcrumb, Row, Col, Button } from "react-bootstrap";
import Card from "../dry-components/Card";
import { useParams } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../src/store/explore-our-products/allProductsSlice";

function ProductDetails() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const allProducts = useSelector(state => state.allProductsSlice);
    const todaysProducts = useSelector(state => state.products.todaysProducts);
    const thismonthProducts = useSelector(state => state.products.thismonthProducts);
    const exploreProducts = useSelector(state => state.products.exploreProducts);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch])

    let product;
    if (allProducts.find((product) => product.id == id)) {
        product = allProducts.find((product) => product.id == id);
    } else if (todaysProducts.find((product) => product.id == id)) {
        product = todaysProducts.find((product) => product.id == id);
    } else if (thismonthProducts.find((product) => product.id == id)) {
        product = thismonthProducts.find((product) => product.id == id);
    } else {
        product = exploreProducts.find((product) => product.id == id);
    }
    // console.log(product);
    return (
        <Container className="product-details py-6">
                <Breadcrumb className="txt-black bread-crumb">
                    <Breadcrumb.Item href="#">Account</Breadcrumb.Item>
                    <Breadcrumb.Item href="#">{product.category}</Breadcrumb.Item>
                    <Breadcrumb.Item active>{product.title}</Breadcrumb.Item>
                </Breadcrumb>
                <Row className="product mt-6 gap-4">
                    <Col xs={12} lg="7" className="product-imgs d-flex gap-4">
                        <ul className="vertical-imgs d-flex flex-column gap-4">
                            <li className="bg-grey rounded p-4"><img src="/imgs/image 57.png" alt="" /></li>
                            <li className="bg-grey rounded p-4"><img src="/imgs/image 58.png" alt="" /></li>
                            <li className="bg-grey rounded p-4"><img src="/imgs/image 61.png" alt="" /></li>
                            <li className="bg-grey rounded p-4"><img src="/imgs/image 59.png" alt="" /></li>
                        </ul>
                        <div className="product-img bg-grey rounded d-flex align-items-center p-4 w-100">
                            <img src="/imgs/image 63.png" className="w-100" alt="" />
                        </div>
                    </Col>
                    <Col xs={12} lg="4" className="product-data text-black">
                        <h2 className="fs-4">{product.title}</h2>
                        <div className="rate d-flex gap-3 mt-3">
                            <img src="/imgs/Four Star.svg" alt="" />
                            <span className="txt-grey">({product.rating.count} Reviews)</span>
                            <span>|</span>
                            <span className="txt-green">In Stock</span>
                        </div>
                        <div className="fs-24">${product.price}</div>
                        <p className="pb-4 pt-3 border-bottom">{product.description}.</p>
                        <div className="colours d-flex align-items-center gap-3">
                            <span className="fs-5">Colours:</span>
                            <ul className="d-flex gap-3">
                                <li className=""></li>
                                <li className="chosen"></li>
                            </ul>
                        </div>
                        <div className="sizes d-flex align-items-center gap-3 mt-4">
                            <span className="fs-5">Size:</span>
                            <ul className="d-flex gap-3">
                                <li className="">XS</li>
                                <li className="chosen">S</li>
                                <li className="">M</li>
                                <li className="">L</li>
                                <li className="">XL</li>
                            </ul>
                        </div>
                        <div className="buy d-flex flex-wrap align-items-center gap-3 mt-4">
                            <div className="quant d-flex">
                                <span className=""><img src="/imgs/mince.svg" alt="" /></span>
                                <span className="num">1</span>
                                <span className="orange"><img src="/imgs/plus.svg" alt="" /></span>
                            </div>
                            <Button variant="danger">Buy Now</Button>
                            <div className="fav">
                                <img src="/imgs/fav.svg" alt="" />
                            </div>
                        </div>
                        <div className="delv main-border rounded mt-5">
                            <div className="p-3 main-border-bottom d-flex gap-3">
                                <img src="/imgs/Icon-delivery.svg" alt="" />
                                <div className="fw-semibold">
                                    <p className="mb-2">Free Delivery</p>
                                    <p className="fs-14 text-decoration-underline">Enter your postal code for Delivery Availability</p>
                                </div>
                            </div>
                            <div className="p-3 main-border-bottom d-flex gap-3">
                                <img src="/imgs/Icon-return.svg" alt="" />
                                <div className="fw-semibold">
                                    <p className="mb-2">Return Delivery</p>
                                    <p className="fs-14 text-decoration-underline">Free 30 Days Delivery Returns. Details</p>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <div className="related d-flex align-items-center txt-orange">
                    <span className="orange me-2 d-inline-block"></span>
                    Related Item
                </div>
                <div className="related-products d-flex gap-4 mt-5 mb-4 over-flow">
                    {todaysProducts.map((product, i) => {
                        return <Card key={i} product={product}/>
                    })}
                </div>
        </Container>
    );
}

export default ProductDetails;