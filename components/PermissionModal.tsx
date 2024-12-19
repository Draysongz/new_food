import Image from 'next/image'
import phone from "@/public/phone.svg"
import Link from 'next/link';


interface PermissionModalProp{
    onClose: () => void;
    link: string;
}

const PermissionModal = ({ onClose, link }:PermissionModalProp) => {
  return (
    <div className='w-full h-full fixed inset-0 flex items-center justify-center bg-white/15 bg-opacity-50 backdrop-blur-sm z-50 px-6'>
        <main className='w-full flex flex-col items-center px-5 py-8 bg-white rounded-3xl gap-y-8'>
            <div className='w-full flex flex-col items-center text-center gap-y-4'>
                <Image src={phone} alt='phone icon' width={26} height={26} />
                <h1 className='text-[#121113] text-2xl'>Grant Permission</h1>
                <p className='text-[#12111399] text-sm'>Give 亚太百事通 permission to interact with your Telegram Account to share your personal details and manage your inventory.</p>
            </div>
            <section className="uppercase text-[#121113] w-full flex justify-between items-center">
                <h2 onClick={onClose} className='text-sm'>cancel</h2>
                <span className='py-2 w-[180px] text-center text-sm rounded-full bg-[#FDD902]'><Link href={link}>grant permission</Link></span>
            </section>
        </main>
    </div>
  )
}

export default PermissionModal