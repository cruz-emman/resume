import React from 'react'
import Hulu from '../assets/hulu_clone.png'
import Client from '../assets/client.png'
import Admin from '../assets/admin.png'
import Weather from '../assets/weather.png'
import {AiFillGithub} from 'react-icons/ai'
export const Projects = () => {
  return (
    <div className='h-full w-full '>
        <div className='flex flex-col  bg-blue-50 dark:bg-slate-800 mt-10 py-24 items-center justify-center gap-5'>
            <div className='flex items-center flex-col gap-5 pb-10'>
              <p className='dark:text-white text-3xl font-semibold border-b-slate-100'>PROJECTS</p>
              <div className='w-20 rounded-full h-1 bg-blue-800' />
            </div>
            
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 px-4 ">
                <div className="group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                  <div className="h-96 w-[650px] ">
                    <img className="sm:h-full sm:w-full w-screen h-full object-cover  transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={Hulu} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">Hulu Clone</h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> HTML / CSS / JavaScript </p>
                    <div className='flex justify-between gap-2'>
                      <button className="rounded-full bg-blue-900 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                        <a href="https://zen-darwin-f42276.netlify.app/">
                          View
                        </a>
                      </button>
                      <button className="rounded-full bg-gray-500 hover:bg-gray-600 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                        <a href="https://github.com/cruz-emman/huluclone">
                          <AiFillGithub />
                        </a>
                      </button>
                    </div>
                    
                  </div>
                </div>

                <div className="group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                  <div className="h-96 w-[650px] ">
                    <img className="sm:h-full sm:w-full w-screen h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={Client} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">E-Commerce (CLIENT-SIDE) </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> ReactJS / MUI / MongoDB / Redux Toolkit </p>
                    
                    <div className='flex justify-between gap-2'>
                    <button className="rounded-full bg-blue-900 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <a href="https://tua-ebenta.onrender.com//">
                        View
                      </a>
                    </button>

                    <button className="rounded-full bg-gray-500 hover:bg-gray-600 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <a href="https://tua-ebenta.onrender.com//">
                      <AiFillGithub />
                      </a>
                    </button>
                    </div>

                    
                  </div>
                </div>


                <div className="group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                  <div className="h-96 w-[650px] ">
                    <img className="sm:h-full sm:w-full w-screen h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={Admin} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white">E-Commerce (ADMIN-SIDE) </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> ReactJS / MUI / Sass /MongoDB / Redux Toolkit </p>

                    <div className='flex justify-between gap-2'>
                      <button className="rounded-full bg-blue-900 mt-2 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                        <a href="https://tua-ebenta-admin.onrender.com">
                          View
                        </a>
                      </button>
                      <button className="rounded-full bg-gray-500 hover:bg-gray-600 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                        <a href="https://github.com/cruz-emman/revison1">
                        <AiFillGithub />
                        </a>
                      </button>
                    </div>
                    

                  </div>
                </div>

                <div className="group relative  items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30 rounded">
                  <div className="h-96 w-[650px] ">
                    <img className="sm:h-full sm:w-full w-screen h-full object-cover transition-transform duration-500 group-hover:rotate-2 group-hover:scale-125" src={Weather} alt="" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                  <div className="absolute inset-0 flex translate-y-[50%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                    <h1 className="font-dmserif text-3xl font-bold text-white"> Weather Checker </h1>
                    <p className="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100"> ReactJS / RAPIDAPI </p>
                    
                    <div className='flex justify-between gap-2'>
                    <button className="rounded-full bg-blue-900 mt-2 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                      <a href="https://weather-app-three-olive.vercel.app">
                        View
                      </a>
                    </button>
                      <button className="rounded-full bg-gray-500 hover:bg-gray-600 py-2 px-6 font-com text-sm capitalize text-white shadow shadow-black/60">
                        <a href="https://github.com/cruz-emman/weatherApp">
                        <AiFillGithub />
                        </a>
                      </button>
                    </div>
                   
                  </div>
                </div>
               
              </div>
        </div>
    </div>
  )
}
