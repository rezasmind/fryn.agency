import Image from "next/image";
import logo from "../../public/New-logo-trans-1.png";
import Link from "next/link";
import HamburgerMenu from "./Hamburger";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-5 ">
      <div className="flex md:hidden flex-row-reverse w-screen justify-between">
      <Link href={"/"} className=""><Image src={logo} width={75} alt="" className="rounded-full pr-8" /></Link>
        
        <HamburgerMenu />
      </div>
      <header className="rtl hidden h-20 w-screen flex-row-reverse items-center gap-12 bg-[#0072ff]  font-bodyFont text-lg text-white md:flex">

      <Link href={"/"}><Image src={logo} width={100} alt="" className="rounded-full pr-8" /></Link>
        <div className="w-screen flex gap-12  flex-row-reverse justify-center items-center absolute">
        <Link href={"/"}>صفحه اصلی</Link>
        <Link href={"/prices"}> تعرفه خدمات</Link>
        <Link href={"/team"}>تیم فریان</Link>
        <Link href={"/about-us"}>درباره ما</Link>
        <Link href={"https://t.me/Frynads"}>تماس با ما</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
