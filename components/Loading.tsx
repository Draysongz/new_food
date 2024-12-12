import Image from 'next/image'
import listIcon from "@/public/listCircle.svg"

const Loading = () => {

    const pageList = [
        { status: "", listItem: "Gathering Restaurants" },
        { status: "", listItem: "Vetting Menus" },
        { status: "", listItem: "Verifying riders" },
        { status: "notice", listItem: "Become a Merchant" },
        { status: "", listItem: "Getting payment options ready" },
        { status: "", listItem: "Setting everything up for you " },
        { status: "notice", listItem: "Read our Whitepaper" },
        { status: "", listItem: "Launch App" },
        { status: "notice", listItem: "Listing on Exchanges - Jan 3, 2025" },
        { status: "", listItem: "Version 2" }
    ];

  return (
    <div className="w-full h-full flex justify-center pt-5 bg-[#F8F0FB1A]">
        <main className="flex flex-col w-full px-5 gap-y-20 pt-10">
            <section className='flex flex-col gap-y-3'>
                {pageList.map((list, index) => (
                    <span key={index} className='flex items-center gap-3'>
                        <Image src={listIcon} alt='list Icon' width={30} height={30} />
                        <p className={list.status == "notice" ? "text-black py-1 px-6 bg-[#FDD902] rounded-full text-[11px]" : "text-white text-md"}>{list.listItem}</p>
                    </span>
                ))}
            </section>
            <section className='flex flex-col items-center gap-y-2 justify-center'>
                <p className='text-lg text-white'>Loading</p>
                <span className='w-[200px] flex border border-[#F8F0FB99] rounded-full h-[5px] bg-[#F8F0FB40]'>
                    <span className='w-[0%] h-full bg-[#FDD902] rounded-full animate-progress-bar'></span>
                </span>
            </section>
        </main>
    </div>
  )
}

export default Loading