import React from 'react'
import { hero } from "../Assets";


const Recover = () => {
  return (
    <div>
      {/*Register*/}
      <section
        className=" bg-no-repeat bg-cover bg-top space-y-40 pt-60 pb-10 lg:py-60 "
        style={{
          backgroundImage: `url(${hero})`,
        }}
      >
        <main className="w-full flex flex-col items-center justify-center px-4">
          <div className="bg-white p-8 rounded-xl max-w-sm w-full text-gray-600 space-y-8">
            <div className="text-center">
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                  Reset your Password
                </h3>
              </div>
            </div>
            <form onSubmit={(e) => e.preventDefault()}>
              <div>
                <input
                  type="email"
                  required
                  placeholder="Your email"
                  className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-teal-600 shadow-sm rounded-lg"
                />

              </div>
              <button className="w-full mt-4 px-4 py-2 text-white font-medium bg-teal-600 hover:bg-teal-700 active:bg-teal-600 rounded-lg duration-150">
                Reset
              </button>
            </form>
            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
            </div>
            <div className="text-center">
              <a
                href="../login"
                className="text-teal-600 hover:text-teal-700"
              >
                Back to Login
              </a>
            </div>
          </div>
        </main>
      </section>
    </div>
  )
}

export default Recover