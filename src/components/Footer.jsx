import React from 'react'
import { PiFlowerLotusLight } from "react-icons/pi";
const Footer = () => {
  return (
    <footer className='h-[150px] bg-gray-800 flex items-center justify-around px-5'>
      {/* LOGO */}
      <div className='text-white'>
         <div className='flex items-center justify-center space-x-4'>
        <PiFlowerLotusLight className='text-[4rem]'/>
        <h1 className='text-4xl font-bold'>Lotus Hotel</h1>
        </div>


      </div>

      <div>

        <p className='text-2xl font-semibold text-white'>All Rights Are Reserved</p>
      </div>







    </footer>
  )
}

export default Footer