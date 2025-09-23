import "./components/Hero.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Hero from "./components/Hero";
import Title from "./components/Title";
import Button from "./components/Button";
import Data from "./data.json";
import { useState } from "react";
import Plus from "./components/Plus";

function App() {
  const [cardToggle, setCardToggle] = useState(Data)
  const [filters, setFilters] = useState("All");
  const [Remove, setRemove] = useState(Data);
  const filterData = Data.filter((cardFilter)=>{
      if(filters === 'Active'){
        return cardFilter.isActive === true
      }else if(filters === 'Inactive'){
        return cardFilter.isActive === false
      }else{
        return true
      }
  })
   const handToggle = (id)=>{
    setCardToggle((prev)=>prev.map(card =>card.id === id ? {...card, isActive : card.isActive} : card))
  }

  const handleRemove = (id) => {
    setRemove(prev=>prev.filter(cardl=>cardl.id !== id))
  };

  return (
    <div className="bg-[hsl(227, 75%, 14%)] gap-5 p-4 flex flex-col">
      <Hero />
      <div className="flex flex-col  gap-3 justify-center items-center">
        <Title currentFilter={filters} setFilter={setFilters} />
        <Button cards={filterData} onRemove={handleRemove} onToggle={handToggle} />
      </div>
      <Plus/>
    </div>
  );
}

export default App;
