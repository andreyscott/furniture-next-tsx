import React from 'react'
import videoBg from '../../assets/furniture.mp4'
import { BsPlay } from 'react-icons/bs'


const Main = () => {
  return (
    <div className='main justify-center mt-10 items-center flex w-full h-full bg-green-700 relative z-30'>
        <div className="z-50 bg-green-400 "></div>
        <video src={videoBg} autoPlay controls loop muted />
        <button
           className="p-5 text-2xl flex items-center  md:mt-20  my-auto lg:text-3xl z-50 content font-mono shadow-xl shadow-black font-semibold hover:border-opacity-60  hover:duration-1000 hover:ease-in-out  text-white bg-transparent border-2 border-white rounded-full w-52 h-52  bg-opacity-50 ">
            play 
                <BsPlay className="inline-block ml-2 text-2xl" /> 
            </button>
    </div>
  )
}

export default Main