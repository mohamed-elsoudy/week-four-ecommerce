import { Container } from "react-bootstrap";
import Arrows from "../shapes-components/Arrows";
import CateogryCard from "../dry-components/CateogryCard"

function Categories() {
    return (
        <Container className="ctegories py-5 main-border-bottom">
            <div className="todays d-flex align-items-center txt-orange">
                <span className="orange me-2 d-inline-block"></span>
                Categories
            </div>
            <div className="d-flex justify-content-between mt-2">
                <span className="fs-32 fw-semibold">Browse By Category</span>
                <Arrows></Arrows>
            </div>
            <div className="d-flex mt-4 category-cards pt-5 gap-4">
                <CateogryCard content="Phones" src="../public/imgs/categories/mobile.svg" />
                <CateogryCard content="Computers" src="../public/imgs/categories/Category-Computer.svg" />
                <CateogryCard content="Smart Watches" src="../public/imgs/categories/Category-SmartWatch.svg" />
                <CateogryCard content="Head Phones" src="../public/imgs/categories/Category-Headphone.svg" />
                <CateogryCard content="Gaming" src="../public/imgs/categories/gaming.svg" />
            </div>
        </Container>
    );
}

export default Categories;