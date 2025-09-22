import React from 'react'
import './Hero.css'
import Date from '../data.json'
import Logo from '../assets/images/logo.svg'
import MoonIcon from '../assets/images/icon-moon.svg'
export default function Hero() {
  return (
    <div className=''>
      <div className='flex mt-4 gap-4 items-center w-full bg-white p-2 h-16 shadow-md'>
        <img src={Logo} alt="Logo" className=' w-40 '/>
        <div className='w-full flex justify-end'>
        <button className=' w-12 h-12 flex justify-center items-center rounded-xl bg-[hsl(226,11%,37%)]  '><img src={MoonIcon} alt="moon icon" className='w-5 h-5' /></button>
      </div>
      </div>
    </div>
  )
}
