import Link from "next/link";
import { CircularText } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 overflow-hidden">
      <div className="relative w-48 h-auto">
        <CircularText className="fill-black animate-spin-slow" />
        <Link
          href="mailto:ikreza00@gmail.com"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-black text-white w-20 h-20 rounded-full flex items-center justify-center font-semibold hover:bg-white hover:text-black border-2 border-transparent hover:border-black"
        >
          Hire Me
        </Link>
      </div>
    </div>
  );
};

export default HireMe;