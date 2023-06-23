import Image from 'next/image'
import speaker from '../../public/speaker-2.svg' 
import bar from '../../public/Group4.svg'
import Link from 'next/link'
import {BsInstagram} from 'react-icons/bs'
import { HiMiniDevicePhoneMobile } from 'react-icons/hi2'
import {HiOutlineLocationMarker} from 'react-icons/hi'

const Footer = () => {
    return (
        <>
            <Image src={bar} width={2040}  alt='' className=' bg-rose-500' />
            <div className="bg-rose-500 h-auto  font-bodyFont text-white pt-40">
                <div className="title flex flex-col lg:px-20 px-10 lg:items-normal items-center">
                <h1 className='lg:text-9xl text-6xl font-bold lg:text-right text-center'>
                همین الان شروع کنید.
                </h1>
                <Link href={'/contact-us'} className='hover:bg-rose-500 hover:text-white transition-all delay-75  ease-in'><p className='py-4 px-10 mt-10 bg-white rounded-full inline-block lg:text-3xl text-xl mb-10 text-rose-500 font-bold'>تماس با ما</p></Link>
                </div>
                <div className="flex lg:flex-row flex-col justify-center items-center px-7"> 
                <Image src={speaker} alt='' className=' lg:block hidden lg:w-auto w-[40vw]'/>
                <div className="call lg:px-20 pb-4 flex lg:flex-row-reverse flex-col gap-5 items-center justify-center">
                <Link href={'https://instagram.com/fryn.agency'} className=''>
                    <BsInstagram size={24}/>
                </Link>
                <div className="flex flex-row-reverse "><HiMiniDevicePhoneMobile size={24} />
                <p className='text-xl'>09116801800</p></div>
                <div className="flex flex-row-reverse"><HiOutlineLocationMarker size={24}/>
                <p className='text-xl'>مازندران, بابل, گلستان ۱۷</p></div>
                
                </div>
                
                </div>
                
            </div>
        </>
    )
}

export default Footer