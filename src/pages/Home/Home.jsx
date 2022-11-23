import React from "react";

import "./index";

// === Components ===
import CarouselHome from "../../components/CarouselHome/CarouselHome";
import CarouselListProduct from "../../components/CarouselListProduct/CarouselListProduct";
import OurProducts from "../../components/OurProducts/OurProducts";
import Banner from "../../components/Banner/Banner";
import News from "../../components/News/News";
import Stats from "../../Stats";
const Home = () => {
  return (
    <main>
      <CarouselHome />
    <Stats />
    {/* <NewIn */}
      <CarouselListProduct />
      <OurProducts />
      <Banner />
      <News />
    </main>
  );
};

export default Home;
