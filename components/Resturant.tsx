import { restaurants } from "@/lib/resturantsData"
import Image from "next/image";
import star from "@/public/star.svg" 


interface ResturantProp {
    index: number;
}

const Resturant = ({index}:ResturantProp) => {

  return (
    <div className="w-full flex min-h-screen justify-center pt-14 bg-[#F8F0FB1A] pb-6">
        <main className="flex flex-col w-full px-5 gap-y-20 pt-10 justify-between">
            <section className="flex flex-col gap-y-4">
                <div className="flex flex-col gap-y-3">
                    <span className="flex w-full text-xl">
                        <p className="uppercase text-[#FDD902] pr-1">RESTAURANT /</p>
                        <p className="text-white font-semibold">{restaurants[index].name}</p>
                    </span>
                    <p className="text-white text-md">{restaurants[index].description}</p>
                </div>
                <Image src={restaurants[index].imageURL} alt="resturant's Image" width={0} height={0} className="w-full" />
                <div className="w-full pt-5 flex flex-col gap-y-6">
                    <span className="flex flex-col gap-y-3">
                        <p className="uppercase">rating</p>
                        <span className="w-full rounded-lg px-4 py-2 flex items-center justify-between bg-[#F8F0FB1A]">
                            <span className="w-fit flex items-center gap-x-1">
                                <Image src={star} alt="star rating" width={24} height={24} />
                                <Image src={star} alt="star rating" width={24} height={24} />
                                <Image src={star} alt="star rating" width={24} height={24} />
                                <Image src={star} alt="star rating" width={24} height={24} />
                                <Image src={star} alt="star rating" width={24} height={24} />
                            </span>
                            <p className="text-xl font-semibold">{restaurants[index].rating}</p>
                        </span>
                    </span>
                    <span className="flex flex-col gap-y-3">
                        <p className="uppercase">CUISINE TYPE</p>
                        <span className="w-full rounded-lg px-4 py-2 flex items-center justify-between bg-[#F8F0FB1A] text-white text-xl">{restaurants[index].cuisineType}</span>
                    </span>
                </div>
            </section>
            <span className="py-4 text-white text-xl rounded-xl text-center w-full font-semibold bg-[#FDD902]">View all Menus</span>
        </main>
    </div>
  )
}

export default Resturant