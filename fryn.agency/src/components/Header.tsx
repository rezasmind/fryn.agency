import Image from "next/image";
import logo from "../../public/New-logo-trans-1.png";
import Link from "next/link";
import HamburgerMenu from "./Hamburger";
import Head from "next/head";
import fav from "public/New-logo-trans-1.png";

const Header = () => {
  return (
    <>
      <Head>
      <link rel="shortcut icon" href={fav.src} type="image/x-icon" />
      <meta name="description" content="آژانس تبلیغاتی فریان " key="desc" />
        <meta property="og:title" content="آژانس تبلیغاتی فریان" />
      </Head>
      <div className=" flex flex-row items-center justify-center ">
        <div className="flex w-screen flex-row-reverse justify-between md:hidden">
          <Link href={"/"} className="">
            <Image src={logo} width={75} alt="" className="rounded-full pr-8" />
          </Link>

          <HamburgerMenu />
        </div>
        <header className="rtl hidden h-20 w-screen flex-row-reverse items-center gap-12 bg-[#0072ff]  font-bodyFont text-lg text-white md:flex">
          <Link href={"/"}>
            <Image
              src={logo}
              width={100}
              alt=""
              className="rounded-full pr-8"
            />
          </Link>
          <div className="absolute flex w-screen  flex-row-reverse items-center justify-center gap-12">
            <Link href={"/"}>صفحه اصلی</Link>
            <Link href={"/prices"}> تعرفه خدمات</Link>
            <Link href={"/team"}>تیم فریان</Link>
            <Link href={"/about-us"}>درباره ما</Link>
            <Link href={"https://t.me/Frynads"}>تماس با ما</Link>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
