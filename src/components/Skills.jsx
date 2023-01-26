import React from 'react'
import { css, html, javascript, mongodb, reactjs, redux, sass, tailwind } from '../assets'

export const Skills = () => {
  return (
    <div className='h-screen flex items-center justify-center w-full my-10 md:py-16 md:px-96 mx-auto' >
        <div className="flex flex-col items-center justify-between w-full  ">
                <div className='flex items-center flex-col gap-5 pb-12'>
                    <p className='dark:text-white text-3xl font-semibold border-b-slate-100'>Skills</p>
                    <div className='w-20 rounded-full h-1 bg-blue-800' />
                </div>

              <div className='place-items-center  px-auto content-center	'>
                <div className="grid sm:grid-cols-4 grid-cols-2 gap-4">

                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={html} />
                    <p className='text-sm font-medium text-gray-400'>HTML</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={css} />
                    <p className='text-sm font-medium text-gray-400'>CSS</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={javascript} />
                    <p className='text-sm font-medium text-gray-400'>JavaScript</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={reactjs} />
                    <p className='text-sm font-medium text-gray-400'>ReactJs</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={redux} />
                    <p className='text-sm font-medium text-gray-400'>Redux</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={tailwind} />
                    <p className='text-sm font-medium text-gray-400'>TailwindCSS</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={sass} />
                    <p className='text-sm font-medium text-gray-400'>Sass</p>
                  </div>
                  <div className='flex flex-col gap-2 items-center justify-between sm:w-[250px] sm:h-[200px] w-32 h-32 py-4 bg-slate-50 hover:bg-blue-200 ease-out duration-300 border-black shadow-lg rounded-lg'>
                    <img className='md:w-[150px] md:h-[130px] w-[70px] object-contain drop-shadow-2xl' src={mongodb} />
                    <p className='text-sm font-medium text-gray-400'>MongoDB</p>
                  </div>
                

                </div>
              </div>

        </div>
    </div>
  )
}
