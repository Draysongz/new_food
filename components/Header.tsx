// "use client"

// import { RiArrowLeftSFill } from "react-icons/ri";
// import { FaEllipsisVertical, FaChevronDown } from "react-icons/fa6";
// import { useState } from "react";
// import Link from "next/link";

// const Header = () => {

//     const [ openMenu, setOpenMenu ] = useState(false);

//     const navItems = [
//         {
//             name: "Open Bot"
//         },
//         {
//             name: "Reload Page"
//         },
//         {
//             name: "Terms of Use"
//         },
//     ]

//   return (
//     <header className='w-full flex justify-center items-center h-[50px] bg-[#121113] absolute top-0 z-10'>
//         <menu className='w-[90%] flex justify-between items-center relative'>
//             <RiArrowLeftSFill className="text-white text-2xl" />
//             <span className="text-2xl text-white w-fit">亚太百事通</span>
//             <span className="flex w-[55px] justify-between items-center text-white text-xl">
//                 <FaChevronDown />
//                 <FaEllipsisVertical onClick={() => setOpenMenu(!openMenu)} />
//             </span>

//             <nav className={`flex w-[180px] border border-[#FDD902] flex-col items-center justify-evenly h-[150px] bg-[#121113] absolute top-10 right-0 ${openMenu ? "visible" : "hidden"}`}>
//                 {navItems.map((item, index) => (
//                     <Link key={index} href="#">{item.name}</Link>
//                 ))}
//             </nav>
//         </menu>
//     </header>
//   )
// }

// export default Header