import Head from 'next/head';
import Link from 'next/link';
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image'
import 'swiper/swiper-bundle.min.css';

SwiperCore.use([Navigation, Pagination, Autoplay]);

// Menu


// Services section
const services = [
  { id: 1, title: 'Woman\'s Fashion', link: '/womens-fashion' },
  { id: 2, title: 'Men\'s Fashion', link: '/mens-fashion' },
  { id: 3, title: 'Electronics', link: '/electronics' },
  { id: 4, title: 'Home & Lifestyle', link: '/home-lifestyle' },
  { id: 5, title: 'Medicine', link: '/medicine' },
  { id: 6, title: 'Sports & Outdoor', link: '/sports-outdoor' },
  { id: 7, title: 'Baby\'s & Toys', link: '/babys-toys' },
  { id: 8, title: 'Groceries & Pets', link: '/groceries-pets' },
  { id: 9, title: 'Health & Beauty', link: '/health-beauty' },
];

const banners = [
  { id: 1, imageUrl: 'image.jpg' },
  { id: 2, imageUrl: 'image.jpg' },
  { id: 3, imageUrl: 'image.jpg' },
  // Add more banners as needed
];
export default function Page() {
    return (
      <>
       <div className="container mx-auto">
        <div className="grid grid-cols-5  rounded-xs relative ">
  
          {/* Left Side (Services or Categories) */}
          <div className="col-span-1  pt-10 relative">
              <ul className="">
                  {services.map((service) => (
                      <li key={service.id} className="mb-3 flex items-center hover:bg-gray-100 p-1 rounded-lg transition-colors duration-200">
                          <Link href={service.link}>
                              <p className="text-gray-600 hover:text-black transition-colors duration-200 flex-grow font-medium">{service.title}</p>
                          </Link>
                          <span className="ml-1">›</span>
                      </li>
                  ))}
              </ul>
  
              {/* Adjusted Vertical Border Line */}
              <div className="absolute inset-y-0  right-0 flex items-center ">
                  <div className="h-full border-r-2 border-gray-200"></div>
              </div>
          </div>
  
          {/* Right Side (Service Banner Slider) */}
          <div className="col-span-4  pl-8 pt-8 "> {/* Optionally adjust to col-span-3 if needed */}
              <Swiper
                  spaceBetween={10}
                  slidesPerView={1}
                  navigation
                  pagination={{ clickable: true, dynamicBullets: true }}
                  autoplay={{ delay: 3000 }}
                  style={{ width: 'auto', height: '400px' }}
              >
                  {banners.map((banner) => (
                      <SwiperSlide key={banner.id}>
                          <img src={banner.imageUrl} alt={`Service Banner ${banner.id}`} className="w-full h-full object-cover rounded-md shadow-md" />
                      </SwiperSlide>
                  ))}
              </Swiper>
          </div>
        </div>
        </div>
      </>
    )
  }
  