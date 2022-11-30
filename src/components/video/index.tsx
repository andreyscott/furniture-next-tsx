import React from 'react';
import { BsPlay } from 'react-icons/bs'


 const BottomVideo = () => {
  return (
    <><section className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img" >
         
       
          <button
           className="p-5 text-2xl lg:text-3xl font-mono shadow-xl shadow-black font-semibold hover:border-opacity-60  hover:duration-1000 hover:ease-in-out  text-white bg-transparent border-2 border-white rounded-full w-52 h-52  bg-opacity-50 ">
             
          <video className="w-full h-full" autoPlay loop muted>
            <source src="./video/furniture.mp4" type="video/mp4" />
        
            </video>
            <video controls autoPlay={true} loop muted>
                <source src={"/video/furniture.mp4"} type="video/mp4" />
              </video>
          </button>









          
      </section>
    
          </>
  )
}

export default BottomVideo
