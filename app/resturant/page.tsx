"use client"

import { Resturant } from '@/components'
import { useState } from 'react'


const page = () => {

    const [ restorant, setRestorant ] = useState(0);

  return (
    <div><Resturant index={restorant} /></div>
  )
}

export default page