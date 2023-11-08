import Image from 'next/image'
import React from 'react'

const signup = () => {
  return (
    <>    
      
      
      
      <section className="h-screen container">
  <div className="h-full">
    <div className="flex h-full flex-wrap items-center justify-center lg:justify-between">
      <div className="mb-12 grow-0 shrink-0 basis-auto md:mb-0 md:w-6/12">
        <Image src="/ffs.PNG" width={800} height={800} alt="s" />
      </div>
    
      <div className="mb-12 max-w-md  md:mb-0 md:w-5/12 ">
        <form>
          <h1 className="text-3xl font-bold text-gray-900">Create an account</h1>
          <p className="mt-2 mb-6 text-sm text-gray-600">Enter your details below</p>

          <div className="space-y-6">
            <div className="relative">
              <input type="text" id="name" className="peer block w-full appearance-none rounded-none bg-transparent px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500" placeholder=" " />
              <label htmlFor="name" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Name </label>
            </div>
            <div className="relative">
              <input type="text" id="email-phone" className="peer block w-full appearance-none rounded-none bg-transparent px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500" placeholder=" " />
              <label htmlFor="email-phone" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Email or Phone Number </label>
            </div>

            <div className="relative">
              <input type="password" id="password" className="peer block w-full appearance-none rounded-none bg-transparent px-3 py-2 leading-tight text-gray-700 border-b-2 border-gray-300 focus:outline-none focus:border-gray-500" placeholder=" " />
              <label htmlFor="password" className="absolute left-0 -top-3.5 text-gray-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"> Password </label>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="w-full bg-ecred text-white font-bold py-4 px-4 rounded hover:bg-ecred focus:outline-none focus:shadow-outline">Create Account</button>
          </div>

          <div className="mt-4 flex justify-between items-center">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="form-checkbox h-5 w-5 text-ecred rounded border-gray-300 " />
              <span className="ml-2">Remember me</span>
            </label>
            <a href="#" className="text-sm text-blue-500 hover:underline"> Forgot password? </a>
          </div>

          <div className="mt-6">
            <button type="button" className="w-full flex items-center justify-center bg-blue-500 text-white font-bold py-4 px-4 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
              {/* Insert the Google SVG icon here */}
              <svg className="h-5 w-5 mr-2" viewBox="0 0 24 24">{/* Google icon SVG path */}</svg>
              Sign up with Google
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-gray-600">
            Already have an account?
            <a href="#" className="text-blue-500 underline"> Log in </a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>

    

  
    </>
  )
}

export default signup