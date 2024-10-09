import React from 'react'
import {Swiper , SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/effect-fade'
import {EffectFade ,Autoplay} from  'swiper/modules';
import slider1 from '../img/slider/slider1.jpeg'
import slider2 from '../img/slider/slider2.jpeg'
import slider3 from '../img/slider/slider3.jpeg'
const slides=[
  {
    title:'Your Luxury Hotel for Vacation',
    bg:slider1,
    btnText:'Room & Suites',

  },
  {
    title:'Your Luxury Hotel for Vacation',
    bg:slider2,
    btnText:'Room & Suites',

  },
  {
    title:'Your Luxury Hotel for Vacation',
    bg:slider3,
    btnText:'Room & Suites',

  },

];
const HeroSlider = () => {
  return (
    <Swiper
     modules={[EffectFade,Autoplay]}
     effect={'fade'}
     Loop={true}
     autoplay={{
      delay:3000,
      disableOnInteraction:false
     }}
     className='heroSlider h-[600px] lg:h-[860px]'>
      {slides.map((slide,index)=>{
        const {title,bg,btnText}=slide;
        return(
          <SwiperSlide key={index} className='h-full relative flex justify-center items-center '>
            <div className='z-20 text-white text-center'>
              <div className='uppercase tracking-[6px] mb-5'>Just Enjoy and Relax</div>
              <h1 className='text-[32px] uppercase tracking-[2px] max-w-[920px] lg:text-[68px] leading-tight mb-6'>{title}</h1>
              <button className='text-xl mt-4 p-4 bg-amber-400 rounded-lg hover:scale-105 transition-all duration-300'>{btnText}</button>
            </div>
            <div className='absolute top-0 w-full h-full'>
              <img className='object-cover h-full w-full ' src={bg} alt="" />


            </div>
            <div className='absolute w-full h-full bg-black/70'></div>

          </SwiperSlide>)
        
      })}

    </Swiper>
  )
}

export default HeroSlider