import React from 'react'
import { useStateContext } from '../context/darkContext'
import {BsFillMoonFill, BsFillSunFill} from 'react-icons/bs'
import Resume from './resume.pdf'

export const Navbar = () => {
  const {active, setActive} = useStateContext()

  return (
    <>
          <div className='md:px-10 px-1 sticky top-0 z-50 shadow-lg bg-slate-100  dark:bg-gray-700' >
              <nav className=' dark:text-white p-4 items-center  flex justify-between '>
                <h1 className='sm:text-xl text-md font-burtons'>cruzdeveloper</h1>
                <ul className='flex items-center gap-5'>
                  <li>

                      {active ? (
                        <button onClick={(e) => setActive((prev) => !prev)} className="rounded-full bg-slate-700 hover:bg-slate-900 p-1 "><BsFillSunFill size={25} />
                        </button>
                      ): 
                      (
                        <button onClick={(e) => setActive((prev) => !prev)} className="rounded-full bg-slate-200 hover:bg-slate-300 p-1  ">
                        <BsFillMoonFill className='text-black' size={20} />
                        </button>
                      )}
                    
                  </li>
                  <li>
                    <button  className='sm:text-xs font-bold text-slate-50 text-md bg-blue-400 px-3 hover:bg-blue-500 py-1 rounded'>
                      <a href={Resume} download="cruz_cv.pdf">Download CV</a>
                    </button>
                  </li>
                </ul>
              </nav>
              
          </div>
          
          
      </>
  )
}
