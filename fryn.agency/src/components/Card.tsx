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
    return(
        <div className="lg:w-1/4 w-1/2">
            <Image src={props.img} alt=""/>
            <div className="box w-full px-4 py-4 bg-white border border-rose-500">
                <h1 className="font-bodyFont font-bold text-3xl text-center text-rose-500">{props.name}</h1>
                <h4 className="font-bodyFont text-md text-center">{props.role}</h4>
            </div>
        </div>
    )
}

export default Card