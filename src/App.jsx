import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Pagination } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper navigation={true} modules={[Pagination]} className="mySwiper">
        <SwiperSlide>
          <img src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg" alt="A" />
        </SwiperSlide>
        <SwiperSlide>  <img src="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg"/></SwiperSlide>
        
         <SwiperSlide>  <img src="https://images.pexels.com/photos/2454515/pexels-photo-2454515.jpeg"/></SwiperSlide>
         
          <SwiperSlide>  <img src="https://images.pexels.com/photos/2778893/pexels-photo-2778893.jpeg"/></SwiperSlide>
          
      </Swiper>
    </>
  );
}
