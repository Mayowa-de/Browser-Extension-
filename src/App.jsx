import './components/Hero.css'
import Hero from "./components/Hero"
import Title from './components/Title'

function App() {

  return (
      <div className='bg-[hsl(227, 75%, 14%)] gap-5 p-2 flex flex-col'>
        <Hero/>
        <Title/>
      </div>
  )
}

export default App
