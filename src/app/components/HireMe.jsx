import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 overflow-hidden max-md:right-8 max-md:left-auto max-md:top-0 max-md:absolute">
      <div className="relative w-48 h-auto max-md:w-24">
        <CircularText className="fill-black animate-spin-slow" />
        <Link
          href="mailto:ikreza00@gmail.com"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white w-20 h-20 rounded-full flex items-center justify-center font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black max-md:w-12 max-md:h-12 max-md:text-[10px]"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;
