import React, { useContext } from 'react'
import CheckIn from '../components/CheckIn'
import AdultsDropdown from '../components/AdultsDropdown'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'
import { RoomContext } from '../context/RoomContext'

const BookForm = () => {
  const{handleClick}=useContext(RoomContext)
  return (
    <form className='h-[300px] w-3/4 lg:h-[70px]'>
      <div className='flex flex-col  w-full h-full lg:flex-row'>
        <div className='flex-1 w-full border-r' >
          <CheckIn/>
        </div>
        <div className='flex-1 border-r' >
          <CheckOut/>
        </div>
        <div className='flex-1 border-r'>
          <AdultsDropdown/>
        </div>
        <div className='flex-1 border-r'>
          <KidsDropdown/>
        </div>
        <button onClick={(e)=>handleClick(e)} type='submit' className='p-4 px-9 bg-amber-400 text-white font-bold text-xl hover:bg-white hover:text-amber-400 transition-all duration-300'> Check Now</button>
      </div>




    </form>
  )
}

export default BookForm