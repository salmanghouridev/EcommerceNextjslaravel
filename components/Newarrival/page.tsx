import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <div className="container mx-auto mt-10">
        <div className="flex items-center">
          <span className="inline-block bg-red-500 h-7 rounded-sm w-3 mr-2"></span>
          <h1 className="inline text-xs font-semibold text-ecred">Featured</h1>
        </div>
        <div className=" py-2">
          <div className="grid grid-cols-8 items-center gap-4 mb-2 mt-2">
            <h1 className="text-3xl font-semibold tracking-wide	 col-span-2">
              New Arrival
            </h1>

            <span className="col-span-1"></span>

            <span className="col-span-2"></span>
          </div>
        </div>

        {/* Gallery */}

        <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2"> {/* Changed this line */}
              <Image
                src="/abc.avif"
                alt="Picture of the author"
              
                width={800}
                height={800}
                quality={100} 
              />
            </div>
 

          <div className="col-span-1">
            <div className="grid grid-col-2 gap-4">
              <div className="row-span-1">
                <Image
                  src="/abc.avif"
                  alt="Picture of the author"
                  layout="responsive" // This is used in Next.js for responsive images
                  width={300} // These width and height give the aspect ratio for the responsive layout
                  height={300}
                  quality={100}
                />
              </div>

              <div className="row-span-1">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Image
                      src="/abc.avif"
                      alt="Picture of the author"
                      layout="responsive" // This is used in Next.js for responsive images
                      width={300} // These width and height give the aspect ratio for the responsive layout
                      height={300}
                      quality={100}
                    />
                  </div>

                  <div className="col-span-1">
                    <Image
                      src="/abc.avif"
                      alt="Picture of the author"
                      layout="responsive" // This is used in Next.js for responsive images
                      width={300} // These width and height give the aspect ratio for the responsive layout
                      height={300}
                      quality={100}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
