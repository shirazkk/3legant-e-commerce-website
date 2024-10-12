import Footer from "../components/footer";
import Navbar from "../components/navbar";
import NewsLetter from "../components/newsletter";
import NotificationBar from "../components/notificationbar";
import ShopHeroSection from "../components/shop_herosection";
import ShopProducts from "../components/shop_productsection";

export default function ShopPage(){
    return(
        <main>
            <NotificationBar/>
            <Navbar/>
            <ShopHeroSection/>
            <ShopProducts/>
             <NewsLetter/>
             <Footer/>
        </main>
    )
}