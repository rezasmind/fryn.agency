import Head from "next/head";
import Link from "next/link";
import Header from "~/components/Header";
import character from "../../public/Photo.svg";
import circle from "../../public/pattern-circle.svg";
import speaker from "../../public/speaker-1.svg";
import lightning from "../../public/lightning.svg";
import portfolio from "../../public/portfolio1.jpg";
import portfolio2 from "../../public/portfolio2.jpg";
import portfolio3 from "../../public/portfolio3.jpg";
import portfolio4 from "../../public/portfolio4.jpg";
import portfolio5 from "../../public/portfolio5.jpg";
import portfolio6 from "../../public/portfolio6.jpg";
import Footer from "~/components/Footer";
import { motion } from "framer-motion";
import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>آژانس تبلیغاتی فریان </title>
        <meta name="description" content="FRYN Marketing Agency" />
        <link rel="icon" href="/favicon.png" />
        <meta name="enamad" content="644151" />
      </Head>
      <Header />
      <div className="h-[33vh] w-full bg-[#0072ff] sm:h-[33vh] md:h-[48vh] lg:h-[85vh] xl:h-[90vh]">
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
          src={character.src}
          width={2040}
          alt=""
          className="-translate-y-[8vh] md:-translate-y-[10vh] lg:-translate-y-[20vh] xl:-translate-y-[24vh]"
        />
      </div>
      <motion.div className=" flex h-auto flex-col bg-slate-200 px-20 font-bodyFont text-black">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 1.5 }}
          className="title mt-44 flex flex-col items-center lg:mt-96 lg:items-end"
        >
          <h1 className=" text-4xl font-bold md:text-6xl  lg:text-9xl">
            خدمات ما
          </h1>
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
          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 delay-75 ease-in transition-all hover:bg-[#0072ff] hover:text-white ">
            <h1 className="text-2xl font-bold lg:text-3xl">برندینگ</h1>
            <Image src={circle.src} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 delay-75 ease-in transition-all hover:bg-[#0072ff] hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">تبلیغات</h1>
            <Image src={circle.src} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 delay-75 ease-in transition-all hover:bg-[#0072ff] hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">تولید محتوا</h1>
            <Image src={circle.src} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 delay-75 ease-in transition-all hover:bg-[#0072ff] hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">
              اینستاگرام مارکتینگ
            </h1>
            <Image src={circle.src} width={50} alt="" />
          </div>

          <div className="service flex h-24 cursor-pointer flex-row-reverse items-center justify-between rounded-full bg-white p-10 delay-75 ease-in transition-all hover:bg-[#0072ff] hover:text-white">
            <h1 className="text-2xl font-bold lg:text-3xl">طراحی سایت</h1>
            <Image src={circle.src} width={50} alt="" />
          </div>
        </motion.div>
      </motion.div>

      <div className="third h-auto bg-[#0072ff] px-16 py-40 font-bodyFont text-white lg:px-52">
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
          <h1 className="text-justify text-3xl font-bold leading-normal md:text-justify md:text-5xl md:leading-normal lg:text-center lg:text-8xl">
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

      <div className="fourth flex h-auto w-full flex-col items-center justify-center bg-slate-200 px-10 pb-56 font-bodyFont text-black lg:px-20">
        <div className="title mt-56 flex w-full flex-col items-center justify-center lg:items-end">
          <div className="flex w-full flex-col items-center justify-center">
            <h1 className=" mb-6 w-full text-center text-4xl font-bold md:text-6xl lg:text-9xl">
              پروژه های ما
            </h1>
            <p className="text-md mb-10 max-w-xl text-center">
              در این قسمت ما بخشی از پروژه های موفق با مشتریانمون رو با شما به
              اشتراک میذاریم تا به راحتی بتونید از کیفیت خدمات ما اطمینان خاطر
              کنید{" "}
            </p>
          </div>
          <div className="flex w-full flex-row-reverse flex-wrap items-center justify-center gap-5 text-right">
            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  ریلز
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  برگر کمپانی
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 transition ease-in-out duration-500"
                src={portfolio.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار ریلز
                    </p>
                    <p className="text-tiny text-white/60">ویو ۱۴ هزار</p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/Cz1kDPIN9CF/"}
                    target="_blank"
                  >
                    تماشای ریل
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  ریلز
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  برگر کمپانی
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 transition ease-in-out duration-500"
                src={portfolio2.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار ریلز
                    </p>
                    <p className="text-tiny text-white/60"></p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/C0W7fhXNRyD/"}
                    target="_blank"
                  >
                    تماشای ریل
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  ریلز
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  برگر کمپانی
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 transition ease-in-out duration-500"
                src={portfolio3.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار ریلز
                    </p>

                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/Cz6sMS4Ntmg/"}
                    target="_blank"
                  >
                    تماشای ریل
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  عکاسی
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  برگر کمپانی
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 transition ease-in-out duration-500"
                src={portfolio4.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار عکاسی
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/CzhAUFZN9Xg/"}
                    target="_blank"
                  >
                    تماشای پست
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  عکاسی
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  برگر کمپانی
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 transition ease-in-out duration-500"
                src={portfolio5.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار عکاسی
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/Cz9SYxFN46U/"}
                    target="_blank"
                  >
                    تماشای پست
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            <Card
              isFooterBlurred
              className="col-span-12 h-[300px] w-full text-right sm:col-span-7 sm:h-[700px] sm:w-1/3"
            >
              <CardHeader className="absolute top-1 z-10 flex-col items-end">
                <p className="text-tiny font-bold uppercase text-white/60">
                  ریلز
                </p>
                <h4 className="text-xl font-medium text-white/90">
                  کافه و رستوران دنیز
                </h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Relaxing app background"
                className="z-0 h-full w-full object-cover brightness-75 scale-100 hover:transition-all hover:scale-110 ease-in-out duration-500"
                src={portfolio6.src}
              />
              <CardFooter className="absolute bottom-0 z-10 border-t-1 border-default-600 bg-black/40 dark:border-default-100">
                <div className="mr-5 flex w-1/2 flex-grow items-center gap-2">
                  <Image
                    alt="Breathing app icon"
                    className="h-11 w-10 rounded-full bg-black"
                    src="/images/breathing-app-icon.jpeg"
                  />
                  <div className="flex w-full flex-col gap-2">
                    <p className="w-full text-tiny text-white/60">
                      نمونه کار ریلز
                    </p>
                  </div>
                </div>
                <Button radius="full" size="sm">
                  <Link
                    href={"https://www.instagram.com/p/C0jphpGtXU8/"}
                    target="_blank"
                  >
                    تماشای ریل
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
