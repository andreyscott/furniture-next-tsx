import React from "react";
import { Slider, SliderContainer, Description } from "./index";
import slider1 from "../../assets/images/slider/slider-1.png";
import slider2 from "../../assets/images/slider/slider-2.png";
import slider3 from "../../assets/images/slider/room.png";
import slider4 from "../../assets/images/slider/sofa-bg.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
// === Components ===
import BtnLink from "../../subComponents/BtnLink/BtnLink";

const CarouselHome = () => {
  return (
    <section>
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[ Pagination, Navigation]}
        className="mySwiper carouselMain"
      >
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider1} alt="slider1" />
              <Description>
                <h4>New Products</h4>
                <h2>Flexible Chair</h2>
                <p>
                We invite you to visit our showroom to see our wide range of stylish and contemporary furniture for every room in your home.
              
                </p>
                <BtnLink to="/shop">Shop Now</BtnLink>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider2} alt="slider2" />
              <Description>
                <h4>Best Seller</h4>
                <h2>Creative Sofa</h2>
                <p>
                From cozy sectionals that work well for big
          get-togethers to beds that invite you for a good night's sleep after a
          long day. 
                </p>
                <BtnLink to="/shop">Shop Now</BtnLink>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider3} alt="slider2" />
              <Description>
                <h4>Living Room</h4>
                <h2>Creative Sofa</h2>
                <p>
                Fill your home with furniture that brings you comfort as soon as you
          walk in the door. 
                </p>
                <BtnLink to="/shop">Shop Now</BtnLink>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
        <SwiperSlide>
          <Slider>
            <SliderContainer className="container">
              <img src={slider4} alt="slider4" />
              <Description>
                <h4>Best Seller</h4>
                <h2> Sofa</h2>
                <p>
                Our pieces are carefully selected to provide a unique and modern aesthetic, and we are dedicated to providing high-quality furniture at affordable prices.

                </p>
                <BtnLink to="/shop">Shop Now</BtnLink>
              </Description>
            </SliderContainer>
          </Slider>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};
export default CarouselHome;
