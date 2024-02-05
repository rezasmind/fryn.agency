import Image from "next/image";
import speaker from "../../public/speaker-2.svg";
import bar from "../../public/Group4.svg";
import Link from "next/link";
import { BsInstagram } from "react-icons/bs";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineLocationMarker } from "react-icons/hi";
import enamad from "public/30.png"

const Footer = () => {
  return (
    <>
      <Image src={bar} width={2040} alt="" className=" bg-[#0072ff]" />
      <div className="h-auto bg-[#0072ff]  pt-40 font-bodyFont text-white">
        <div className="title flex flex-col items-center px-10 lg:items-end lg:px-20">
          <h1 className="text-center text-2xl font-bold lg:text-right lg:text-5xl">
            همین الان شروع کنید.
          </h1>
          <Link href={"/contact-us"} className=" ">
            <p className="mb-10 mt-10 inline-block rounded-full bg-white px-10 py-4 text-xl  font-bold text-[#0072ff] delay-75 ease-in transition-all hover:border hover:border-white  hover:bg-[#0072ff] hover:text-white lg:text-3xl">
              تماس با ما
            </p>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-end px-7 lg:flex-row lg:items-end lg:p-0">
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
              <p className="text-xl"> مازندران، ساری، خیابان شیخ طبرسی</p>
            </div>
            <Link
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=459516&Code=SA5Ee0i345SF5YwVlzVRROdyd4y58b6Y"
            >
              <Image src={enamad} alt="" width={75} height={75} />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
