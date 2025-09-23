import React, { useEffect, useState } from 'react'
import Data from '../data.json'
export default function Button({cards}) {
  const [toggle, setToggle] = useState(false)
  return (
    <div className='flex flex-col md:grid md:grid-cols-3 gap-5 w-full justify-center items-center'>
     {cards.map((card,  i)=>(
      <div key={i} className='w-full bg-white rounded-xl shadow-md p-4 pt-3 flex flex-col gap-12'>
        <div className='flex gap-5'>
        <img src={card.logo} alt="logoIcon" className='w-20 h-16' />
        <div className='flex flex-col gap-3'>
        <h1 className='text-[hsl(227,75%,14%)] font-bold text-xl'>{card.name}</h1>
      <p className='text-[hsl(225, 23%, 24%)]'>{card.description}</p>
      </div>
      </div>
      <div className='flex justify-between'>
        {}
      <button className='bg-  text-[hsl(227,75%,14%)] border-1 rounded-3xl  w-20'>Remove</button>
      <button onClick={()=>setToggle(!toggle)} className=' text-3xl'>
        {toggle ? (
         <i className='bi bi-toggle-on' />
        ): (
          <i className='bi bi-toggle-off'/>
        )}
      </button>
      </div>
      </div>
    ))}
    </div>
  )
}
