import Image from "next/image";
import logo from "../../public/favicon.png";
import Link from "next/link";
import HamburgerMenu from "./Hamburger";

const Header = () => {
  return (
    <div className="flex flex-row items-center justify-center mt-5 px-8">
      <div className="flex md:hidden flex-row-reverse w-screen justify-between">
        <Image src={logo} width={50} alt="" className="rounded-full bg-white" />
        <HamburgerMenu />
      </div>
      <header className="rtl hidden h-20 w-full flex-row-reverse items-center gap-12 bg-rose-500 px-14 font-bodyFont text-white md:flex">
        <Image src={logo} width={50} alt="" className="rounded-full bg-white" />
        <Link href={"/about-us"}>درباره ما</Link>
        <Link href={"/about-us"}>تیم فریان</Link>
        <Link href={"/contact-us"}>تماس با ما</Link>
      </header>
    </div>
  );
};

export default Header;
