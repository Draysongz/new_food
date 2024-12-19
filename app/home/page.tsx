"use client"

import { Loading } from '@/components'
import React, { useEffect, useState } from 'react'
import WelcomeScreen from './WelcomeScreen'

const Home = () => {

  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
        setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full h-full min-h-screen flex justify-center bg-[#F8F0FB1A]">
        <main className="flex flex-col w-full gap-y-20">
          {loading ? <Loading /> 
          :
            <WelcomeScreen />
          }
        </main>
    </div>
  )
}

export default Home