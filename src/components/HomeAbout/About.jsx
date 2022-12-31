import React from 'react'
import AboutItem from './AboutItem'
import clsx from 'clsx'
import { newInStore } from '../../data2'

// import slider1 from "../../assets/images/slider/slider-1.png";
import desk from "../../assets/images/about/office-desk.png"
import desk2 from "../../assets/images/about/office-desk2.png"
// import desk3 from "../../assets/images/about/office-desk3.jpg"

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
  const { products } = newInStore

  return (
    <>
      <section className=''>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto grid md:grid-cols-2 sm:grid-cols-1 items-center gap-14 h-full ">
          {/* <AboutItem /> */}
          <div className=' w-screen md:w-full px-6'>
          <Swiper
      grabCursor={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 18,
        },
        768: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
      }}
    >
      {/* {products.map(({ image, name }, index) => ( */}
        <SwiperSlide className="max-w-[420px]">
          <div className="relative">
            <img src={desk} alt='desk office' className="max-w-full h-auto" />
            <div
              className={clsx(
                'absolute text-black',
                'bottom-[20px] w-full text-center text-[18px] lg:text-2xl',
                'font-semibold capitalize'
              )}
            >
              {/* Office Deskt one */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="max-w-[420px]">
          <div className="relative">
            <img src={desk2} alt='desk' className="max-w-full h-auto" />
            <div
              className={clsx(
                'absolute text-black',
                'bottom-[20px] w-full text-center text-[18px] lg:text-2xl',
                'font-semibold capitalize'
              )}
            >
            {/* second desk */}
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide className="max-w-[420px]">
          <div className="relative">
            <img src={desk} alt='desk office' className="max-w-full h-auto" />
            <div
              className={clsx(
                'absolute text-black',
                'bottom-[20px] w-full text-center text-[18px] lg:text-2xl',
                'font-semibold capitalize'
              )}
            >
              {/* Office Deskt one */}
            </div>
          </div>
        </SwiperSlide>
      {/* ))} */}
    </Swiper>

        </div>
        <div>
            <h2 className='text-4xl px-1 font-bold leading-tight'>The Office Furniture</h2>
            <p className='my-5 leading-relaxed'>
            At our office furniture section, you'll find everything you need to create a functional and stylish workspace. At Sam standard, we understand the importance of having a comfortable and efficient workspace, and we strive to provide you with the best selection of office furniture in Benin City.

Our office furniture collection includes a wide range of options, from desks and chairs to storage solutions and office accessories. Whether you're looking to furnish a home office or a corporate workspace, we have something to suit your needs.
              
</p>            
            <button className='bg-black rounded-full hover:bg-orange duration-500 transition-all ease-in-out text-white px-11 py-3 inline-block'> Shop Now</button>
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