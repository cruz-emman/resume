import React from 'react'

export const Header = () => {
  return (
    <div className='relative md:h-screen md:mt-0 sm:my-24   dark:text-slate-300 flex items-center justify-center '>
      <div className='flex flex-col items-center m-auto left-0 right-0 translate-y-1/3 absolute h-full ' >
        <h6 className='sm:text-xl font-semibold'>Hello! I'm,</h6>
        <h4 className='md:text-7xl sm:text-center sm:text-4xl text-2xl font-bold' >Emmanuel Joseph Cruz</h4>
        <h3 className='sm:text-2xl'>Web Developer</h3>
      </div>
    </div>
  )
}
