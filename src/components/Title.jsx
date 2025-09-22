import React from 'react'
import './Hero.css'
export default function Title() {
  return (
    <div className='text-3xl gap-5 items-center grid fontBold font-bold mt-5 justify-center  grid-col-1 md:flex font  w-full text-[hsl(227,75%,14%)] md:justify-between'>
      <h1 className='flex w-full  justify-center md:justify-start '>Extensions List</h1>
        <div className='flex gap-5 fontRegular font-medium w-full justify-end'>
            <button className='w-16 h-12 shadow-md rounded-3xl text-xl text-white bg-[hsl(3,77%,44%)]'>All</button>
            <button className='w-24 h-12 bg-white text-[hsl(227,75%,14%)] shadow-md text-xl rounded-3xl'>Active</button>
            <button className='w-28 h-12 text-xl text-[hsl(227,75%,14%)] shadow-md bg-white rounded-3xl'>Inactive</button>
          </div>
    </div>
  )
}
