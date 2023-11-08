import React from 'react'

const page = () => {
  return (
    <>
     <div className="container mx-auto mt-10">
    <div className="bg-black text-white relative h-[400px] flex items-center">
    <div className="absolute top-8 left-20 ">
        <span className=" text-ecgreen px-3  py-1 rounded-full text-sm">Categories</span>
    </div>

    <div className="ml-20">
        <h1 className="text-4xl font-semibold leading-tight mb-10 ">
            Enhance Your <br />
            Music Experience
        </h1>
        
        <div className="flex space-x-6 mb-10">
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">23</span>
                <span>Hours</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">05</span>
                <span>Days</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">59</span>
                <span>Minutes</span>
            </div>
            <div className="flex flex-col items-center">
                <span className="text-2xl font-bold">35</span>
                <span>Seconds</span>
            </div>
        </div>

        <button className="bg-green-500 hover:bg-green-600 text-black py-2 px-8 rounded-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-opacity-50">
            Buy Now!
        </button>
    </div>
    
    <div className="absolute right-20 top-1/6">
        <img src="speaker.png" alt="Speaker" className="h-96" />
    </div>
</div>
</div>
    </>
  )
}

export default page