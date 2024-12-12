"use client"

import Foods from "@/components/Foods";
import { useState } from "react";
import { FaSistrix } from "react-icons/fa6";

const Search = () => {

  const [ active, setActive ] = useState("Foods")

  const Buttons = ["Foods", "Restaurants"];

  return (
    <div className="w-full flex min-h-screen justify-center pt-14 bg-[#F8F0FB1A] pb-6">
        <main className="flex flex-col w-full px-5 gap-y-6 pt-3">
          <div className="flex flex-col gap-y-3">
            <h1 className='uppercase text-center text-2xl font-semibold text-[#FDD902]'>search</h1>
            <form action="submit" className="flex gap-x-3">
              <input type="text" placeholder='Search' className="w-full rounded-lg px-3 text-white bg-[#FFFFFF1A]" />
              <button type='submit' className='p-3 bg-[#FDD902] font-semibold rounded-lg text-black'>{<FaSistrix className='text-lg' />}</button>
            </form>
          </div>

          <section className="flex w-full flex-wrap">
            <div className="flex gap-x-5 justify-center w-full">
              {Buttons.map((tab, index) => (
                <span key={index} onClick={() => {setActive(tab)}} className={`w-1/2 text-center rounded-xl py-4 text-lg ${active == tab ? "bg-[#FDD902] text-black" : "text-[#FFFFFF33] bg-[#FDD9021A]"}`}>{tab}</span>
              ))}
            </div>
          </section>

          {active == "Foods" ? <Foods /> : ""}
        </main>
    </div>
  )
}

export default Search