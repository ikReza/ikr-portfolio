"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "./Icons";

const Navlink = ({ href, title, className, line }) => {
  const pathname = usePathname();

  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] ${line} absolute left-0 -bottom-0.5 
                    group-hover:w-full transition-[width] duration-300
                    ${pathname === href ? "w-full" : "w-0"}`}
      />
    </Link>
  );
};

const Navbar = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
      <nav>
        <Navlink href="/" title="Home" className="mr-4" line="bg-purple-700" />
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
      <h2>Ibrahim Kaiser</h2>
      <nav className="flex items-center justify-center flex-wrap">
        <Link href="/" target="_blank" className="w-6 mr-3">
          <TwitterIcon />
        </Link>
        <Link
          href="https://github.com/ikReza"
          target="_blank"
          className="w-6 mx-3"
        >
          <GithubIcon />
        </Link>
        <Link href="/" target="_blank" className="w-6 ml-3">
          <LinkedinIcon />
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;