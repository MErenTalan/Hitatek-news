"use client";
import React, { useState } from "react";
import NavbarLink from "./NavbarLink";
import { NavbarLinkType } from "@/helpers/types";
import Image from "next/image";

const navbarLinks: NavbarLinkType[] = [
  {
    title: "NEWS",
    href: "/",
  },
  {
    title: "FEATURES",
    href: "/features",
  },
  {
    title: "TOPICS",
    href: "/topics",
  },
  {
    title: "VIDEO",
    href: "/videos",
  },
  {
    title: "LIVE",
    href: "/live",
    icon: (
      <span className="bg-[#FB2040] h-[6px] w-[6px] rounded-full self-center mr-1" />
    ),
    iconPosition: "left",
  },
];

function Navbar() {
  const [isMobileMenuShown, setIsMobileMenuShown] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuShown(!isMobileMenuShown);
  };

  return (
    <>
      <nav className="bg-solid-blue-70 w-full h-12">
        <div className="flex flex-row justify-end md:items-center h-full px-8">
        <div className="flex flex-row maxLaptop:hidden">
        {navbarLinks.map((link) => {
            return (
              <NavbarLink
                title={link.title}
                href={link.href}
                icon={link.icon}
                iconPosition={link.iconPosition}
              />
            );
          })}
        </div>
          <div className="flex flex-row justify-center items-center">
            <button className="bg-transparent md:bg-solid-blue-60 h-12 px-3 cursor-pointer">
              <Image
                src="/images/search.svg"
                alt="search"
                width={20}
                height={20}
              />
            </button>
            <button onClick={toggleMobileMenu} className="md:hidden bg-transparent">
              <Image
                src="/images/hamburger.svg"
                alt="menu"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      </nav>
      <div className="h-12 absolute xl:left-[60px] xl:top-[72px] left-4 top-14">
        <p className="text-2xl text-solid-blue-70 font-bold tracking-[2px]">
          OPINION
        </p>
      </div>
      {isMobileMenuShown && (
        <div className="fixed top-10 appear left-0 right-0 bottom-0 bg-solid-blue-70 px-8 py-4 z-50 flex flex-col h-48">
          {navbarLinks.map((link) => (
            <NavbarLink
              key={link.title}
              title={link.title}
              href={link.href}
              icon={link.icon}
              iconPosition={link.iconPosition}
            />
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
