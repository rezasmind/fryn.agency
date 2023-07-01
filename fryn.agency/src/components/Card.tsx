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

const Card = (props: any) => {
  return (
    <>
      <div className="w-1/2 lg:w-1/4">
        <Image src={props.img} alt="" className="member-img"/>
        <div className="box w-full border-4 rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl border-[#0072ff] bg-white px-4 py-4">
          <h1 className="text-center font-bodyFont text-3xl font-bold text-[#0072ff]">
            {props.name}
          </h1>
          <h4 className="text-md text-center font-bodyFont">{props.role}</h4>
        </div>
      </div>
    </>
  );
};

export default Card;
