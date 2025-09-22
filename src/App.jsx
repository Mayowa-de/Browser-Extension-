import './components/Hero.css'
import Hero from "./components/Hero"
import Title from './components/Title'
import Button from './components/Button'

function App() {

  return (
      <div className='bg-[hsl(227, 75%, 14%)] gap-5 p-2 flex flex-col'>
        <Hero/>
        <Title/>
        <Button/>
      </div>
  )
}

export default App
