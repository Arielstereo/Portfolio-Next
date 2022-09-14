import { ImHome } from "react-icons/im";
import { GoInfo } from "react-icons/go";
import { GiSkills } from "react-icons/gi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import Link from "next/link";

export default function MobileNav({ open, setOpen }) {
  return (
    <div
      className={`lg:hidden absolute z-10 top-24 -left-2  bg-transparent transform ${
        open
          ? "translate-x-8 sm:translate-x-8 md:translate-x-28"
          : "-translate-x-full"
      } transition-transform duration-300 ease-in-out filter drop-shadow-md `}
    >
      <div className="flex flex-col gap-8 uppercase rounded-xl border-2 border-sky-500 shadow-lg shadow-indigo-400 bg-gray-900 mt-2 w-full p-8">
        <Link href="/">
          <a
            className="flex gap-2 text-lg text-gray-50 font-mono font-semibold mx-8 hover:decoration-indigo-500 hover:underline-offset-8 hover:underline hover:text-indigo-500"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <ImHome /> Home
          </a>
        </Link>
        <Link href="/about">
          <a
            className="flex gap-2 text-lg text-gray-50 font-mono font-semibold mx-8 hover:decoration-indigo-500 hover:underline-offset-8 hover:underline hover:text-indigo-500"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <GoInfo /> About
          </a>
        </Link>
        <Link href="/skills">
          <a
            className="flex gap-2 text-lg text-gray-50 font-mono font-semibold mx-8 hover:decoration-indigo-500 hover:underline-offset-8 hover:underline hover:text-indigo-500"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <GiSkills /> Skills
          </a>
        </Link>
        <Link href="/contact">
          <a
            className="flex gap-2 text-lg text-gray-50 font-mono font-semibold mx-8 hover:decoration-indigo-500 hover:underline-offset-8 hover:underline hover:text-indigo-500"
            onClick={() =>
              setTimeout(() => {
                setOpen(!open);
              }, 100)
            }
          >
            <MdOutlineAlternateEmail /> Contact
          </a>
        </Link>
      </div>
    </div>
  );
}
