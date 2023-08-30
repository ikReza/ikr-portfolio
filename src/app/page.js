import Image from "next/image";
import HomeLayout from "./components/HomeLayout";
import AnimatedText from "./components/AnimatedText";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex items-center min-h-[90vh] mx-4 border border-black">
      <HomeLayout className="pt-0">
        <div className="flex items-center justify-between w-full border-2 border-blue-500">
          <div className="w-1/2 mx-auto border-2 border-green-400">
            <Image
              src="/profile/dev-pic.png"
              alt="Developer Image"
              width={520}
              height={0}
              className="rounded-bl-[50%] mx-auto"
              priority
            />
          </div>
          <div className="w-1/2 flex flex-col items-center self-center">
            <AnimatedText
              text="Turning Vision into Relaity with Code and Design."
              className="!text-6xl text-left"
            />
            <p className="my-4 font-medium">
              As a full-stack developer with expertise in Next.js and Tailwind
              CSS, I am dedicated to bringing your ideas to life in the most
              beautiful and functional way possible. Explore my latest projects,
              showcasing my expertise in web development.
            </p>
            <div className="flex items-center self-start mt-2">
              <Link
                href="/"
                className="flex items-center bg-black text-[whitesmoke] p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-[whitesmoke] hover:text-black border-2 border-solid border-transparent hover:border-black"
              >
                Resume
              </Link>
              <Link href="mailto:ikreza00@gmail.com">Contact</Link>
            </div>
          </div>
        </div>
      </HomeLayout>
    </main>
  );
}
