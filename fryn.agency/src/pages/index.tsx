import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import Image from 'next/image'
import character from '../../public/Photo.svg'
import circle from '../../public/pattern-circle.svg'
import speaker from '../../public/speaker-1.svg'
import lightning from '../../public/lightning.svg'
import portfolio from '../../public/Portfolio.svg'
import Footer from "~/components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>آژانس تبلیغاتی فریان</title>
        <meta name="description" content="FRYN Marketing Agency" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <div className=" bg-rose-500 w-full lg:h-[75vh]  h-[30vh]">
        <div className="title text-white font-bodyFont font-bold flex flex-col items-center lg:pt-44 pt-28">
          <span className=" lg:text-9xl text-3xl">
          خـــــلاقـــــیـــــت از مـــــــــا
          </span>
          <span className=" lg:text-9xl text-3xl">
          رشـــــــد از&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;شــــــمــــــــا          </span>
          <Image src={character} width={2040} alt="" className=" lg:-translate-y-44 -translate-y-[7vh]" />
        </div>
      </div>
      <div className=" bg-slate-200 h-auto flex flex-col font-bodyFont text-black px-20">
        <div className="title lg:mt-72 mt-44 flex flex-col items-end">
          <h1 className=" lg:text-9xl text-6xl font-bold">خدمات ما</h1>
          <p className="text-md lg:text-right text-center max-w-lg">
          ما یک تیم دیجیتال مارکتینگ در مازندران هستیم و تمرکز ما بر ارائه خدمات مبتنی محتوا هست و به دنبال افزایش فروش و شناخت شدن برند شما هستیم
          </p>
        </div>
        <div className="services mt-20 flex flex-col gap-12 mb-56">
          <div className="service h-24 bg-white rounded-full flex flex-row-reverse items-center p-10 justify-between hover:bg-rose-500 hover:text-white transition-all delay-75 cursor-pointer ease-in ">
            <h1 className="font-bold lg:text-3xl text-2xl">برندینگ</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service h-24 bg-white rounded-full flex flex-row-reverse items-center p-10 justify-between hover:bg-rose-500 hover:text-white transition-all delay-75 cursor-pointer ease-in">
            <h1 className="font-bold lg:text-3xl text-2xl">تبلیغات</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service h-24 bg-white rounded-full flex flex-row-reverse items-center p-10 justify-between hover:bg-rose-500 hover:text-white transition-all delay-75 cursor-pointer ease-in">
            <h1 className="font-bold lg:text-3xl text-2xl">تولید محتوا</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service h-24 bg-white rounded-full flex flex-row-reverse items-center p-10 justify-between hover:bg-rose-500 hover:text-white transition-all delay-75 cursor-pointer ease-in">
            <h1 className="font-bold lg:text-3xl text-2xl">اینستاگرام مارکتینگ</h1>
            <Image src={circle} width={50} alt="" />
          </div>

          <div className="service h-24 bg-white rounded-full flex flex-row-reverse items-center p-10 justify-between hover:bg-rose-500 hover:text-white transition-all delay-75 cursor-pointer ease-in">
            <h1 className="font-bold lg:text-3xl text-2xl">طراحی سایت</h1>
            <Image src={circle} width={50} alt="" />
          </div>
        </div>
      </div>

      <div className="third bg-rose-500 h-auto font-bodyFont text-white py-40 lg:px-52 px-16">
        <Image src={speaker} alt="" className="lg:translate-y-[7vh] translate-y-[4vh] translate-x-[4vw]"/>
          <h1 className="lg:text-8xl font-bold lg:text-center leading-normal text-3xl text-justify">
          محتوا کلید اصلی فروش! شما با محتوای درست میتونید مخاطبان رو عــــــاشـــــق خــــــــودتـــــون کـنید!
          </h1>
          <Image src={lightning} alt="" className="lg:-translate-y-20 -translate-y-[8vh] lg:translate-x-[10vw] -translate-x-[12vw]"/>
      </div>

      <div className="fourth h-auto flex flex-col font-bodyFont text-black lg:px-20 px-10 items-center">
      <div className="title mt-56 flex flex-col items-end">
          <h1 className=" lg:text-9xl text-6xl font-bold mb-6">پروژه های ما</h1>
          <p className="text-md text-center max-w-xl mb-10">در این قسمت ما بخشی از پروژه های موفق با مشتریانمون رو با شما به اشتراک میذاریم تا به راحتی بتونید از کیفیت خدمات ما اطمینان خاطر کنید          </p>
      </div>
      <Image src={portfolio} alt="" className="mb-56" />
      </div>
      <Footer />
    </>
  );
}
