import React, { useRef } from "react";
import styles from "./Rc.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import SwiperCore, { Swiper as SwiperClass } from "swiper";
// install Swiper modules
SwiperCore.use([Navigation]);
const Page = () => {
  const swiperRef = useRef<SwiperClass | null>(null);

  const products = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      originalPrice: "$160",
      discount: "-40%",
      rating: 88,
      imageUrl: "abc.avif",
    },
    //... Add other products similarly
  ];

  return (
    <>
      <div className="container mx-auto mt-20">
        <div className="flex items-center">
          <span className="inline-block bg-red-500 h-7 rounded-sm w-3 mr-2"></span>
          <h1 className="inline text-xs font-semibold text-ecred">Today's</h1>
        </div>

        <div className=" py-2">
          <div className="grid grid-cols-8 items-center gap-4 mb-2 mt-2">
            <h1 className="text-3xl font-semibold tracking-widest	 col-span-2">
              Flash Sales
            </h1>

            <div className="relative flex items-center justify-center">
              <div className="flex items-end space-x-2">
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-600">Days</span>
                  <span className="font-bold text-3xl text-black">03</span>
                </div>

                <span className="font-bold text-red-600 text-xl">
                  <svg
                    width="14"
                    height="28"
                    viewBox="0 0 14 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_302_5181)">
                      <circle cx="7" cy="3" r="3" fill="#DB4444" />
                      <circle cx="7" cy="17" r="3" fill="#DB4444" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_302_5181"
                        x="0"
                        y="0"
                        width="14"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_302_5181"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_302_5181"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>

                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-600">Hours</span>
                  <span className="font-bold text-3xl text-black">23</span>
                </div>

                <span className="font-bold text-red-600 text-xl">
                  <svg
                    width="14"
                    height="28"
                    viewBox="0 0 14 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_302_5181)">
                      <circle cx="7" cy="3" r="3" fill="#DB4444" />
                      <circle cx="7" cy="17" r="3" fill="#DB4444" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_302_5181"
                        x="0"
                        y="0"
                        width="14"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_302_5181"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_302_5181"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>

                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-600">Minutes</span>
                  <span className="font-bold text-3xl text-black">19</span>
                </div>

                <span className="font-bold text-red-600 text-xl">
                  <svg
                    width="14"
                    height="28"
                    viewBox="0 0 14 28"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_302_5181)">
                      <circle cx="7" cy="3" r="3" fill="#DB4444" />
                      <circle cx="7" cy="17" r="3" fill="#DB4444" />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_302_5181"
                        x="0"
                        y="0"
                        width="14"
                        height="28"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_302_5181"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_302_5181"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
                <div className="flex flex-col items-center">
                  <span className="text-xs text-gray-600">Seconds</span>
                  <span className="font-bold text-3xl text-black">56</span>
                </div>
              </div>
            </div>

            <span className="col-span-1"></span>

            <span className="col-span-1"></span>
            <div className="flex justify-end col-span-2">
              <button
                className="rounded-full p-2 bg-gray-200 mr-2"
                onClick={() => swiperRef.current?.slidePrev()}
              >
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

              <button
                className="rounded-full p-2 bg-gray-200"
                onClick={() => swiperRef.current?.slideNext()}
              >
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

            <span className="col-span-1"></span>
          </div>
        </div>

        <div className="flex space-x-4 overflow-x-auto  productsWrapper ">
          <Swiper
            spaceBetween={20} // Adjust space between slides
            slidesPerView={10} // Set number of slides per view
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            onSlideChange={() => console.log("slide change")} // Handle slide change
            // Responsive breakpoints
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              // when window width is >= 768px
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              // when window width is >= 1024px
              1024: {
                slidesPerView: 5,
                spaceBetween: 50,
              },
            }}
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div
                  key={product.id}
                  className="relative w-100 overflow-hidden rounded-sm bg-white "
                >
                  <div className="absolute left-0 top-0 rounded-br-md bg-red-500 px-2 py-1 text-xs font-bold text-white">
                    {product.discount}
                  </div>
                  <div className="absolute right-0 top-0 p-2 text-gray-500 hover:text-gray-600">
                    {/* SVG for wishlist icon */}
                    <div className="bg-white rounded-full opacity-80 hover:opacity-100 p-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 5C5.7912 5 4 6.73964 4 8.88594C4 10.6185 4.7 14.7305 11.5904 18.8873C11.7138 18.961 11.8555 19 12 19C12.1445 19 12.2862 18.961 12.4096 18.8873C19.3 14.7305 20 10.6185 20 8.88594C20 6.73964 18.2088 5 16 5C13.7912 5 12 7.35511 12 7.35511C12 7.35511 10.2088 5 8 5Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="bg-white rounded-full opacity-80 hover:opacity-100 mt-2 p-1">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M21.257 10.962C21.731 11.582 21.731 12.419 21.257 13.038C19.764 14.987 16.182 19 12 19C7.81801 19 4.23601 14.987 2.74301 13.038C2.51239 12.7411 2.38721 12.3759 2.38721 12C2.38721 11.6241 2.51239 11.2589 2.74301 10.962C4.23601 9.013 7.81801 5 12 5C16.182 5 19.764 9.013 21.257 10.962V10.962Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"
                          stroke="black"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full  bg-gray-100 object-contain "
                  />
                  <div className="p-2">
                    <h3 className="text-xs font-semibold text-gray-900">
                      {product.name}
                    </h3>
                    <div className="mt-1 flex items-baseline">
                      <span className="text-sm font-bold text-red-600">
                        {product.price}
                      </span>
                      <span className="ml-2 text-xs line-through text-gray-400">
                        {product.originalPrice}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center">
                      <div className="flex text-yellow-400">
                        <svg
                          width="100"
                          height="20"
                          viewBox="0 0 100 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.673 10.1717C17.7437 9.36184 17.1709 7.65517 15.8284 7.65517H13.3992C12.7853 7.65517 12.243 7.25521 12.0617 6.66868L11.3375 4.32637C10.9309 3.01106 9.0691 3.01106 8.66246 4.32637L7.93832 6.66868C7.75699 7.25521 7.21469 7.65517 6.60078 7.65517H4.12961C2.79142 7.65517 2.21592 9.35274 3.27822 10.1665L5.39469 11.7879C5.85885 12.1435 6.05314 12.7501 5.88196 13.3092L5.11296 15.8207C4.71416 17.1232 6.22167 18.1704 7.30301 17.342L9.14861 15.9281C9.65097 15.5432 10.349 15.5432 10.8514 15.9281L12.6807 17.3295C13.7636 18.159 15.2725 17.1079 14.8696 15.8046L14.09 13.2827C13.9159 12.7198 14.113 12.1081 14.5829 11.7526L16.673 10.1717Z"
                            fill="#FFAD33"
                          />
                          <path
                            d="M36.673 10.1717C37.7437 9.36184 37.1709 7.65517 35.8284 7.65517H33.3992C32.7853 7.65517 32.243 7.25521 32.0617 6.66868L31.3375 4.32637C30.9309 3.01106 29.0691 3.01106 28.6625 4.32637L27.9383 6.66868C27.757 7.25521 27.2147 7.65517 26.6008 7.65517H24.1296C22.7914 7.65517 22.2159 9.35274 23.2782 10.1665L25.3947 11.7879C25.8588 12.1435 26.0531 12.7501 25.882 13.3092L25.113 15.8207C24.7142 17.1232 26.2217 18.1704 27.303 17.342L29.1486 15.9281C29.651 15.5432 30.349 15.5432 30.8514 15.9281L32.6807 17.3295C33.7636 18.159 35.2725 17.1079 34.8696 15.8046L34.09 13.2827C33.9159 12.7198 34.113 12.1081 34.5829 11.7526L36.673 10.1717Z"
                            fill="#FFAD33"
                          />
                          <path
                            opacity="0.25"
                            d="M56.673 10.1717C57.7437 9.36184 57.1709 7.65517 55.8284 7.65517H53.3992C52.7853 7.65517 52.243 7.25521 52.0617 6.66868L51.3375 4.32637C50.9309 3.01106 49.0691 3.01106 48.6625 4.32637L47.9383 6.66868C47.757 7.25521 47.2147 7.65517 46.6008 7.65517H44.1296C42.7914 7.65517 42.2159 9.35274 43.2782 10.1665L45.3947 11.7879C45.8588 12.1435 46.0531 12.7501 45.882 13.3092L45.113 15.8207C44.7142 17.1232 46.2217 18.1704 47.303 17.342L49.1486 15.9281C49.651 15.5432 50.349 15.5432 50.8514 15.9281L52.6807 17.3295C53.7636 18.159 55.2725 17.1079 54.8696 15.8046L54.09 13.2827C53.9159 12.7198 54.113 12.1081 54.5829 11.7526L56.673 10.1717Z"
                            fill="black"
                          />
                          <path
                            opacity="0.25"
                            d="M76.673 10.1717C77.7437 9.36184 77.1709 7.65517 75.8284 7.65517H73.3992C72.7853 7.65517 72.243 7.25521 72.0617 6.66868L71.3375 4.32637C70.9309 3.01106 69.0691 3.01106 68.6625 4.32637L67.9383 6.66868C67.757 7.25521 67.2147 7.65517 66.6008 7.65517H64.1296C62.7914 7.65517 62.2159 9.35274 63.2782 10.1665L65.3947 11.7879C65.8588 12.1435 66.0531 12.7501 65.882 13.3092L65.113 15.8207C64.7142 17.1232 66.2217 18.1704 67.303 17.342L69.1486 15.9281C69.651 15.5432 70.349 15.5432 70.8514 15.9281L72.6807 17.3295C73.7636 18.159 75.2725 17.1079 74.8696 15.8046L74.09 13.2827C73.9159 12.7198 74.113 12.1081 74.5829 11.7526L76.673 10.1717Z"
                            fill="black"
                          />
                          <path
                            opacity="0.25"
                            d="M96.673 10.1717C97.7437 9.36184 97.1709 7.65517 95.8284 7.65517H93.3992C92.7853 7.65517 92.243 7.25521 92.0617 6.66868L91.3375 4.32637C90.9309 3.01106 89.0691 3.01106 88.6625 4.32637L87.9383 6.66868C87.757 7.25521 87.2147 7.65517 86.6008 7.65517H84.1296C82.7914 7.65517 82.2159 9.35274 83.2782 10.1665L85.3947 11.7879C85.8588 12.1435 86.0531 12.7501 85.882 13.3092L85.113 15.8207C84.7142 17.1232 86.2217 18.1704 87.303 17.342L89.1486 15.9281C89.651 15.5432 90.349 15.5432 90.8514 15.9281L92.6807 17.3295C93.7636 18.159 95.2725 17.1079 94.8696 15.8046L94.09 13.2827C93.9159 12.7198 94.113 12.1081 94.5829 11.7526L96.673 10.1717Z"
                            fill="black"
                          />
                        </svg>
                      </div>
                      <span className="ml-1 text-xs text-gray-600">(92)</span>
                    </div>
                    
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex justify-between ">
          <div></div>
          <button className="mt-6 bg-ecred text-xs text-white py-3 px-8 rounded p-8 hover:opacity-80 focus:outline-none ">
            View All Products
          </button>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Page;
