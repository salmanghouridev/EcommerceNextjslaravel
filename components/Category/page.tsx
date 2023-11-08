import React, { useRef } from "react";
import styles from "./Rc.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import SwiperCore, { Swiper as SwiperClass } from "swiper";
import Image from "next/image";
SwiperCore.use([Navigation]);
const page = () => {
  
  const swiperRef = useRef<SwiperClass | null>(null);
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center">
          <span className="inline-block bg-red-500 h-7 rounded-sm w-3 mr-2"></span>
          <h1 className="inline text-xs font-semibold text-ecred">Today's</h1>
        </div>
        <div className=" py-2">
          <div className="grid grid-cols-8 items-center gap-4 mb-2 mt-2">
            <h1 className="text-3xl font-semibold tracking-wide	 col-span-2">
              Browse By Category
            </h1>

            <span className="col-span-1"></span>

            <span className="col-span-2"></span>
            <div className="flex justify-end col-span-2">
              <button className="rounded-full p-2 bg-gray-200 mr-2"   ref={prevRef}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11 5L4 12L11 19M4 12H20"
                    stroke="black"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>

              <button className="rounded-full p-2 bg-gray-200"    ref={nextRef}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.5 12H20M20 12L13 5M20 12L13 19"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
{/*  */}

<div className="">
  <div className="flex justify-center">
  <Swiper
              spaceBetween={30}
              slidesPerView={6}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              onSlideChange={() => console.log("slide change")}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 50,
                },
              }}
              navigation={{
                prevEl: prevRef.current, // Linking the previous button
                nextEl: nextRef.current, // Linking the next button
              }}
            >
      <SwiperSlide>
        <div className="flex-none w-64 h-64 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
          <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>Phones</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-none w-64 h-64 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
        <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>Computers</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-none w-64 h-64 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
        <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>SmartWatch</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-none w-64 h-64 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
        <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>SmartWatch</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-none w-64 h-64 border border-gray-300 rounded-md p-4 flex flex-col items-center justify-center">
        <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>SmartWatch</div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="flex-none w-64 h-64 bg-red-500 text-white border border-red-500 rounded-md p-4 flex flex-col items-center justify-center">
        <Image src="/categoryicons/Category-Camera.png"  width={100} height={100} alt="image" />
          <div>HeadPhones</div>
        </div>
      </SwiperSlide>
      {/* ... (Repeat for each category) ... */}
    </Swiper>
  </div>
</div>
</div>
    </>
  );
};

export default page;
