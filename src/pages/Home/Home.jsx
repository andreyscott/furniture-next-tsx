import React from "react";

import "./index";

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

const Home = () => {
  return (
    <main>
      <CarouselHome />
    <Stats />
    {/* <NewIn */}
      <CarouselListProduct />
      <OurProducts />
    <NewInStore />
      <Proud />
      <Banner />
      <News />
      <Main />
      {/* <Video /> */}
    </main>
  );
};

export default Home;
