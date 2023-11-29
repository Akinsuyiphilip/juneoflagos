"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import LiveTimeCounter from "./components/timecode";
import { Poppins } from "next/font/google";
import { IBM_Plex_Mono } from "next/font/google";
import Typewriter from "typewriter-effect";
import HorizontalScroll from "./components/HorizontalScroll";
import git from "@/app/components/img/git.png";
import html from "@/app/components/img/html.png";
import css from "@/app/components/img/css.png";
import js from "@/app/components/img/js.png";
import bootstrap from "@/app/components/img/bootstrap.png";
import tailwind from "@/app/components/img/tailwind.png";
import typescript from "@/app/components/img/typescript.png";
import react from "@/app/components/img/reacticon.png";
import sass from "@/app/components/img/sass.png";
import nextjs from "@/app/components/img/nextjs.png";
import folder from "@/app/components/img/Folderimg.png";
import sportify from "@/app/components/img/Spotify.png";
import github from "@/app/components/img/Github.png";
import youtube from "@/app/components/img/youtube.png";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const ibmplexmono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center  px-24 py-16 space-y-20 overflow-x-hidden scroll-smooth">
      <div
        className={` ${ibmplexmono.className}z-10 max-w-8xl w-full items-center justify-between font-medium cursor-pointer text-sm lg:flex`}
      >
        <p className="fixed left-0 top-0 flex w-full justify-center text-2xl pb-6 pt-8 backdrop-blur-2x dark:from-inherit lg:static lg:w-auto lg:p-4 ">
          {/* Akinsuyi Philip Akinbolade */}

          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Akinsuyi Philip Akinbolade")
                .callFunction(() => {
                  console.log("String typed out!");
                })

                .start();
            }}
          />
        </p>
        <div className="fixed  flex h-48 w-full items-end justify-center  dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <p className="text-2xl">
            <LiveTimeCounter />
          </p>
          {/* live time code */}
        </div>
      </div>
      <div
        className={`${poppins.className} relative flex flex-col -m-10 justify-center items-center place-items-center`}
      >
        <h2 className="text-center text-9xl w-[50rem]">
          I'm a
          <span className="bg-gradient-to-r from-[#2196F3] via-[#46237A] to-[#ffffff27] inline-block text-transparent bg-clip-text">
            {" "}
            software developer{" "}
          </span>
        </h2>
        <p
          className={`${poppins.className} text-center text-3xl mt-10 w-[30rem]`}
        >
          I help companies build ambitious ideas.
        </p>
      </div>
      <div>
        <HorizontalScroll />
      </div>
      {/* second phase */}
      <section>
        <div className="header place-self-center">
          <h2 className="text-6xl font-bold text-center">MY STACK</h2>
        </div>
        <div className="flex justify-center text-center space-x-12 p-6 w-[68.125rem] h-[6rem] mt-12 rounded-3xl border border-[#FDCA40]">
          <a href="#">
            <Image
              src={git}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={html}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={css}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={js}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={sass}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={bootstrap}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={tailwind}
              height={50}
              width={50}
              alt="git"
              className="pt-2 hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={typescript}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={react}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
          <a href="#">
            <Image
              src={nextjs}
              height={50}
              width={50}
              alt="git"
              className=" hover:-mt-2"
            />
          </a>
        </div>
        <div className="flex flex-col mt-16">
          {/* firstLine */}
          <div className="m-10 flex flex-row space-x-12">
            <a href="#" className="flex justify-center place-self-center text-center space-x-2 py-6 w-[28.6875rem] h-[7rem] mt-12 rounded-3xl border-2 border-dashed border-[#FDCA40]">
              <Image src={folder} height={50} width={50} alt="git" />
              <p className="text-6xl ">Resume</p>
            </a>
            <a href="#" className="flex justify-center place-self-center text-center space-x-2 py-6 w-[28.6875rem] h-[7rem] mt-12 rounded-3xl border-2 border-dashed border-[#FDCA40]">
              <Image src={sportify} height={40} width={60} alt="git" />
              <p className="text-6xl ">Playlist</p>
            </a>
          </div>
          {/* secodline */}
          <div className="m-10 flex flex-row space-x-12">
            <a href="https://github.com/Akinsuyiphilip" className="flex justify-center place-self-center text-center space-x-2 py-6 w-[28.6875rem] h-[7rem] mt-12 rounded-3xl border-2 border-dashed border-[#FDCA40]">
              <Image src={github} height={30} width={60} alt="git" />
              <p className="text-6xl "> Github</p>
            </a>
            <a href="https://www.youtube.com/channel/UC6N085Nmf0ulGr9pHwe5TVw" className="flex justify-center place-self-center text-center space-x-2 py-6 w-[28.6875rem] h-[7rem] mt-12 rounded-3xl border-2 border-dashed border-[#FDCA40]">
              <Image src={youtube} height={40} width={60} alt="git" />
              <p className="text-6xl ">Youtube</p>
            </a>
          </div>
        </div>

        <div className="footer flex justify-center text-center mt-16">
          <p>YOU CAN BE ANYTHING YOU WANT TO BE </p>
        </div>
      </section>
    </main>
  );
}
