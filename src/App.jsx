import './components/Hero.css'
import Hero from "./components/Hero"
import Title from './components/Title'
import Button from './components/Button'

function App() {

  return (
      <div className='bg-[hsl(227, 75%, 14%)] gap-5 p-2 flex flex-col'>
        <Hero/>
        <div className='flex flex-col gap-3 justify-center items-center'>
        <Title/>
        <Button/>
        </div>
      </div>
  )
}

export default App
