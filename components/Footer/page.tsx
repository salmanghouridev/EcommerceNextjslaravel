import React from 'react'

const Page = () => {
  return (
    <>

      <div className="bg-black text-white p-20 mt-10">


        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-8">


          <div className='col-span-1'>

            <h2 className="font-medium text-xl mb-4">
              Exclusive
            </h2>

            <h3 className="mb-2">
              Subscribe
            </h3>

            <p className="mb-4 text-gray-400">
              Get 10% off your first order
            </p>

            <div className="flex border border-gray-500 rounded overflow-hidden">

              <input type="email" placeholder="Enter your email" className="px-2 py-2 w-full bg-transparent outline-none"></input>

              <button className="bg-transparent  px-4 ">
                <svg width="24" height="24" viewBox="0 0 24 24" className='' fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.91199 12H3.99999L2.02299 4.13499C2.01033 4.08928 2.00262 4.04234 1.99999 3.99499C1.97799 3.27399 2.77199 2.77399 3.45999 3.10399L22 12L3.45999 20.896C2.77999 21.223 1.99599 20.737 1.99999 20.029C2.00201 19.9657 2.01313 19.9031 2.03299 19.843L3.49999 15" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg>

              </button>

            </div>

          </div>


          <div className='col-span-1'>

            <h2 className="font-medium text-xl mb-4">
              Support
            </h2>

            <address className="not-italic mb-4">
              111 Bijoy saroni, Dhaka,
              <br></br>
              DH 1515, Bangladesh.
            </address>

            <a href="mailto:exclusive@gmail.com" className="block mb-2">
              exclusive@gmail.com
            </a>

            <a href="tel:+8801588889999">
              +88015-8888-9999
            </a>

          </div>


          <div className='col-span-1'>

            <h2 className="font-medium text-xl mb-4">
              Account
            </h2>

            <ul>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  My Account
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Login / Register
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Cart
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Wishlist
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400">
                  Shop
                </a>
              </li>

            </ul>

          </div>


          <div className='col-span-1'>

            <h2 className="font-medium text-xl mb-4">
              Quick Link
            </h2>

            <ul className="mb-4">

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Privacy Policy
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  Terms Of Use
                </a>
              </li>

              <li className="mb-2">
                <a href="#" className="hover:text-gray-400">
                  FAQ
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-gray-400">
                  Contact
                </a>
              </li>

            </ul>



          </div>
          <div className='col-span-1'>
            <h3 className="font-medium mb-6 text-xl ">
              Download App
            </h3>

            <p className="mb-4 text-gray-400 text-xs">
              Save $3 with App New User Only
            </p>

            <div className="flex space-x-2">


              <img src="QrCode.png" alt="QR Code" className="w-16 h-16"></img>
              <div>
                <img src="AppStore.png" alt="Google Play" className="w-24 h-8"></img>

                <img src="GooglePlay.png" alt="App Store" className="w-24 h-8 mt-1"></img>
              </div>
            </div>
          </div>
        </div>


        <div className="flex justify-between items-center border-t border-gray-800 pt-4">
          <div></div>

          <p className="text-gray-400">
            © Copyright RimeI 2022. All right reserved
          </p>
          <div></div>

        </div>

      </div>

    </>
  )
}

export default Page