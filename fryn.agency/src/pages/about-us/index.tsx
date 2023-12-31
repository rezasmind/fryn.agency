import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import Image from "next/image";
import character from "../../public/Photo.svg";
import circle from "../../public/pattern-circle.svg";
import speaker from "../../public/speaker-1.svg";
import lightning from "../../public/lightning.svg";
import portfolio from "../../public/Portfolio.svg";
import Footer from "~/components/Footer";
import { motion } from "framer-motion";
import fav from "public/New-logo-trans-1.png";

const About = () => {
  return (
    <>
      <Head>
        <title>درباره ما | آژانس تبلیغاتی فریان</title>
        <meta name="description" content="FRYN Marketing Agency" />
        <link rel="shortcut icon" href={fav.src} type="image/x-icon" />
      </Head>
      <Header />
      <div className=" flex h-screen flex-col items-center justify-center font-bodyFont text-white">
        <h1 className="mb-8 text-5xl font-bold lg:text-7xl">استودیو فریان</h1>
        <p className=" max-w-sm text-center text-xl lg:max-w-xl ">
          آژانس تبلیغاتی فریان محصولی از استودیو فریان است که از سال ۱۳۹۹ فعالیت
          خود رو در زمینه سوشال مدیا مارکتینگ در استان مازندران شروع کرده و تا
          به الان با بیش از ۲۰ کسب و کار همکاری داشته و با استفاده از محتوای
          تاثیر گذار تونسته کمک به افزایش رشد این کسب و کار ها شود.
        </p>
      </div>

      <Footer />
    </>
  );
};

export default About;
