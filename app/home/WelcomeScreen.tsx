import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FaSistrix } from "react-icons/fa6";
import herobg from "@/public/homebg.png"
import Image from 'next/image';
import MainFooter from '@/components/MainFooter';

const WelcomeScreen = () => {

    const [ welcome, setWelcome ] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWelcome(!welcome);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

  const homeNav = ["restaurant", "sell goods", "my orders", "my payments", "my profile", "bot"]

  return (
    <div>
        {welcome ? 
        (<div className='flex flex-col w-full min-h-full relative h-screen'>
          <Image src={herobg} alt='Hero Image' width={0} height={0} className='w-full h-full' />
          <section className='flex flex-col w-full gap-y-1 justify-center items-center bottom-0 absolute z-10 bg-gradient-to-b from-black/0 via-black/80 to-black/100 text-white h-[350px] pt-20 px-5'>
            <p className='text-[18px] font-medium'>Bringing Meals to your Doorstep</p>
            <h1 className='text-[54px] text-[#FDD902] font-extrabold'>亚太百事通</h1>
            <hr className='w-full text-white' />
            <p>be on the lookout for updates</p>
            <div>

            </div>
          </section>
        </div>) 
        : 
        (<div className='w-full flex flex-col justify-between min-h-screen'>
            <main className='flex flex-col gap-y-4 pt-16 px-5'>
              <section className='flex flex-col gap-y-4 items-center'>
                  <span className='flex w-full justify-between items-center'>
                      <p className='text-xl text-white'>Good Afternoon</p>
                      <span className='p-3 bg-[#FDD902] rounded-lg text-black'>
                          <Link href="/search"><FaSistrix className='text-lg' /></Link>
                      </span>
                  </span>
                  <h1 className='text-6xl text-[#FDD902] font-extrabold uppercase'>Joshua</h1>
              </section>

              <section className='w-full h-[160px] flex flex-wrap justify-between gap-5'>
                {homeNav.map((nav, index) => (
                  <span key={index} className='px-4 py-3 border border-[#FDD902] flex flex-col justify-between gap-y-4 items-center bg-[#FDD90240] w-[46%] h-full rounded-xl'>
                    <span className='h-[130px] w-full bg-[#D9D9D9]'></span>
                    <a href={`/${nav}`}><h3 className='text-[#FDD902] text-md font-semibold text-center uppercase'>{nav}</h3></a>
                  </span>
                ))}
              </section>
            </main>

            <MainFooter />
        </div>)}
    </div>
  )
}

export default WelcomeScreen