import Link from "next/link";
import { slide as Menu } from "react-burger-menu";
const HamburgerMenu = () => (
  <div className="relative p-2 font-bodyFont">
    <Menu
      customBurgerIcon={<HamburgerIcon />}
      width={"50%"}
      noOverlay
      className="left-0"
    >
      <Links />
    </Menu>
  </div>
);

const HamburgerIcon = () => (
  <div className="p-1/2">
    <svg
      className="h-8 w-8 text-white"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </div>
);

export const Links = () => (
  <>
    <div className="text-blue-500 w-full flex flex-col gap-5">
      <Link href={"/"} className="w-full">صفحه اصلی</Link>
      <Link href={"/prices"}> تعرفه خدمات</Link>
      <Link href={"/team"}>تیم فریان</Link>
      <Link href={"/about-us"}>درباره ما</Link>
      <Link href={"https://t.me/Frynads"}>تماس با ما</Link>
    </div>
  </>
);

export default HamburgerMenu;
