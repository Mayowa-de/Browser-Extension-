import React from 'react'
import './Hero.css'
import Date from '../data.json'
import Logo from '../assets/images/logo.svg'
export default function Hero() {
  return (
    <div className=''>
      <div className='flex mt-4 gap-4 items-center w-full bg-white p-2 h-16 shadow-md'>
        <img src={Logo} alt="Logo" className=' w-40 '/>
        <button className=' w-full  flex justify-end pr-2'>light</button>
      </div>
    </div>
  )
}
