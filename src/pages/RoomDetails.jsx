import React, { useContext ,useState,useEffect} from 'react'
import {useParams} from 'react-router-dom'

import AdultsDropdown from '../components/AdultsDropdown'
import CheckIn from '../components/CheckIn'
import CheckOut from '../components/CheckOut'
import KidsDropdown from '../components/KidsDropdown'

import { RoomContext } from '../context/RoomContext'

import {FaCheck} from 'react-icons/fa'

import ScrollToTop from '../components/ScrollToTop'


const RoomDetails = () => {
  const {id} =useParams();
  const {rooms}=useContext(RoomContext);
  const room =rooms.find((room)=>{
    return room.id ===Number(id);
  })
  const {name,description,facilities,image,price}=room;

  

  
  
  return (
    <section >
      <div className='bg-bg1 bg-repeat bg-center  h-[560px] flex justify-center items-center relative'>
        <div className='absolute w-full h-full bg-black/70'></div>
        <h1 className='text-6xl font-bold text-white text-center z-20'>{name} Details</h1>
       
      </div>
      <div className='container mx-auto'>
          <div className='flex flex-col lg:flex-row h-full py-24'>
            <div className='w-full h-full lg:w-[60%] px-6 z-20 '>
              <h2 className='text-5xl font-bold mb-8 text-black'>{name}</h2>
              <p className='mb-8 text-black text-left'>{description}</p>
              <img className='mb-8 h-full w-[600px]' src={image} alt="" />
              <div className='mt-12'>
                <h3 className='text-black text-3xl mb-3 font-semibold'>Room Facilities</h3>
                <p className='mb-12'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae maiores earum nulla id cumque. Nemo officiis consequuntur quia libero harum.</p>
                <div className='grid grid-cols-3 gap-6 mb-12'>

                 {facilities?.map((item,index)=>(
                   <div className='flex items-center gap-x-3 flex-1' key={index}>
                     <div className='text-3xl text-amber-500'><item.icon/> </div> 
                     <div className='text-xl'>{item.name} </div>   
                    </div>
                 ))}

                </div>
              </div>


            </div>
            <div className='w-full h-full lg:w-[40%]  text-black'>
              <div className='py-8 flex flex-col items-center  px-6 mb-12 bg-amber-700/20'>
                <div className='flex flex-col space-y-4 mb-4'>
                  <h3 className='text-xl font-semibold'>Your Reservation</h3>
                  <div className='h-[60px]'>
                    <CheckIn/>
                  </div>
                  <div className='h-[60px]'>
                    <CheckOut/>
                  </div>
                  <div className='h-[60px]'>
                    <AdultsDropdown/>
                  </div>
                  <div className='h-[60px]'>
                    <KidsDropdown/>
                  </div>
                  
                </div>
                <button className=' text-xl  p-3 text-white bg-amber-500'>Book now for ${price}</button>
           

              </div>
    
           

            </div>


          </div>
        </div>






    </section>
      




 
  )
}

export default RoomDetails
