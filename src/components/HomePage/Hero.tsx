"use client";
import Image from "next/image";
import React from "react";

function Hero({
  title,
  author,
  image,
}: {
  title: string;
  author: string;
  image: string;
}) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
      }}
      className={`w-full h-96 lg:mt-24 maxLaptop:!bg-none bg-cover`}
    >
      <div className="flex flex-col items-start justify-center h-full mt-16 lg:px-24">
        <img
          src={image}
          alt="hero"
          className=" object-cover h-40 w-full lg:hidden"
        />
        <div className="bg-black lg:py-8 lg:px-16 mb-6 self-center lg:self-start">
          <h1 className="text-xl lg:text-2xl font-bold text-white maxLaptop:p-2">{title}</h1>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="w-8 h-8 rounded-full bg-white mr-4">
                <Image
                  src={"/images/avatar.jpg"}
                  alt="avatar"
                  width={32}
                  height={32}
                />
              </div>
              <p className="text-white">{author}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
