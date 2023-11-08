import React from "react";

const Header = () => {
  return (
    <>
      <div className="bg-white py-4 px-4 border-b border-gray-300 mt-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold text-ecblack">Exclusive</h1>

          <div className="space-x-12 text-md">
            <a
              href="#"
              className="text-ecblack hover:text-gray-500 underline underline-gray-400 underline-offset-8 "
            >
              Home
            </a>

            <a
              href="#"
              className="text-ecblack hover:text-gray-500  "
            >
              Contact
            </a>

            <a
              href="#"
              className="text-ecblack hover:text-gray-500 "
            >
              About
            </a>

            <a
              href="#"
              className="text-ecblack hover:text-gray-500 "
            >
              Sign Up
            </a>
          </div>

          <div className="flex items-center space-x-4">
            {" "}
            <div className="flex ">
  <input
    type="text"
    placeholder="What are you looking for?"
    className="px-4 py-2 rounded shadow-inner focus:outline-none focus:ring-2 focus:ring-gray-200 flex-1"
  />
 <button className="text-ecblack hover:text-[#FFFFFF]">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Component 2">
                  <path
                    id="Vector"
                    d="M20 20L16.2223 16.2156M18.3158 11.1579C18.3158 13.0563 17.5617 14.8769 16.2193 16.2193C14.8769 17.5617 13.0563 18.3158 11.1579 18.3158C9.2595 18.3158 7.43886 17.5617 6.0965 16.2193C4.75413 14.8769 4 13.0563 4 11.1579C4 9.2595 4.75413 7.43886 6.0965 6.0965C7.43886 4.75413 9.2595 4 11.1579 4C13.0563 4 14.8769 4.75413 16.2193 6.0965C17.5617 7.43886 18.3158 9.2595 18.3158 11.1579V11.1579Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </button>
</div>

           
            <button className="text-ecblack hover:text-gray-500">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Wishlist">
                  <path
                    id="Vector"
                    d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
            <button className="text-ecblack hover:text-gray-500">
              {/* shoping cart svg */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Cart1">
                  <path
                    id="Vector"
                    d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_2"
                    d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_3"
                    d="M3 5H7L10 22H26"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    id="Vector_4"
                    d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                    stroke="black"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
