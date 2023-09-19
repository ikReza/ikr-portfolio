import Image from "next/image";
import AnimatedText from "../components/AnimatedText";
import HomeLayout from "../components/HomeLayout";
import AnimatedNumbers from "./AnimatedNumbers";
import Skills from "./Skills";

const About = () => {
  return (
    <main className="w-full flex flex-col items-center justify-center">
      <HomeLayout className="pt-16">
        <AnimatedText
          text="Passion Fuels Purpose!"
          className="mb-16 !text-4xl text-center lg:!text-left sm:!text-6xl md:!text-7xl lg:!text-8xl"
        />
        <div className="w-full grid grid-cols-8 gap-16 max-md:gap-8">
          <div className="col-span-3 flex flex-col items-start justify-start max-lg:col-span-4 max-md:order-2 max-md:col-span-8">
            <h2 className="uppercase font-bold text-lg mb-4 text-gray-600">
              Biography
            </h2>
            <p className="font-medium">
              Hi, I'm Kaiser, a web developer with a passion for creating
              beautiful, functional, and user-centered digital experiences.
            </p>
            <p className="font-medium my-4">
              I believe that design is about more than just making things look
              pretty – it's about solving problems and creating intuitive,
              enjoyable experiences for users.
            </p>
            <p className="font-medium">
              I look forward to the opportunity to bring my skills and passion
              to your next project.
            </p>
          </div>
          <div className="relative col-span-3 border-2 border-black bg-[whitesmoke] rounded-2xl p-8 h-max max-md:p-2 max-lg:col-span-4 max-md:order-1 max-md:col-span-8">
            <div className="absolute bg-black w-[102%] h-[102%] top-0 -right-3 -z-10 rounded-3xl" />
            <Image
              src="/profile/dev-pic-1.png"
              alt="developer image"
              width={500}
              height={0}
              className="bg-gray-800 rounded-2xl w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw))"
            />
          </div>
          <div className="col-span-2 flex flex-col items-end justify-between max-lg:col-span-8 max-lg:flex-row max-lg:items-center max-md:order-3">
            <div className="flex flex-col items-end max-lg:items-center">
              <h1 className="text-5xl font-bold">
                <AnimatedNumbers value={5} />+
              </h1>
              <h2 className="font-medium text-gray-600 max-lg:text-center">Projects Completed</h2>
            </div>
            <div className="flex flex-col items-end max-lg:items-center">
              <h1 className="text-5xl font-bold">
                <AnimatedNumbers value={50} />+
              </h1>
              <h2 className="font-medium text-gray-600 max-lg:text-center">
                LeetCode Problems Solved
              </h2>
            </div>
            <div className="flex flex-col items-end max-lg:items-center">
              <h1 className="text-4xl sm:text-5xl font-bold">
                <AnimatedNumbers value={1} />+
              </h1>
              <h2 className="font-medium text-gray-600 max-lg:text-center">Satisfied Clients</h2>
            </div>
          </div>
        </div>
        <Skills />
      </HomeLayout>
    </main>
  );
};

export default About;
