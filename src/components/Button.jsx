import React from 'react'

export default function Button() {
  return (
    <div className='flex gap-5 fontRegular font-medium'>
      <button className='w-16 h-12 shadow-md rounded-3xl text-xl text-white bg-[hsl(3,77%,44%)]'>All</button>
      <button className='w-24 h-12 bg-white text-[hsl(227,75%,14%)] shadow-md text-xl rounded-3xl'>Active</button>
      <button className='w-28 h-12 text-xl text-[hsl(227,75%,14%)] shadow-md bg-white rounded-3xl'>Inactive</button>
    </div>
  )
}
