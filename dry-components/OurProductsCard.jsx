import { Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../src/store/explore-our-products/cartSlice";
import { Link } from "react-router-dom"
import { addToWishList, removeFromWishList } from "../src/store/explore-our-products/wishlistSlice";
import { FaHeart } from "react-icons/fa";

function OurProductsCard({product}) {
    const dispatch = useDispatch();
    const wishlist = useSelector((state) => state.wishlist.wishlistItems);
    const isInWishlist = wishlist.some((item) => item.id === product.id);
    const user = useSelector((state) => state.authSlice.user);
    const hadleHeartClick = () => {
        if (!user) {
            window.alert("You should login or register to access adding to cart");
            return;
        }
        if (isInWishlist) {
            dispatch(removeFromWishList(product.id));
        } else {
            dispatch(addToWishList(product));
        }
    }
    const handleAddToCart = () => {
        if (!user) {
            window.alert("You should login or register to access adding to cart");
            return;
        }
        dispatch(addToCart(product));
    }

    return (
    <Col xs ={12} sm="6" md="4" lg="3" className="product-card">
        <div className="card-head bg-grey d-flex justify-content-center align-items-center rounded-1 position-relative">
            <Link to={`/productdetails/${product.id}`}><img src={product.image} alt="" width={172}/></Link>
            {product.isNew && <div className="new position-absolute green">New</div>}

                <ul className="shapes position-absolute">
                    <li style={{cursor: "pointer"}} onClick={() => {hadleHeartClick()}}>
                        {isInWishlist? <FaHeart size={24} className={"txt-orange"} /> : <img src="/imgs/Wishlist.svg" alt="" />}
                    </li>
                    <li>
                        <img src="/imgs/Cart1.svg" alt="" />
                    </li>
                </ul>

                <div className="bg-black text-light position-absolute text-center fs-16 fw-medium w-100 py-2 add" onClick={() => {handleAddToCart()}}>
                    Add To Cart
                </div>
        </div>
        <div className="card-body">
            <span className="fs-16 fw-semibold d-block mt-2">{product.title}</span>
            <div className="stars mt-2 d-flex align-items-end gap-1">
                <div className="price mt-2 lh-1 fs-16 fw-semibold txt-orange">
                    ${product.price}
                </div>
                <ul className="d-flex gap-1">
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                </ul>
                <span className="txt-grey fw-bolder ps-2 fs-14">({product.rating.count})</span>
            </div>
        </div>
                {product.circleColor &&
                <div className="colors mt-3 d-flex gap-2">
                    <span className="first-color rounded-circle d-inline-block ms-1" style={{backgroundColor: product.circleColor}}></span>
                    <span className="orange rounded-circle d-inline-block"></span>
                </div>
                }
    </Col>
    );
}

export default OurProductsCard;