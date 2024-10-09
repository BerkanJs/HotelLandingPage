import React ,{useContext} from 'react'
import {RoomContext} from '../context/RoomContext'
import{Menu} from '@headlessui/react'
import {BsChevronDown} from 'react-icons/bs'

const lis =[
  {name:'0 Child'},
  {name:'1  Children'},
  {name:'2 Children'},
  {name:'3 Children'},

]
const KidsDropdown = () => {

  const{kids,setKids}=useContext(RoomContext)
  return (
    <Menu as='div' className='w-full h-full bg-white relative'>
      <Menu.Button className='w-full h-full flex items-center justify-between px-8'>
        {kids==='0 Child' ? 'No Child' : kids}
        <BsChevronDown/>
      </Menu.Button>
      <Menu.Items className='bg-white absolute w-full flex flex-col z-40' as='ul'>
        {lis.map((li,index)=>{
          return(
            <Menu.Item onClick={()=>setKids(li.name)} className='border-b last-of-type:border-b-0 h-12 hover:bg-amber-400 transition-all duration-300 hover:cursor-pointer w-full flex justify-center ' as='li' key={index}>
              {li.name}


            </Menu.Item>
          )
        })}

      </Menu.Items>



    </Menu>
  )
}

export default KidsDropdown