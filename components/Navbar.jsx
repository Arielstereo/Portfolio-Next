import { User } from "@nextui-org/react";
import { useState } from "react";
import Link from "next/link";
import MobileNav from "./MobileNav";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex rounded-xl border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-transparent mt-4 px-4 py-4 h-20 items-center">
      <MobileNav open={open} setOpen={setOpen} />
      <div className="w-3/12 flex items-center">
        <User
          src="/assets/foto_perfil.png"
          size="xl"
          bordered
          color="gradient"
        />
        <div className="flex flex-col items-center">
          <span className="text-gray-100 text-base mt-6 lg:m-auto">
            Ariel Martinez
          </span>
          <span className="text-gray-400 text-xs invisible lg:visible">
            Web Developer
          </span>
        </div>
      </div>
      <div className="w-9/12 flex justify-end items-center px-8">
        <div
          className="flex relative w-8 h-8 flex-col justify-between items-center lg:hidden"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {/* hamburger button */}
          <span
            className={`h-1 w-full bg-gray-50 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "rotate-45 translate-y-3.5" : ""
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-50 rounded-lg transition-all duration-300 ease-in-out ${
              open ? "w-0" : "w-full"
            }`}
          />
          <span
            className={`h-1 w-full bg-gray-50 rounded-lg transform transition duration-300 ease-in-out ${
              open ? "-rotate-45 -translate-y-3.5" : ""
            }`}
          />
        </div>

        <div className="hidden lg:flex gap-8 font-mono text-lg text-gray-300 mr-16">
          <Link href="/">
            <a className="hover:decoration-yellow-400 hover:underline-offset-8 hover:underline hover:text-yellow-400 font-bold">
              HOME
            </a>
          </Link>
          <Link href="/about">
            <a className="hover:decoration-yellow-400 hover:underline-offset-8 hover:underline hover:text-yellow-400 font-bold">
              ABOUT
            </a>
          </Link>
          <Link href="/skills">
            <a className="hover:decoration-yellow-400 hover:underline-offset-8 hover:underline hover:text-yellow-400 font-bold">
              SKILLS
            </a>
          </Link>
          <Link href="/contact">
            <a className="hover:decoration-yellow-400 hover:underline-offset-8 hover:underline hover:text-yellow-400 font-bold">
              CONTACT
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
}
