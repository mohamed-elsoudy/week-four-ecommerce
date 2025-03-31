import { Container, Button, Row } from "react-bootstrap";
import WishlistCard from "../dry-components/WishlistCard";
import { useSelector } from "react-redux";


function Wishlist() {
    const wishlist = useSelector((state) => state.wishlist.wishlistItems);
    return (
        <Container className="py-5">
            <div className="my-5 wishlist-items">
                <div className="d-flex justify-content-between align-items-center">
                    <span className="fs-5 fw-normal">Wishlist ( {wishlist.length} )</span>
                    <Button variant="white" className="px-5 py-3 border-black ms-auto me-0 me-lg-5">Move All To Bag</Button>
                </div>
                <Row className="gap-5 mt-5 justify-content-center justify-content-lg-start">
                    {
                        wishlist.map((item, i) => (
                            <WishlistCard
                            key={i}
                            id={item.id}
                            imgSrc={item.imgSrc || item.image}
                            iconSrc="/imgs/tras.png" 
                            isNew={false} 
                            title={item.title} 
                            price={item.price} 
                            isDescountperc={true} 
                            descountperc={40} 
                            sale={1160}
                            />
                        ))
                    }
                </Row>
            </div> 
            <div className="my-5 just-for-you-items">
                <div className="d-flex justify-content-between align-items-center">           
                    <div className="d-flex align-items-center">
                        <span className="orange me-2 d-inline-block just-shape"></span>
                        Just For You
                    </div>
                    <Button variant="white" className="px-5 py-3 border-black ms-auto me-0 me-lg-5">See All</Button>
                </div>
                <Row className="gap-5 mt-5 justify-content-center justify-content-lg-start">
                    <WishlistCard
                    imgSrc="/imgs/laabtop.png"
                    iconSrc="/imgs/eye.png" 
                    isNew={false} 
                    title="ASUS FHD Gaming Laptop" 
                    price={960} 
                    isDescountperc={true} 
                    descountperc={40} 
                    sale={1160}
                    stars={true}
                    rate={65}
                    />
                    <WishlistCard
                    imgSrc="/imgs/screen.png"
                    iconSrc="/imgs/eye.png" 
                    isNew={false} 
                    title="IPS LCD Gaming Monitor" 
                    price={1960}
                    stars={true}
                    rate={65} 
                    />
                    <WishlistCard
                    imgSrc="/imgs/joystake (4).png"
                    iconSrc="/imgs/eye.png" 
                    isNew={true} 
                    title="HAVIT HV-G92 Gamepad"
                    price={560}
                    stars={true}
                    rate={65} 
                    />
                    <WishlistCard
                    imgSrc="/imgs/keyboard.png"
                    iconSrc="/imgs/eye.png" 
                    isNew={false} 
                    title="AK-900 Wired Keyboard"
                    price={200}
                    stars={true}
                    rate={65} 
                    />
                </Row>
            </div> 
        </Container>
    );
}

export default Wishlist;