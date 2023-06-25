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
import reza from 'public/reza.png'
import mmd from 'public/mmd.png'
import nazanin from 'public/nazanin.png'
import ashkan from 'public/ashkan.png'
import aryan from 'public/aryan.png'

const Team = () => {
  return (
    <>
      <Header />
      <div className="team flex  h-screen flex-col items-center justify-center font-bodyFont text-white">
        <h1 className="mb-8 lg:text-7xl text-5xl font-bold">با تیم ما آشنا بشید!</h1>
        <p className=" lg:max-w-xl max-w-sm text-center text-xl ">
          تیم فریان با تکیه بر اصول اولیه آژانس یعنی خلاقیت و محتوای با ارزش شکل گرفته تمامی اعضای تیم هدف مشترکی دارند که آن هم رشد و بهبود کسب و کار مشتریان ما است.
        </p>
      </div>
      <div className=" h-auto mb-44 member flex lg:gap-52 flex-col lg:flex-row px-10 flex-wrap justify-center items-center">
        <Card img={reza} name="رضا آقاجانی" role="بنیان گذار فریان"/>
        <Card img={mmd} name="امیر محمد سپاهی" role="مدیر خلاقیت و متخصص بازاریابی محتوایی" />
        <Card img={nazanin} name="نازنین حسینی" role="مدیر خلاقیت و تولید کننده محتوا"/>
        <Card img={ashkan} name="اشکان محمد نژاد" role="طراحی سایت و موشن گرافیست"/>
        <Card img={aryan} name="آرین زارع" role="طراح سایت اختصاصی"/>
      </div>

      <Footer />
    </>
  );
};

export default Team;