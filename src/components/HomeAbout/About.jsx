import React from 'react'
import AboutItem from './AboutItem'

// import slider1 from "../../assets/images/slider/slider-1.png";
import desk from "../../assets/images/about/office-desk.png"
import desk2 from "../../assets/images/about/office-desk2.png"
import desk3 from "../../assets/images/about/office-desk3.jpg"

import "./test.css";
// import "./styles.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation } from "swiper";
import { Slider, SliderContainer } from '../CarouselHome';



const About = () => {
  return (
    <>
      <section className=''>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center gap-14 h-full ">
          {/* <AboutItem /> */}
          <div className=' w-screen md:w-full px-6'>
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
        className="mySwiper carouselMain bg-transparent "
      >
        <SwiperSlide>
          <Slider>
            <SliderContainer className="flex justify-center items-center w-full">

            <img className='w-full' 
            src={desk} alt="about" />
            </SliderContainer>
            </Slider>
            </SwiperSlide>

            <SwiperSlide>
              <Slider>

            <SliderContainer className="container">

              <img className='w-full mt-[-80px]' 
            src={desk2} alt="about" />

              </SliderContainer>
              </Slider>
              
            </SwiperSlide>


            {/* thrid slider  */}
            {/* <SwiperSlide>
              <Slider>

            <SliderContainer className="container">

              <img className='w-full mt-[-80px]' 
            src={desk3} alt="about" />

              </SliderContainer>
              </Slider>
              
            </SwiperSlide> */}


            </Swiper>

        </div>
        <div>
            <h2 className='text-4xl px-1 font-bold leading-tight'>The Coffee Table</h2>
            <p className='my-5'>orem ipsum dolor sit amet consectetur adipiscing elit urna gravida interdum natoque, nec orci himenaeos aliquam eleifend senectus feugiat placerat fringilla et, nam felis porttitor egestas aptent augue sed arcu mi ligula. Ultricies sed congue fames dictum suscipit eros cum, tellus primis phasellus blandit vitae litora, dapibus odio praesent pellentesque convallis curabitur. Luctus suscipit nisi eu nec risus rhoncus condimentum mus senectus felis ac pharetra, ulus vel libero egestas curae cubilia integer rutrum sollicitudin.</p>
            
            <a className='bg-black text-white px-11 py-3 inline-block' href="https://www.linkedin.com/in/mahadidev7/"> Shop Now</a>
        </div>
        </div>

        <div className="container md:w-5/6 px-2 md:px-0 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center gap-14 md:mt-[-2px] mt-32">
          <AboutItem orderOne="order-2" orderTwo="order-1" />
        </div>
      </section>
    </>
  )
}

export default About