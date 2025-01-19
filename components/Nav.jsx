"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "commercials",
    path: "/video",
  },
  {
    name: "photography",
    path: "/photography",
  },
  {
    name: "costumes",
    path: "/costumes",
  },
  {
    name: "illustrations",
    path: "/illustrations",
  },

  {
    name: "clients",
    path: "/clients",
  },
  {
    name: "personal",
    path: "/bio",
  },
];

const Nav = () => {
  const pathname = usePathname();
  return (
    <nav className="flex gap-8">
      {links.map((link, index) => {
        return (
          <Link
            href={link.path}
            key={index}
            className={`${
              link.path === pathname && "text-accent border-b-2 border-accent"
            } hover:text-accent transition-all`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
  //   return <nav>desktop nav</nav>;
};

export default Nav;
