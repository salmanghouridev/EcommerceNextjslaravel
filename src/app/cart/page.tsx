"use client"

import { useRouter } from 'next/router';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';


const index = () => {

  return (
    <>
      <div className="container mx-auto mt-10">
        {/* Bredcrum */}
        <div className='flex space-x-2'>
          <span className='text-gray-400'>Home</span>
          <span className='text-gray-400'>/</span>
          <span>Cart</span>
        </div>

        {/* Table */}

        <div className="flex flex-col ">

          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">

            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">

              <div className="overflow-hidden">

                <table className="min-w-full">

                  <thead className="bg-gray-50 border-b shadow-lg border-2 ">

                    <tr>

                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Product
                      </th>

                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Price
                      </th>

                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Quantity
                      </th>

                      <th scope="col" className="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                        Subtotal
                      </th>

                    </tr>

                  </thead>

                  <tbody className=''>

                    <tr className="bg-gray-100 border-b">

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex  items-center">
                        <span><Image src="/abc.avif" width={100} height={100} alt='s' /></span> <span className='mx-2'>LCD Monitor</span>
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        $<span>650</span>
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* start */}
                        <div className="relative">

                          <div className="inline-flex flex-col items-center bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow">

                            <div className='flex'> <span className="text-xs ">
                              01
                            </span>
                              <div className='items-center'>
                                <button className="focus:outline-none">

                                  <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>

                                  </svg>

                                </button>

                                <button className="focus:outline-none">

                                  <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>

                                  </svg>

                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* end */}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        $<span>650</span>
                      </td>

                    </tr>
                    <tr className="bg-gray-100 border-b">

                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex  items-center">
                        <span><Image src="/abc.avif" width={100} height={100} alt='s' /></span> <span className='mx-2'>LCD Monitor</span>
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        $<span>650</span>
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {/* start */}
                        <div className="relative">

                          <div className="inline-flex flex-col items-center bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-400 rounded shadow">

                            <div className='flex'> <span className="text-xs ">
                              01
                            </span>
                              <div className='items-center'>
                                <button className="focus:outline-none">

                                  <svg className="w-4 h-4 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path>

                                  </svg>

                                </button>

                                <button className="focus:outline-none">

                                  <svg className="w-4 h-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">

                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>

                                  </svg>

                                </button>
                              </div>
                            </div>
                          </div>
                        </div>


                        {/* end */}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        $<span>650</span>
                      </td>

                    </tr>





                  </tbody>

                </table>

              </div>

            </div>

          </div>
          {/* Buttons */}
          <div className='flex justify-between'>
            <button className="border-2 border-gray-200 px-8 py-3 text-sm font-semibold">
              Return To Shop
            </button>
            <button className="border-2 border-gray-200 px-8 py-3 text-sm font-semibold">
              Update Cart
            </button>
          </div>
        </div>
        {/* End */}
        {/* 2 */}
        <div className='flex justify-between mt-10 '>
          <div className='space-x-3 rounded-xs'>
            <input type="textbox" name="s" id="" className='border-2 border-gray-400 p-3  text-md' placeholder='Coupon Code' />
            <button className="border-2 border-ecred bg-ecred text-white px-8 py-3 text-sm font-medium">
              Apply Coupon
            </button>
          </div>
          {/* add to card */}
          <div className="border-2 border-black rounded p-8  w-[500px]">

            <h2 className="text-lg font-bold mb-4">
              Cart Total
            </h2>

            <div className="flex justify-between mb-4 border-b border-solid border-gray-400">

              <span>
                Subtotal:
              </span>

              <span>
                $1750
              </span>

            </div>

            <div className="flex justify-between mb-4 border-b border-solid border-gray-400">

              <span>
                Shipping:
              </span>

              <span>
                Free
              </span>

            </div>

            <div className="flex justify-between mb-6 border-b border-solid border-gray-400">

              <span>
                Total:
              </span>

              <span className="font-bold">
                $1750
              </span>

            </div>
            <div className='text-center mr-16 ml-16'>
            <button className="bg-ecred text-white w-full  rounded p-4 text-sm">
              Proceed to checkout
            </button>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default index