import React from 'react'
import {BsFillHouseFill} from 'react-icons/bs'
import {AiFillPhone} from 'react-icons/ai'
import {AiTwotoneMail} from 'react-icons/ai'
const Footer = () => {
  return (
    <div className='h-full w-full  overflow-auto text bg-blue-50 dark:bg-slate-800 sm:py-16  sm:px-96 '>
        <div className='flex items-center flex-col justify-center '>
                <div className='flex items-center flex-col gap-5 pb-12'>
                    <p className='dark:text-white text-3xl font-semibold border-b-slate-100'>Contacts</p>
                    <div className='sm:w-20 rounded-full h-1 bg-blue-800' />
                </div>

                <form action="mailto:emmancruz2000@gmail.com" method="post" encType='text/plain'  className='flex sm:flex-row flex-col w-full py-4 '>
                    <div className='dark:text-white flex-1 flex flex-col px-10 md:px-0 items-start sm:w-64 sm:gap-5'>
                        <div className='flex items-center gap-2'>
                            <BsFillHouseFill className='text-blue-600' size={40} />
                            <div className='flex flex-col items-start'>
                                <p className='text-xl font-light'>Metro Manila, Quezon City</p>
                                <p className='text-base font-extralight'>District 2, Holy Spirit</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiFillPhone className='text-blue-600' size={40} />
                            <div className='flex flex-col items-start'>
                                <p className='text-xl font-light'>09685324768</p>
                                <p className='text-base font-extralight'>Monday - Sunday</p>
                            </div>
                        </div>
                        <div className='flex items-center gap-2'>
                            <AiTwotoneMail className='text-red-400' size={40} />
                            <div className='flex flex-col items-start'>
                                <p className='text-xl font-light'>emmancruz2000@gmail.com</p>
                                <p className='text-base font-extralight'>Send me an email</p>
                            </div>
                        </div>
                    </div>

                    <div className='dark:text-white flex-1 mt-5 sm:mt-0 flex flex-col px-4 md:px-0 items-start sm:w-64 gap-2'>
                            <div className='w-full sm:w-96'>
                                <input type="text" id="first_name" className="w-11/12 p-2 
                                    focus:outline-blue-400 shadow-md border-gray-300 border-2" placeholder="Enter your name" 
                                />
                            </div>

                            <div className='w-full sm:w-96'>
                                <input type="email" id="first_name" className="w-11/12 p-2 
                                        focus:outline-blue-400 shadow-sm border-gray-300 border-2" placeholder="Enter email address" 
                                    />                            </div>   

                             <div className='w-full sm:w-96'>
                             <input type="text" id="first_name" className="w-11/12 px-4 py-2 
                                    focus:outline-blue-400 shadow-md border-gray-300 border-2" placeholder="Enter subject(Optional)" 
                                />
                            </div>   

                            <div className='w-full items-center sm:w-96'>
                             <button className="w-11/12 bg-blue-400 hover:bg-blue-500 cursor-pointer p-2 text-white font-medium
                                        focus:outline-blue-400 shadow-sm border-gray-300 border-2">Send Email </button>
                            </div>                
                    </div>

                    <div className='flex-1 flex px-4 sm:py-0 py-2 '>
                        <textarea className=' px-4 py-2 w-11/12
                                    focus:outline-blue-400  rounded shadow-md border-gray-300 border-2 resize-none'
                                     placeholder='Enter your message'/>
                    </div>
                </form>
        </div>
    </div>
  )
}

export default Footer