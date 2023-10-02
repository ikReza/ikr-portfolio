import Image from "next/image";
import HomeLayout from "./components/HomeLayout";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "./components/Icons";
import HireMe from "./components/HireMe";

export default function Home() {
  return (
    <main className="flex items-center min-h-[85vh] mx-4">
      <HomeLayout className="pt-0">
        <div className="flex items-center justify-between w-full max-lg:flex-col">
          <div className="w-1/2 mx-auto max-md:w-full">
            <Image
              src="/profile/dev-pic.png"
              alt="Developer Image"
              width={500}
              height={0}
              className="rounded-bl-[40%] mx-auto max-lg:hidden max-md:block"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw))"
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center max-lg:w-full max-lg:text-center">
            <AnimatedText
              text="Turning Vision into Reality with Code and Design."
              className="!text-3xl text-center lg:!text-left sm:!text-4xl md:!text-5xl lg:!text-6xl"
            />
            <p className="my-4 font-medium">
              As a full-stack developer with expertise in Next.js and Tailwind
              CSS, I am dedicated to bringing your ideas to life in the most
              beautiful and functional way possible. Explore my latest projects,
              showcasing my expertise in web development.
            </p>
            <div className="flex items-center self-start mt-2 max-lg:self-center">
              <Link
                href="./profile/resume.pdf"
                target={"_blank"}
                download={true}
                className="flex items-center bg-black text-[whitesmoke] p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[whitesmoke] hover:text-black border-2 border-transparent hover:border-black"
              >
                Resume <LinkArrow className="!w-6 ml-1" />
              </Link>
              <Link
                href="mailto:ikreza00@gmail.com"
                className="ml-4 text-lg font-medium capitalize underline"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </HomeLayout>

      <HireMe />
      <div className="absolute right-8 bottom-8 w-24 max-md:hidden">
        <Image
          src="/profile/lightBulb.svg"
          alt="Light Bulb"
          width={100}
          height={0}
          className="animate-pulse"
        />
      </div>
    </main>
  );
}

//absolute right-8 bottom-8 inline-block w-24
