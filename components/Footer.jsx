import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdOutlineAlternateEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="flex flex-wrap justify-center gap-4 lg:gap-[800px] mt-16 mb-4 bg-transparent">
      <span className="text-lg text-gray-200 text-bold">
        © 2022 Ariel Martinez
      </span>
      <ul className="flex gap-6">
        <li className="flex items-center text-gray-200 hover:text-sky-500">
          <a
            href="https://github.com/Arielstereo"
            target="_blank"
            className="flex gap-2"
          >
            Github <BsGithub />
          </a>
        </li>
        <li className="flex items-center text-gray-200 hover:text-sky-500">
          <a
            href="https://www.linkedin.com/in/arielstereo/"
            target="_blank"
            className="flex gap-2"
          >
            Linkedin <BsLinkedin />
          </a>
        </li>
        <li className="flex items-center text-gray-200 hover:text-sky-500">
          <a href="mailto:arielstereo@msn.com" className="flex gap-2">
            Email <MdOutlineAlternateEmail />
          </a>
        </li>
      </ul>
    </footer>
  );
}
