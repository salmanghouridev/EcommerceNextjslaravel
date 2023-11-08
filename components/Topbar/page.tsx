import React from "react";

const page = () => {
  return (
    <>
      <div className="bg-ecblack text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div>{/* Blank */}</div>
          <div>
            <span>
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </span>

            <button className="text-white underline ml-4 px-2 py-1 rounded">
              ShopNow
            </button>
          </div>

          <div className=" text-white bg-black py-1 px-2 rounded flex">
            <span className="text-white">English</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg" className="mx-1"
            >
              <g id="DropDown">
                <path
                  id="Vector"
                  d="M12.364 12.95L17.314 8L18.728 9.414L12.364 15.778L6.00003 9.414L7.41403 8L12.364 12.95Z"
                  fill="white"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
