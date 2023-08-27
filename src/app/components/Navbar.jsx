"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({ href, title, className = "" }) => {
  const pathname = usePathname();
  console.log(pathname, href);
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] bg-black inline-block absolute left-0 -bottom-0.5 
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
        <Navlink href="/" title="Home" className="mr-4" />
        <Navlink href="/about" title="About" className="mx-4" />
        <Navlink href="/projects" title="Projects" className="ml-4" />
      </nav>
      <h2>Logo</h2>
      <nav>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
        <Link href="/" target="_blank">
          T
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
