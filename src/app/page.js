import Image from "next/image";
import HomeLayout from "./components/HomeLayout";

export default function Home() {
  return (
    <main className="flex items-center w-full min-h-screen mx-4">
      <HomeLayout className="pt-0">
        <div className="flex items-center justify-between w-full border-2 border-blue-500">
          <div className="w-1/2 mx-auto border-2 border-green-400">
            <Image
              src="/profile/dev-pic-2.png"
              alt="Developer Image"
              width={400}
              height={0}
              className="w-10/12 h-auto"
              priority
            />
          </div>
          <div className="w-1/2">
          <h1>Turning Vision into Relaity with Code and Design. Turning Vision into Relaity with Code and Design.</h1>
          </div>
        </div>
      </HomeLayout>
    </main>
  );
}
