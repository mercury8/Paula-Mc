"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { CiMenuFries } from "react-icons/ci";

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

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false); // Manage the state of the sheet
  const pathname = usePathname();

  const handleClose = () => setIsOpen(false); // Function to close the sheet

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger
        onClick={() => setIsOpen(true)}
        className="flex justify-center items-center"
      >
        <CiMenuFries className="text-[32px] text-accent" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={handleClose}>
            <h1 className="text-4xl font-semibold">
              Paula<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col justify-center items-center gap-8">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={handleClose} // Close the sheet when a link is clicked
                className={`${
                  link.path === pathname &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
