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

export default function Home() {
  return (
    <>
      <Head>
        <title>آژانس تبلیغاتی فریان</title>
        <meta name="description" content="FRYN Marketing Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className="w-full bg-rose-500 lg:h-[85vh] md:h-[48vh] h-[33vh]">
        <div className="title relative flex flex-col items-center pt-28 font-bodyFont font-bold text-white lg:pt-44">
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-3xl md:text-6xl lg:text-9xl"
          >
            خـــــلاقـــــیـــــت از مـــــــــا
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className=" text-3xl md:text-6xl lg:text-9xl"
          >
            رشـــــــد
            از&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;شــــــمــــــــا{" "}
          </motion.span>
        </div>
        <Image
          src={character}
          width={2040}
          alt=""
          className="lg:-translate-y-[20vh] md:-translate-y-[10vh] -translate-y-[6vh]"
        />
        
      </div>
      <motion.div className=" flex h-auto flex-col bg-slate-200 px-20 font-bodyFont text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="title mt-44 flex flex-col lg:items-end lg:mt-96 items-center"
        >
          <h1 className=" text-6xl font-bold lg:text-9xl ">خدمات ما</h1>
          <p className="text-md max-w-lg text-center lg:text-right">
            ما یک تیم دیجیتال مارکتینگ در مازندران هستیم و تمرکز ما بر ارائه
            خدمات مبتنی محتوا هست و به دنبال افزایش فروش و شناخت شدن برند شما
            هستیم
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="services mb-56 mt-20 flex flex-col gap-12"
        >
          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 transition-all delay-75 ease-in hover:bg-rose-500 hover:text-white ">
            <h1 className="text-2xl font-bold lg:text-3xl">برندینگ</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 transition-all delay-75 ease-in hover:bg-rose-500 hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">تبلیغات</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 transition-all delay-75 ease-in hover:bg-rose-500 hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">تولید محتوا</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 transition-all delay-75 ease-in hover:bg-rose-500 hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">
              اینستاگرام مارکتینگ
            </h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 transition-all delay-75 ease-in hover:bg-rose-500 hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">طراحی سایت</h1>
            <Image src={circle} width={50} alt="" />
          </div>
        </motion.div>
      </motion.div>


      <div className="third h-auto bg-rose-500 px-16 py-40 font-bodyFont text-white lg:px-52">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 100 }}
          transition={{ ease: "easeIn", duration: 0.8 }}
          className=""
        >
          <Image
            src={speaker}
            alt=""
            className="translate-x-[4vw] translate-y-[4vh] md:translate-y-[3vh] lg:translate-y-[7vh]"
          />
          <h1 className="text-justify text-3xl font-bold leading-normal lg:text-center md:text-justify md:text-5xl md:leading-normal lg:text-8xl">
            محتوا کلید اصلی فروش! شما با محتوای درست میتونید مخاطبان رو
            عــــــاشـــــق خــــــــودتـــــون کـنید!
          </h1>
          <Image
            src={lightning}
            alt=""
            className="-translate-x-[12vw] -translate-y-[8vh] md:translate-x-[6vw] lg:-translate-y-20 lg:translate-x-[10vw]"
          />
        </motion.div>
      </div>

      <div className="fourth flex h-auto flex-col items-center px-10 font-bodyFont text-black lg:px-20 bg-slate-200">
        <div className="title mt-56 flex flex-col lg:items-end items-center">
          <h1 className=" mb-6 text-6xl font-bold lg:text-9xl">پروژه های ما</h1>
          <p className="text-md mb-10 max-w-xl text-center">
            در این قسمت ما بخشی از پروژه های موفق با مشتریانمون رو با شما به
            اشتراک میذاریم تا به راحتی بتونید از کیفیت خدمات ما اطمینان خاطر
            کنید{" "}
          </p>
        </div>
        <Image src={portfolio} alt="" className="mb-56" />
      </div>
      <Footer />
    </>
  );
}
