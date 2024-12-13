"use client"

import Image from "next/image";
import logo from "@/public/logo.svg"
import StartPage from "./start_page/page";
import { useEffect, useState } from "react";


const Home = () => {

  const [ banner, setBanner ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setBanner(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-screen justify-center items-center flex bg-[#F8F0FB1A]">
      {banner ? 
      (<main className="flex flex-col gap-y-8 items-center w-full">
        <Image src={logo} alt="logo" width={160} height={158} />
        <h2 className="text-[40px] font-extrabold text-white">亚太百事通</h2>
      </main>)
      : 
      <StartPage />}
    </div>
  );
}

export default Home;