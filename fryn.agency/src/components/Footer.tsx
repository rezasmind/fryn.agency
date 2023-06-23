import Image from "next/image";
import speaker from "../../public/speaker-2.svg";
import bar from "../../public/Group4.svg";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";

const Footer = () => {
  return (
    <>
      <Image src={bar} width={2040} alt="" className=" bg-rose-500" />
      <div className="h-auto bg-rose-500  pt-40 font-bodyFont text-white">
        <div className="title flex flex-col items-center px-10 lg:items-end lg:px-20">
          <h1 className="text-center text-6xl font-bold lg:text-right lg:text-9xl">
            همین الان شروع کنید.
          </h1>
          <Link
            href={"/contact-us"}
            className="transition-all delay-75 ease-in hover:bg-rose-500  hover:text-white"
          >
            <p className="mb-10 mt-10 inline-block rounded-full bg-white px-10 py-4 text-xl font-bold text-rose-500 lg:text-3xl">
              تماس با ما
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-end px-7 lg:flex-row lg:items-end lg:p-0">
          <Image
            src={speaker}
            alt=""
            className=" hidden w-[40vw] -translate-x-40 lg:block lg:w-[60vw]"
          />
          <div className="call flex flex-col items-center justify-center gap-5 pb-4 lg:flex-row-reverse lg:px-20">
            <Link href={"https://instagram.com/fryn.agency"} className="">
              <BsInstagram size={24} />
            </Link>
            <div className="flex flex-row-reverse ">
              <HiMiniDevicePhoneMobile size={24} />
              <p className="text-xl">09116801800</p>
            </div>
            <div className="flex flex-row-reverse">
              <HiOutlineLocationMarker size={24} />
              <p className="text-xl">مازندران, بابل, گلستان ۱۷</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
