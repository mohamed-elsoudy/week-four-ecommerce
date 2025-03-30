import Overview from "../components/Overview";
import Todays from "../components/Todays";
import Categories from "../components/Categories";
import ThisMonth from "../components/ThisMonth";
import EnhanceMusic from "../components/EnhanceMusic";
import OurProducts from "../components/OurProducts";
import Featured from "../components/Featured";
function HomePage() {
    return (
        <>
        <Overview />
        <Todays />
        <Categories />
        <ThisMonth />
        <EnhanceMusic />
        <OurProducts />
        <Featured />
        </>
    );
}

export default HomePage;