import './components/Hero.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Hero from "./components/Hero"
import Title from './components/Title'
import Button from './components/Button'
import Data from  './data.json'
import { useState } from 'react'

function App() {
  const [filter, setFilter]= useState('All')
   const filterData  = Data.filter((item)=>{
    if(filter === 'All') return true
    return item.isActive === filter
   })
  return (
      <div className='bg-[hsl(227, 75%, 14%)] gap-5 p-4 flex flex-col'>
        <Hero/>
        <div className='flex flex-col  gap-3 justify-center items-center'>
        <Title currentFilter={filter} setFilter={setFilter}/>
        <Button cards={filterData} />
        </div>
      </div>
  )
}

export default App
