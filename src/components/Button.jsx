import React, { useEffect, useState } from "react";
export default function Button({ cards, onRemove, onToggle }) {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5 w-full justify-center items-center">
      {cards.map((card, i) => (
        <div
          key={i}
          className="w-full dark:bg-[hsl(226,25%,17%)]   bg-white rounded-xl shadow-md p-4 pt-3 flex flex-col gap-12"
        >
          <div className="flex gap-5">
            <img src={card.logo} alt="logoIcon" className="w-20 h-16" />
            <div className="flex flex-col gap-3">
              <h1 className="text-[hsl(227,75%,14%)] font-bold text-xl dark:text-white">
                {card.name}
              </h1>
              <p className="text-[hsl(225, 23%, 24%)] dark:text-white">
                {card.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between">
            <button
              onClick={() => onRemove(card.id)}
              className="focus:border-red-600 dark:focus:bg-hsl(225,23%,24%) dark:text-white focus:bg-[hsl(217,61%,90%)] flex justify-center items-center hover:text-white hover:bg-[hsl(3,77%,44%)] text-[hsl(227,75%,14%)] dark:border-white border-1 rounded-3xl  w-20"
            >
              Remove
            </button>
            <button onClick={() => onToggle(card.id)} className=" text-4xl ">
              {card.isActive ? (
                <i className=" bi bi-toggle-on text-red-600" />
              ) : (
                <i className="bi bi-toggle-off dark:text-[hsl(217,61%,90%)] " />
              )}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
