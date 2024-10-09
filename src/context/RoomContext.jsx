import React ,{createContext ,useEffect,useState} from 'react'
import {roomData} from '../data/data'

export const RoomContext=createContext();




const RoomProvider = ({children}) => {
  const [rooms,setRooms]=useState(roomData);
  const [total,setTotal] =useState(0);
  const [kids,setKids] =useState('0 Kids');
  const [adults,setAdults] =useState('1 Adult');

  useEffect(()=>{
    setTotal(Number(adults[0])+Number(kids[0]))

  });
  const handleClick=(e)=>{
    e.preventDefault()
    const newRooms=roomData.filter((room)=>{
      return total <=room.maxPerson;
      });
      setRooms(newRooms);

  }
  
  return (
    <RoomContext.Provider value={{rooms ,adults,total,kids,setKids,setAdults,handleClick}}>{children}</RoomContext.Provider>
  )
}

export default RoomProvider