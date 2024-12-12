

import { foodDetails } from "@/lib/searchData"
import Image from "next/image"

const Foods = () => {
  return (
    <div className="w-full flex flex-wrap gap-4">
        {foodDetails.map((food, index) => (
            <span key={index} className="w-[47%]">
                <Image src={food.imageURL} alt={`Image of ${food.name}`} width={0} height={0} className="w-full" />
            </span>
        ))}
    </div>
  )
}

export default Foods