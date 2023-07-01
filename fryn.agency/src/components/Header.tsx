import Image from "next/image";
import logo from "../../public/favicon.png";
import Link from "next/link";
import HamburgerMenu from "./Hamburger";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-5 ">
      <div className="flex md:hidden flex-row-reverse w-screen justify-between">
        <Image src={logo} width={50} alt="" className="rounded-full bg-white" />
        <HamburgerMenu />
      </div>
      <header className="rtl hidden h-20 w-screen flex-row-reverse items-center gap-12 bg-[#0072ff]  font-bodyFont text-lg text-white md:flex">

        <Image src={logo} width={50} alt="" className="rounded-full bg-white mr-20" />
        <div className="w-screen flex gap-12  flex-row-reverse justify-center items-center absolute">
        <Link href={"/"}>صفحه اصلی</Link>
        <Link href={"https://portfolio.fryn.agency"}> نمونه کار</Link>
        <Link href={"/team"}>تیم فریان</Link>
        <Link href={"/about-us"}>درباره ما</Link>
        <Link href={"https://t.me/Frynads"}>تماس با ما</Link>
        </div>
      </header>
    </div>
  );
};

export default Header;
