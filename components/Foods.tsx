
import { FaStar, FaRegClock } from "react-icons/fa6";
import { foodDetails } from "@/lib/searchData"
import Image from "next/image"

const Foods = () => {
  return (
    <div className="w-full flex flex-wrap justify-between gap-5">
        {foodDetails.map((food, index) => (
          <div key={index} className="w-[46.2%] bg-[#8C3116] p-3 rounded-[20px] gap-y-4">
            <span className="flex flex-col items-center w-full">
              <Image src={food.imageURL} alt={`Image of ${food.name}`} width={0} height={0} className="w-full" />
              <span className="w-[80px] h-[30px] rounded-full bg-[#FFCC00] mt-[-15px] mb-3 flex justify-center items-center">${food.price}</span>
            </span>

            <div className="flex flex-col justify-between gap-y-2 w-full text-white">
              <span className="w-full flex flex-col justify-between h-full">
                <h3 className="font-bold text-[15px] leading-tight">{food.name}</h3>
                <p className="text-[8px] font-semibold">{food.description}</p>
              </span>
              <div className="flex items-center w-full justify-between">
                <span className="flex items-center text-[12px] font-semibold"><FaStar className="pr-2 text-[#FFCC00] text-xl" />{food.rating}</span>
                <span className="flex items-center text-[12px] font-semibold"><FaRegClock className="pr-2 text-[#FFCC00] text-xl" />{food.averageTime}</span>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Foods