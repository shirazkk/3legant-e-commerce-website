import NotificationBar from "./components/notificationbar";
import Navbar from "./components/navbar";
import Hero from "./components/herosection";
import GridBanner from "./components/bannergrid";
import ProductSection from "./components/productsection";
import ValuesSection from "./components/valuessection";
import SecondBanner from "./components/secondbanner";
import Blog from "./components/blogsection";
import NewsLetter from "./components/newsletter";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <NotificationBar/>
      <Navbar/>
      <Hero/>
      <GridBanner/>
      <ProductSection/>
      <ValuesSection/>
      <SecondBanner/>
      <Blog/>
      <NewsLetter/>
      <Footer/>
       
     {/* <div className="h-screen m-7">
      <Link  className="bg-black text-white rounded-md p-3 m-5 " href="/signup">Sign-Up</Link>
      <Link  className="bg-black text-white rounded-md p-3 m-5 " href="/signin">Sign-In</Link>
      
     </div> */}
     </main>
  );
}
