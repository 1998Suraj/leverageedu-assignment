"use client";
import React, { useEffect } from "react";
import Swiper from "swiper";

import "./Slider.css";

const SwiperSlider = () => {
  useEffect(() => {
    const swiper = new Swiper(".swiper-container", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: "auto",
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      },
      pagination: {
        el: ".swiper-pagination",
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="swiper-container">
      <div className="swiper-wrapper">
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fle-public.s3.amazonaws.com%2FpallaviThumbnail.png&w=3840&q=75"
          alt="image"
          className="swiper-slide"
        />
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fle-public.s3.amazonaws.com%2FbusraThumbnail.png&w=3840&q=75"
          alt="image"
          className="swiper-slide"
        />
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fle-public.s3.amazonaws.com%2FpalakThumbnail.png&w=3840&q=75"
          alt="image"
          className="swiper-slide"
        />
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fle-public.s3.amazonaws.com%2FrajatThumbnail.png&w=3840&q=75"
          alt="image"
          className="swiper-slide"
        />
        <img
          src="https://leverageedu.com/_next/image/?url=https%3A%2F%2Fle-public.s3.amazonaws.com%2FgandharvThumbnail.png&w=3840&q=75"
          alt="image"
          className="swiper-slide"
        />
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
    </div>
  );
};

export default SwiperSlider;
