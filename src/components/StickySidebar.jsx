import React from 'react'
import{BsFacebook, BsGithub,BsLinkedin } from 'react-icons/bs'
const StickySidebar = () => {
  return (
    <section className='sticky left-2 top-[200px] sm:top-[400px] w-10 md:w-16 z-[100] text-lg'>
        <div className='flex flex-col gap-5 items-center justify-center bg-slate-200 py-2 md:px-4 rounded-2xl'>
            <div className='text-blue-600 hover:text-blue-700 cursor-pointer md:w-full md:h-full '>
                <a href='https://www.facebook.com/Useless.Doggo/'>
                <BsFacebook className="w-full h-full" size={25} />

                </a>
            </div>
            <div className='text-gray-600 hover:text-gray-900  cursor-pointer md:w-full md:h-full '>
                <a href="https://github.com/cruz-emman/">
                    <BsGithub className="w-full h-full" size={25} />
                </a>
            </div>
            <div className='text-sky-600 hover:text-sky-700  cursor-pointer md:w-full md:h-full '>
               <a href="https://www.linkedin.com/in/emmanuel-joseph-cruz-522b8825a/">
                <BsLinkedin className="w-full h-full" size={25} />
               </a>
            </div>
        </div>
    </section>
  )
}

export default StickySidebar