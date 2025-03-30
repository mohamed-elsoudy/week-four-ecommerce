import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../src/store/explore-our-products/cartSlice";
import { Link } from "react-router-dom";
import { addToWishList, removeFromWishList } from "../src/store/explore-our-products/wishlistSlice";
import { FaHeart } from "react-icons/fa";

function Card({imgSrc, title, price, afterDiscount, rate, descountperc, sale, isDescountperc, id , product = {imgSrc, title, id, price, rate, sale}}) {

    const dispatch = useDispatch();
    const user = useSelector((state) => state.authSlice.user);
    const wishlist = useSelector((state) => state.wishlist.wishlistItems);
    const isInWishlist = wishlist.some((item) => item.id === product.id);
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
        <div className="product-card">

            <div className="card-head bg-grey d-flex justify-content-center align-items-center rounded-1 position-relative">
                <Link to={`/productdetails/${product.id}`}>
                    <img src={imgSrc} alt="" width={172}/>
                </Link>

                {isDescountperc == true && <div className="percent position-absolute orange">-{descountperc}%</div>}

                <ul className="shapes position-absolute">
                    <li style={{cursor: "pointer"}} onClick={() => {hadleHeartClick()}}>
                        {isInWishlist? <FaHeart size={24} className={"txt-orange"} /> : <img src="../public/imgs/Wishlist.svg" alt="" />}
                    </li>
                    <li>
                        <img src="../public/imgs/Cart1.svg" alt="" />
                    </li>
                </ul>

                <div className="bg-black text-light position-absolute text-center fs-16 fw-medium w-100 py-2 add" onClick={() => {handleAddToCart()}}>
                    Add To Cart
                </div>
            </div>

            <div className="card-body">
                <span className="fs-16 fw-semibold d-block mt-2">{title}</span>
                <div className="price mt-2 fs-16 fw-semibold txt-orange">
                    ${afterDiscount}{sale &&  <del className="txt-grey ps-2">${price}</del>}
                </div>
                <div className="stars mt-2 d-flex gap-1">
                    <ul className="d-flex gap-1">
                        <li><img src="../public/imgs/star.svg" alt="" /></li>
                        <li><img src="../public/imgs/star.svg" alt="" /></li>
                        <li><img src="../public/imgs/star.svg" alt="" /></li>
                        <li><img src="../public/imgs/star.svg" alt="" /></li>
                        <li><img src="../public/imgs/star.svg" alt="" /></li>
                    </ul>
                    <span className="txt-grey fw-bolder ps-2 fs-14">({rate})</span>
                </div>
            </div>

        </div>
    );
}

export default Card;