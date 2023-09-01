import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import HomeLayout from "../components/HomeLayout";
import AnimatedNumbers from "./AnimatedNumbers";
import Experience from "./Experience";

const About = () => {
  return (
    <main className="flex flex-col items-center justify-center">
      <HomeLayout className="pt-16">
        <AnimatedText text="Passion Fuels Purpose!" className="mb-16" />
        <div className="grid grid-cols-8 gap-8">
          <div className="col-span-3">
            <h2 className="uppercase font-bold text-lg mb-4 text-gray-600">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm CodeBucks, a web developer and UI/UX designer with a
              passion for creating beautiful, functional, and user-centered
              digital experiences. With 4 years of experience in the field. I am
              always looking for new and innovative ways to bring my clients'
              visions to life.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              Whether I'm working on a website, mobile app, or other digital
              product, I bring my commitment to design excellence and
              user-centered thinking to every project I work on. I look forward
              to the opportunity to bring my skills and passion to your next
              project.
            </p>
          </div>
          <div className="relative col-span-3 border-2 border-black bg-[whitesmoke] rounded-2xl p-8">
            <div className="absolute bg-black w-[102%] h-[102%] top-0 -right-3 -z-10 rounded-3xl" />
            <Image
              src="/profile/dev-pic-1.png"
              width={500}
              height={0}
              className="bg-gray-800 rounded-2xl"
              priority
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between">
            <div className="flex flex-col items-end">
              <h1 className="text-7xl font-bold">
                <AnimatedNumbers value={10} />+
              </h1>
              <h2 className="text-lg font-medium text-gray-600">
                Projects Completed
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-7xl font-bold">
                <AnimatedNumbers value={50} />+
              </h1>
              <h2 className="text-lg font-medium text-gray-600">
                LeetCode Problems Solved
              </h2>
            </div>
            <div className="flex flex-col items-end">
              <h1 className="text-7xl font-bold">
                <AnimatedNumbers value={4} />+
              </h1>
              <h2 className="text-lg font-medium text-gray-600">
                Satisfied Clients
              </h2>
            </div>
          </div>
        </div>
        <Experience />
      </HomeLayout>
    </main>
  );
};

export default About;
