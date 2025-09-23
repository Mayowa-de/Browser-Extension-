import React, { useState } from 'react'
import './Hero.css'
export default function Title({currentFilter, setFilter}) {
  const btnClass= (val)=> `${currentFilter === val ? 'text-white bg-[hsl(3,77%,44%)] foucus:outline-none focus:ring-red-white transition focus:ring-2 focus:border-3 focus:border-[hsl(3,77%,44%)]' : 'bg-white text-[hsl(227,75%,14%)] focus:border-[hsl(3,77%,44%)] focus:border-1'}`;

 
  return (
    <div className='text-3xl gap-5 items-center grid fontBold font-bold mt-5 justify-center  grid-col-1 md:flex font  w-full text-[hsl(227,75%,14%)] md:justify-between'>
      <h1 className='flex w-full  justify-center md:justify-start dark:text-white'>Extensions List</h1>
        <div className='flex gap-5 fontRegular font-medium w-full justify-end'>
            <button onClick={()=>setFilter('All')} className={`${btnClass('All')} w-16 h-12 dark:text-white   shadow-md rounded-3xl text-xl `}>All</button>
            <button onClick={()=>setFilter('Active')} className={`${btnClass('Active')} w-24 h-12 dark:text-white  shadow-md text-xl rounded-3xl`}>Active</button>
            <button onClick={()=>setFilter('Inactive')} className={`${btnClass('Inactive')} w-28 h-12 text-xl dark:text-white shadow-md  rounded-3xl`}>Inactive</button>
          </div>
    </div>
  ) 
}
