import React, { useEffect, useState } from 'react'
import Data from '../data.json'
export default function Button() {
  const [cards, setCards]= useState('')
  const [filter, setFilter]= useState('All')


  useEffect(()=>{
    
  })
  return (
    <div className='flex flex-col gap-5 w-full justify-center items-center'>
    <div>
      {Data.map((item, i)=>{
      <div key={i} className='w-full bg-white rounded-xl shadow-md'>
        <div className='flex gap-3'>
        <img src={item.logo} alt="logoIcon" className='w-16 h-12' />
        <h1 className='text-[hsl(227,75%,14%)] font-medium'>{item.name}</h1>
      </div>
      <p>{item.description}</p>
      <button className={`${Data.isActive === 'true' ? 'bi bi-toggle-on' : 'bi bi-toggle-off' }`}></button>
      </div>
      })}
    </div>
    </div>
  )
}
