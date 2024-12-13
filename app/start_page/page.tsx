"use client"

import { PermissionModal } from "@/components";
import { pageData } from "@/lib/startPageData"
import Image from "next/image"
import { useState } from "react";
import { FaMinus } from "react-icons/fa6";


const StartPage = () => {

    const [ openModal, setOpenModal ] = useState(false)

  return (
    <div className="w-full px-5 h-full flex justify-center pt-20 relative">
        <main className="flex flex-col items-center gap-y-8 w-full">
            <div className="flex overflow-x-scroll w-full gap-x-10 scrollbar-none">
                {pageData.map((slide, index) => (
                    <span key={index} className="flex flex-col min-w-full items-center gap-y-5">
                        <Image src={slide.imageURL} alt="slide Image" width={0} height={0} className="w-full" />
                        <h1 className="w-[90%] text-[#FDD902] text-4xl font-black text-center">{slide.heading}</h1>
                        <p className="text-center text-sm font-light">{slide.description}</p>
                    </span>
                ))}
            </div>
            <div className="w-full flex flex-col items-center gap-y-4">
                <span className="flex gap-x-2">
                    {pageData.map((activeSlide, index) => (
                        <FaMinus key={index} className={`text-xl text-[text-[#12B70066]]`} />
                    ))}
                </span>
                <span className="w-[300px] flex justify-center items-center text-black font-bold text-sm h-[47px] rounded-full bg-[#FDD902]" onClick={() => {setOpenModal(!openModal)}}>CONTINUE</span>
            </div>
        </main>

        { openModal && <PermissionModal onClose={() => {setOpenModal(!openModal)}} link="/home" /> }
    </div>
  )
}

export default StartPage