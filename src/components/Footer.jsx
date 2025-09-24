import React from "react";

export default function Footer() {
  return (
    <div className="p-2 md:flex  grid grid-cols-1 justify-items-center md:items-center md:justify-center   shadow-md dark:bg-[hsl(226,25%,17%)] gap-3 justify-center items-center  bg-[linear-gradient(180deg,_#EBF2FC_0%,_#EEF8F9_100%)] border-2 rounded-xl border-[hsl(227,75%,14%)] dark:border-white ">
      <h2 className="font-semibold">Challenge by </h2>
      <div className="flex gap-3 items-center">
      <img
      aria-label="logo image"
        src="/images/favicon-32x32.png"
        className="w-10 h-10 shadow-md rounded-full border-none"
        alt="Logo icon"
      />
      <h2 className="font-semibold">Frontend-mentor developed</h2>
      </div>
        <h2 className="font-semibold">by</h2> 
       <div className="flex gap-3 items-center">
        <h2 className="font-semibold"> MayorTech</h2>
      <div className="rounded-full w-3 h-3 bg-green-500 shadow shadow-green-400"></div>
      </div>
    </div>
  );
}
