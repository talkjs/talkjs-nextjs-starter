"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import XIcon from "@/components/Icons/XIcon";

const navItems = [
    { label: "Chatbox", href: "/chatbox"},
    { label: "Inbox", href: "/inbox"},
    { label: "Popup", href: "/popup"},
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <>
         {/* Main navbar  */}
        <nav className="px-6 py-3 flex gap-6 border-b border-gray-200 justify-between">

            {/* Logo */}
            <a href="/">
                <img className="w-10 h-11 shrink-0" src="/talkjs.svg" alt="TalkJS logo"/>
            </a>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={"hover:text-blue-500 transition-colors " + (isActive ? "text-blue-500" : "text-gray-700")
                        }
                    >
                        {item.label}
                    </Link>
                );
             })}
             <a 
                href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftalkjs%2Ftalkjs-vercel" 
                rel="noopener" 
                target="_blank">
                <img alt="Deploy with Vercel" className="h-8 w-auto" src="/button.svg"/>
             </a>
            </div>

             {/* Hamburger toggle */}
             <button
               onClick={toggleMenu}
               className="md:hidden text-gray-700"
               aria-label="Toggle menu"
             >
                {isOpen? (
                    <XIcon className="w-6 h-6 text-gray-700" />
                ) : (
                    <img src="/hamburger.svg" alt="Open menu" className="w-6 h-6" />
                )}
             </button>
          </nav>

             {/* Mobile nav dropdown */}
             {isOpen && (
  <div className="absolute top-16 right-4 bg-white shadow-md rounded-md p-4 flex flex-col items-start gap-4 z-50">
    {navItems.map((item) => {
      const isActive = pathname === item.href;
      return (
        <Link
          key={item.href}
          href={item.href}
          className={
            "font-medium hover:text-blue-500 transition-colors " +
            (isActive ? "text-blue-500" : "text-gray-700")
          }
        >
          {item.label}
        </Link>
      );
    })}
    <a
      href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftalkjs%2Ftalkjs-vercel"
      rel="noopener"
      target="_blank"
    >
      <img
        alt="Deploy with Vercel"
        className="h-10 w-auto"
        src="/button.svg"
      />
    </a>
  </div>
)}

    </>
  );
}