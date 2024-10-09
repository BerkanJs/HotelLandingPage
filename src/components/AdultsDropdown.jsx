import React ,{useContext} from 'react'
import {RoomContext} from '../context/RoomContext'
import{Menu} from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'

const lis =[
  {name:'1 Adult'},
  {name:'2 Adults'},
  {name:'3 Adults'},
  {name:'4 Adults'},

]
const AdultsDropdown = () => {
  const{adults,setAdults}=useContext(RoomContext)
  return (
    
    <Menu as='div' className='w-auto h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {adults} 
        <BsChevronDown/>
      </Menu.Button>
      <Menu.Items className='bg-white absolute w-full flex flex-col z-40' as='ul'>
        {lis.map((li,index)=>{
          return(
            <Menu.Item onClick={()=>setAdults(li.name)} className='border-b last-of-type:border-b-0 h-12 hover:bg-amber-400 transition-all duration-300 hover:cursor-pointer w-full flex justify-center' as='li' key={index}>
              {li.name}


            </Menu.Item>
          )
        })}

      </Menu.Items>



    </Menu>
  )
}

export default AdultsDropdown