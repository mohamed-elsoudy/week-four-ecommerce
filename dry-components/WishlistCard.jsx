import { Col } from "react-bootstrap";
import { removeFromWishList } from "../src/store/explore-our-products/wishlistSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../src/store/explore-our-products/cartSlice";

function WishlistCard({id, imgSrc, iconSrc, isNew, title, price, rate, stars, isDescountperc, descountperc, sale, product = {id, imgSrc, title, price, iconSrc}}) {
    const dispatch = useDispatch();
    return (        
    <Col xs={3} className="product-card">
        <div className="card-head bg-grey d-flex justify-content-center align-items-center rounded-1 position-relative">
            <img src={imgSrc} alt="" width={172}/>
            {isNew == true && <div className="new position-absolute green">New</div>}
            {isDescountperc == true && <div className="percent position-absolute orange">-{descountperc}%</div>}
            <img style={{cursor: "pointer"}} src={iconSrc} className="shapes position-absolute" alt="" onClick={() => {dispatch(removeFromWishList(product.id))}}/>
            <div className="bg-black text-light position-absolute text-center fs-16 fw-medium w-100 py-2 add" onClick={() => dispatch(addToCart(product))}>
                <span><img src="cartwheel.png" alt="" className=""/></span>
                Add To Cart</div>
        </div>
        <div className="card-body">
            <span className="fs-16 fw-semibold d-block mt-2">{title}</span>
            <div className="stars mt-2 d-flex align-items-end gap-1">
                <div className="price mt-2 lh-1 fs-16 fw-semibold txt-orange">
                    ${price}
                    {sale && <del className="txt-grey ps-2">{sale}$</del>}
                </div>
                {stars && 
                <ul className="d-flex gap-1">
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                    <li><img src="/imgs/star.svg" alt="" /></li>
                </ul>
                }
                {rate && <span className="txt-grey fw-bolder ps-2 fs-14">({rate})</span>}
            </div>
        </div>
    </Col>
    );
}

export default WishlistCard;
