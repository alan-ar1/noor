"use client";

import React from "react";
import "swiper/css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "swiper/css/navigation";

interface PostSliderWrapperProps {
  children: React.ReactNode;
}

export default function SliderWrapper({ children }: PostSliderWrapperProps) {
  const childrenArray = React.Children.toArray(children);

  if (childrenArray.length === 0) {
    return <div>No slides available</div>;
  }

  return (
    <Swiper
      navigation={true}
      modules={[Navigation]}
      // centeredSlides={true}
      spaceBetween={10}
      grabCursor={true}
      breakpoints={{
        100: {
          slidesPerView: 2.1,
        },
        400: {
          slidesPerView: 2.6,
        },
        500: {
          slidesPerView: 3.2,
        },
        600: {
          slidesPerView: 3.5,
        },

        900: {
          slidesPerView: 4.2,
          spaceBetween: 10,
        },
        // 1100: {
        //   slidesPerView: 4.2,
        //   spaceBetween: 10,
        // },
        1200: {
          slidesPerView: 4.7,
          spaceBetween: 10,
        },
        1400: {
          slidesPerView: 5.1,
          spaceBetween: 20,
        },
      }}
    >
      {childrenArray.map((child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
}
