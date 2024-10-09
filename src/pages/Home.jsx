import React from 'react'
import Rooms from '../components/Rooms'
import BookForm from '../components/BookForm'
import HeroSlider from '../components/HeroSlider'


const Home = () => {
  return (
    <div>
      <HeroSlider/>
      <div className='container mx-auto relative flex items-center justify-center'>
        <div className='bg-slate-600/20 flex items-center w-[300px] lg:w-full  justify-center mt-4 p-4 lg:shadow-xl lg:absolute lg:left-0 lg:right-0 lg:p-0 lg:z-30 lg:-top-12'>
        <BookForm/>
       


        </div>
      
      </div>
      
    
      <Rooms/>
      
      
      
      </div>
  )
}

export default Home