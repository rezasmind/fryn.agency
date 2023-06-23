import Image from 'next/image'
import logo from '../../public/favicon.png' 
import Link from 'next/link'

const Header = () => {
    return (
        <header className='rtl flex flex-row-reverse w-full h-20 items-center gap-12 px-14 font-bodyFont text-white bg-rose-500'>
        <Image src={logo}  width={50} alt='' className='bg-white rounded-full'/>
        <Link href={'/about-us'}>درباره ما</Link>
        <Link href={'/about-us'}>تیم فریان</Link>
        <Link href={'/contact-us'}>تماس با ما</Link>
        </header>
    )
}

export default Header