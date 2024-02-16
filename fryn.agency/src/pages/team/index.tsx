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
import Card from "~/components/Card";
import reza from "public/reza.png";
import mmd from "public/mmd.png";
import nazanin from "public/nazanin.png";
import ashkan from "public/ashkan.png";
import aryan from "public/aryan.png";
import bg from "public/bg.png";
import ali from "public/Ali2.png";
import behnam from "public/Behnam.png";
import mehdi from "public/Mehdi.png";

const Team = () => {
  return (
    <>
      <Head>
        <title>تیم | آژانس تبلیغاتی فریان</title>
        <meta name="description" content="Team | FRYN Marketing Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="team flex  h-screen flex-col items-center justify-center font-bodyFont text-white">
        <Image src={bg} alt="" fill className="absolute -z-10" />
        <h1 className="mb-8 text-5xl font-bold lg:text-7xl">
          با تیم ما آشنا بشید!
        </h1>
        <p className=" max-w-sm text-center text-xl lg:max-w-xl ">
          تیم فریان با تکیه بر اصول اولیه آژانس یعنی خلاقیت و محتوای با ارزش شکل
          گرفته تمامی اعضای تیم هدف مشترکی دارند که آن هم رشد و بهبود کسب و کار
          مشتریان ما است.
        </p>
      </div>
      <div className=" member flex h-auto flex-col flex-wrap items-center justify-center bg-white px-10 py-44 lg:flex-row lg:gap-52">
        <Card img={reza} name="رضا آقاجانی" role="بنیان گذار فریان" />
        <Card
          img={mmd}
          name="امیر محمد سپاهی"
          role="مدیر خلاقیت و متخصص بازاریابی محتوایی"
        />
        <Card
          img={ali}
          name="علی جنگلبان"
          role="مسئول بازاریابی و مدیر منابع انسانی"
        />
        <Card img={behnam} name="بهنام قوی پنجه" role="مدیر مارکتینگ" />
        <Card img={mehdi} name=" مهدی خدادی" role="تصویر بردار" />
        <Card
          img={ashkan}
          name="اشکان محمد نژاد"
          role=" تدوینگر و موشن گرافیست"
        />
      </div>

      <Footer />
    </>
  );
};

export default Team;
