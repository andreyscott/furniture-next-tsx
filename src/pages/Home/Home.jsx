import React,{useEffect} from "react";

import "./index";
// Aos 
import AOS from 'aos';
import 'aos/dist/aos.css';

// === Components ===
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import CarouselListProduct from "../../components/CarouselListProduct/CarouselListProduct";
import OurProducts from "../../components/OurProducts/OurProducts";
import Banner from "../../components/Banner/Banner";
import News from "../../components/News/News";
import Stats from "../../Stats";
import NewInStore from "../../components/newInStore/new-in-store";
import Proud from "../../components/Proud";
// import BottomVideo from "../../components/video";
// import Video from "../../components/video/video";
import Main from "../../components/video/test";
import Features from "../../components/Features";
// import BlogHeader from "../../components/BlogHeader";
import About from "../../components/HomeAbout/About";
import BottomBanner from "../../components/bottomBanner/Banner";



const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: false,
    });
  }, []);
  return (
    <main>
      <CarouselHome />
    <Stats />
    {/* <NewIn */}

      <CarouselListProduct />
      <Features />
      <OurProducts />
    <NewInStore />
      <Proud />
      <About />
      <Banner />
      <News />
      {/* <BlogHeader /> */}
      <BottomBanner />

      <Main />
    </main>
  );
};

export default Home;
