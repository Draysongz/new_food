import Link from 'next/link';
import { useEffect, useState } from 'react'
import { FaSistrix } from "react-icons/fa6";

const WelcomeScreen = () => {

    const [ welcome, setWelcome ] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => {
        setWelcome(!welcome);
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

  return (
    <div>
        {welcome ? 
        (<div>WelcomeScreen</div>) 
        : 
        (<div className='w-full flex flex-col px-5 py-5'>
            <main>
                <section className='flex flex-col gap-y-4 items-center'>
                    <span className='flex w-full justify-between items-center'>
                        <p className='text-xl text-white'>Good Afternoon</p>
                        <span className='p-3 bg-[#FDD902] rounded-lg text-black'>
                            <Link href="/search"><FaSistrix className='text-lg' /></Link>
                        </span>
                    </span>
                    <h1 className='text-6xl text-[#FDD902] font-extrabold uppercase'>Joshua</h1>
                </section>
            </main>
        </div>)}
    </div>
  )
}

export default WelcomeScreen