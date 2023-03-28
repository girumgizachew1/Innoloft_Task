import React from 'react'
import { BiHomeAlt2 } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { SiSteamdeck } from "react-icons/si";

function Sidebar() {
  return (
    <div className='w-full h-screen px-20 py-10 bg-gray-100' >
      <div className='flex flex-col gap-y-4 text-zinc-700 ' >
        <div className='flex space-x-2 ' > <BiHomeAlt2 /> <h1>Home</h1>  </div>
        <div className='flex space-x-2 ' > <BsFillPeopleFill /> <h1>Members</h1> </div>
        <div className='flex space-x-2 ' > <SiSteamdeck /> <h1>Originization</h1></div>
      </div>
    </div>
  )
}

export default Sidebar