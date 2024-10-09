import React ,{useState} from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import '../datepicker.css'
import {BsCalendar} from 'react-icons/bs'

const CheckIn = () => {

    const [endDate,setEndDate]= useState(false)
    return (
      <div className='relative flex items-center justify-end  h-full'>
        <div className='absolute   pr-8'>
          <div >
            <BsCalendar className='text-amber-500 text-2xl '/>
          </div>
  
        </div>
        <DatePicker
        className='w-full h-full'
        selected={endDate}
        placeholderText='Check In'
        onChange={(date)=>setEndDate(date)}
        
        />
      </div>
    )
  
}

export default CheckIn