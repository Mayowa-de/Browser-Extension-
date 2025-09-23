import {useEffect, useState} from 'react'
import './Hero.css'
import Date from '../data.json'

export default function Hero() {
  const [isToggle, setIsToggle] = useState(()=>{
    return localStorage.getItem('theme') === 'dark'
  })

  useEffect(()=>{
    const root = document.documentElement;
    if(isToggle){
      root.classList.add('dark')

      localStorage.setItem('theme',  'dark')
    }else{
      root.classList.remove('dark');

      localStorage.setItem('theme', 'light')
    }
  },[isToggle])
  return (
      <div className='flex mt-4 gap-4 items-center rounded-xl w-full bg-white p-2 h-16 shadow-md'>
        <img src='/public/images/logo.svg' alt="Logo" className=' w-40 '/>
        <div className='w-full flex justify-end'>
        <button onClick={()=>setIsToggle(!isToggle)} className={` w-12 h-12 flex justify-center items-center rounded-xl ${!isToggle ? 'bg-[hsl(226,11%,37%)]' : 'bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)]'}`}>
        {isToggle ? (
          <img src='/public/images/icon-moon.svg' alt="moon icon" className='w-5 h-5 dark:text-white' />
        ) : (
          <img src='/public/images/icon-sun.svg' alt="sun icon" className='w-5 h-5 dark:text-white' />
        )}
          </button>
      </div>
      </div>
  )
}
