import React from "react";
// === Styled Components ===
import { Wrapper, NewsHeader } from "./index";

// === Swiper ===
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/pagination";
import "./style.css";

// === Components ===
import NewsItem from "../NewsItem/NewsItem";

// === data ===
import { newsData } from "../../data";

const News = () => {
  return (
    <Wrapper>
      <div className="container">
        <NewsHeader>
          <h2>Latest News</h2>
          <p>
          Latest trends and styles, so you can find the perfect pieces to suit your personal taste and style. Whether you're looking for a modern, minimalist aesthetic or a more traditional, classic look, we have something for everyone.
          </p>
        </NewsHeader>
        <Swiper
          slidesPerView={1}
          spaceBetween={15}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            922: {
              slidesPerView: 3,
              spaceBetween: 15,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper news"
        >
          {newsData.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <NewsItem item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </Wrapper>
  );
};

export default News;
