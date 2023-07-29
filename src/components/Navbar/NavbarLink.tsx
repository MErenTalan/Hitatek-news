import React from "react";

function NavbarLink({
  title,
  href,
  icon,
  iconPosition,
}: {
  title: string;
  href: string;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right" | undefined;
}) {
  return (
    // Navbar dropdown link
    <a
      href={href}
      className={`text-white px-3 py-2 rounded-md text-sm tracking-[1px] hover:tracking-[2px] duration-300 font-bold ${
        iconPosition === "right"
          ? "md:flex md:flex-row-reverse"
          : "md:flex md:flex-row"
      }`}
    >
      {icon ? icon : null}
      {title}
    </a>
  );
}

export default NavbarLink;
