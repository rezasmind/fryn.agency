import Image from "next/image";
import logo from "../../public/New-logo-trans-1.png";
import HamburgerMenu from "./Hamburger";
import Head from "next/head";
import fav from "public/New-logo-trans-1.png";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@nextui-org/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "صفحه اصلی",
    " تعرفه خدمات",
    "تیم فریان",
    "درباره ما",
    "تماس با ما",
  ];

  const links = [
    "/",
    "/prices",
    "/team",
    "/about-us",
    "/"
  ]
  return (
    <>
      <Head>
        <link rel="shortcut icon" href={fav.src} type="image/x-icon" />
        <meta name="description" content="آژانس تبلیغاتی فریان " key="desc" />
        <meta property="og:title" content="آژانس تبلیغاتی فریان" />
      </Head>
      <>
        <Navbar
          className="bg-[#0072ff] font-bodyFont text-white"
          onMenuOpenChange={setIsMenuOpen}
        >
          <NavbarContent>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              className="sm:hidden"
            />
            <NavbarBrand className="flex gap-4 bg-transparent">
              <Image
                src={logo}
                width={75}
                alt=""
                className="rounded-full pr-8"
              />
            </NavbarBrand>
          </NavbarContent>

          <NavbarContent
            className="hidden text-white sm:flex sm:flex-row-reverse"
            justify="center"
          >
            <NavbarItem>
              <Link href={"/"} className="text-white">
                صفحه اصلی
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href={"/prices"} className="text-white">
                {" "}
                تعرفه خدمات
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href={"/team"} className="text-white">
                تیم فریان
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href={"/about-us"} className="text-white">
                درباره ما
              </Link>
            </NavbarItem>

            <NavbarItem>
              <Link href={"https://t.me/Frynads"} className="text-white">
                تماس با ما
              </Link>
            </NavbarItem>
          </NavbarContent>
          <NavbarMenu className="bg-transparent">
            {menuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  color={
                    index === 2
                      ? "primary"
                      : index === menuItems.length - 1
                      ? "danger"
                      : "foreground"
                  }
                  className="w-full font-bodyFont text-white "
                  href={links[index]}
                  size="lg"
                >
                  {item}
                </Link>
              </NavbarMenuItem>
            ))}
          </NavbarMenu>
        </Navbar>
      </>
    </>
  );
};

export default Header;
