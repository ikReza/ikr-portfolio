"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GithubIcon, LinkedinIcon, PokeBall, TwitterIcon } from "./Icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Navlink = ({ href, title, className, line }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[2px] ${line} absolute left-0 -bottom-1 
                    group-hover:w-full transition-[width] duration-300
                    ${pathname === href ? "w-full" : "w-0"}`}
      />
    </Link>
  );
};

const MobileLink = ({ href, title, className, line, toggle }) => {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = () => {
    toggle();
    router.push(href);
  };

  return (
    <button
      href={href}
      className={`${className} relative group my-2`}
      onClick={handleClick}
    >
      {title}
      <span
        className={`h-[2px] bg-white absolute left-0 -bottom-1 
                    group-hover:w-full transition-[width] duration-300
                    ${pathname === href ? "w-full" : "w-0"}`}
      />
    </button>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="w-full px-32 max-sm:px-12 py-8 font-medium flex items-center justify-between relative">
      <button
        className="flex lg:hidden flex-col items-center justify-center"
        onClick={handleMenu}
      >
        <span
          className={`h-0.5 w-6 bg-black rounded-sm block  ${
            isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
          } transition-all duration-300`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-black rounded-sm block my-0.5 ${
            isOpen ? "opacity-0" : "opacity-100"
          } transition-all duration-300`}
        ></span>
        <span
          className={`h-0.5 w-6 bg-black rounded-sm block  ${
            isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
          } transition-all duration-300`}
        ></span>
      </button>

      <div className="w-full hidden lg:flex items-center justify-between ">
        <nav>
          <Navlink
            href="/"
            title="Home"
            className="mr-4"
            line="bg-purple-700"
          />
          <Navlink
            href="/about"
            title="About"
            className="mx-4"
            line="bg-green-600"
          />
          <Navlink
            href="/projects"
            title="Projects"
            className="ml-4"
            line="bg-black"
          />
        </nav>

        <nav className="flex items-center justify-center flex-wrap">
          <Link
            href="https://twitter.com/ik_reza00"
            target="_blank"
            className="w-6 mr-3"
          >
            <TwitterIcon />
          </Link>
          <Link
            href="https://github.com/ikReza"
            target="_blank"
            className="w-6 mx-3"
          >
            <GithubIcon />
          </Link>
          <Link
            href="https://www.linkedin.com/in/ibrahim-kaiser/"
            target="_blank"
            className="w-6 mx-3"
          >
            <LinkedinIcon />
          </Link>
          <Link
            href="/"
            target="_blank"
            className="w-6 ml-3 animate-bounce hover:animate-none"
          >
            <PokeBall className="shadow-lg shadow-black rounded-full" />
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0, x: "-50%", y: "-50%" }}
          animate={{ opacity: 1, scale: 1 }}
          className="min-w-[70vw] flex flex-col items-center justify-between fixed top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2 z-30 py-32 bg-black/90 rounded-lg backdrop-blur-md text-white"
        >
          <nav className="flex flex-col items-center justify-center">
            <MobileLink href="/" title="Home" toggle={handleMenu} />
            <MobileLink href="/about" title="About" toggle={handleMenu} />
            <MobileLink href="/projects" title="Projects" toggle={handleMenu} />
          </nav>
          <nav className="flex items-center justify-center flex-wrap mt-4">
            <Link
              href="https://twitter.com/ik_reza00"
              target="_blank"
              className="w-6 mr-3"
            >
              <TwitterIcon />
            </Link>
            <Link
              href="https://github.com/ikReza"
              target="_blank"
              className="w-6 mx-3"
            >
              <GithubIcon />
            </Link>
            <Link
              href="https://www.linkedin.com/in/ibrahim-kaiser/"
              target="_blank"
              className="w-6 mx-3"
            >
              <LinkedinIcon />
            </Link>
            <Link
              href="/"
              target="_blank"
              className="w-6 ml-3 animate-bounce hover:animate-none"
            >
              <PokeBall className="shadow-lg shadow-black rounded-full" />
            </Link>
          </nav>
        </motion.div>
      )}
      <Link href="/" className="absolute left-[50%] translate-x-[-50%] font-bold text-xl">
        Ibrahim Kaiser
      </Link>
    </header>
  );
};

export default Navbar;
