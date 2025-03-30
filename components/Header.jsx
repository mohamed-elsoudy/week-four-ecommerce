import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import Wishlist from './Wishlist';

function Header() {
    const user = useSelector((state) => state.authSlice);
    const cartitems = useSelector((state) => state.cartSlice);
    const wishlist = useSelector((state) => state.wishlist.wishlistItems);
    return (
    <>
    <div className="header py-3">
        <Container className='d-flex up-header'>
            <div className='text-center flex-grow-1 fs-14'>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
            <a href="" className='ps-2 fw-semibold text-decoration-underline'>ShopNow</a>
            </div>
            <form action="" className='d-inline-block'>
                <select name="lang" id="lang" className='bg-black text-light'>
                    <option value="eng">English</option>
                </select>
            </form>
        </Container>
    </div>
    <div className="bottom-header d-flex align-items-end main-border-bottom sticky-top">
        <Navbar expand="lg" className="flex-grow-1">
            <Container>
                <Navbar.Brand as={Link} to="/" className='fw-bolder fs-24'>Exclusive</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="nav-links my-2 my-lg-0"  
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="contact">Contact</Nav.Link>
                        <Nav.Link as={Link} to="aboutus" >About</Nav.Link>
                        <Nav.Link as={Link} to="signup">Sign Up</Nav.Link>
                    </Nav>
                    <Form className="d-flex ms-auto me-2">
                        <Form.Control
                        type="search"
                        placeholder="What are you locking for?"
                        className="me-2 search-bar  bg-grey"
                        aria-label="Search"
                        />
                        <img src="../public/imgs/Vector.svg" alt="" />
                    </Form>
                    <div className="icons d-flex gap-4 mt-2 mt-lg-0">
                        <Link to="wishlist">{wishlist.length > 0 && <span className='orange'>{wishlist.length}</span>}<img src="../public/imgs/Wishlist.svg" alt="" /></Link>
                        <Link to="cart">{cartitems.length > 0 && <span className='orange'>{cartitems.length}</span>}<img src="../public/imgs/Cart1.svg" alt="" /></Link>
                        {user.user && <Link to="account"><img src="../public/imgs/user.svg" alt="" /></Link>}
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
    </>
    );
}

export default Header;
