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
const Home = () => {
  return (
    <main>
      <CarouselHome />
    <Stats />
    {/* <NewIn */}
    <NewInStore />
      <CarouselListProduct />
      <OurProducts />
      <Proud />
      <Banner />
      <News />
    </main>
  );
};

export default Home;
