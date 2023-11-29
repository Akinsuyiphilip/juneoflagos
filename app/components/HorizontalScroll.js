import Image from "next/image";
import React from "react";
import Rectangle from "@/app/components/img/Rectangle.png";

const HorizontalScroll = () => {
  return (
    <div className="max-w-full flex space-x-12 cursor-pointer">
      <a
        href="https://cantoland.vercel.app/"
        className="flex break-words  min-w-[25rem] h-[9.625rem] bg-[#FD7748] rounded-xl p-8"
      >
        <p className="text-3xl w-[50%] p-2">CantoLand page</p>
        <Image src={Rectangle} height={100} width={150} alt="imah" />
      </a>
      <div className="flex min-w-[25rem] h-[9.625rem] bg-[#2196F3] rounded-xl p-8">
        <p className="text-3xl w-[50%]">Game Website</p>
        <Image src={Rectangle} height={100} width={150} alt="imah" />
      </div>
      <div className="flex min-w-[25rem] h-[9.625rem] bg-[#5E3B7F] rounded-xl p-8">
        <p className="text-3xl w-[50%]">Game Website</p>
        <Image src={Rectangle} height={100} width={150} alt="imah"/>
      </div>
      {/* <div className="flex min-w-[25rem] h-[7.625rem] bg-[#131725] rounded-xl p-8">
        <p className="text-3xl w-[50%]">Game Website</p>
        <Image src={Rectangle} height={100} width={230} alt="imah" />
      </div> */}
    </div>
  );
};

export default HorizontalScroll;
