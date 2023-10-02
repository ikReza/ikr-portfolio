"use client";

import Link from "next/link";
import AnimatedText from "../components/AnimatedText";
import HomeLayout from "../components/HomeLayout";
import Image from "next/image";

import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

const FramerImage = motion(Image);

const FeaturedProject = ({ title, type, summary, img, link, github }) => {
  return (
    <article className="w-full flex flex-col lg:flex-row items-center justify-between rounded-3xl border border-black bg-[whitesmoke] shadow-2xl p-8 lg:p-12">
      <Link
        href={link}
        target="_blank"
        className="w-full lg:w-1/2 rounded-lg overflow-hidden shadow-lg drop-shadow-lg"
      >
        <FramerImage
          src={img}
          width={500}
          height={0}
          priority
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>

      <div className="w-full lg:w-1/2 flex flex-col items-start justify-between pl-0 pt-6 lg:pl-6">
        <span className="font-medium text-xl text-pink-700">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h3 className="my-2 text-4xl font-bold text-left">{title}</h3>
        </Link>
        <p className="font-medium text-black my-2">{summary}</p>
        <div className="mt-2 flex items-center">
          <Link href={github} target="_blank">
            <FaGithub className="text-4xl" />
          </Link>
          <Link
            href={link}
            target="_blank"
            className="ml-4 bg-black text-white rounded-lg p-2 px-6 text-lg font-semibold"
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Projects = ({ title, type, img, link, github }) => {
  return (
    <article className="w-full flex flex-col items-center justify-center rounded-2xl border border-black p-6 bg-[whitesmoke] relatve">
      <Link
        href={link}
        target="_blank"
        className="w-full rounded-lg overflow-hidden shadow-lg drop-shadow-lg"
      >
        <Image
          src={img}
          width={500}
          height={0}
          className="w-full h-60 md:h-72"
          priority
        />
      </Link>

      <div className="w-full flex flex-col items-start justify-between mt-4">
        <span className="font-medium text-xl text-pink-700">{type}</span>
        <Link
          href={link}
          target="_blank"
          className="hover:underline underline-offset-2"
        >
          <h3 className="my-2 text-3xl font-bold text-left">{title}</h3>
        </Link>
        <div className="w-full mt-2 flex items-center justify-between">
          <Link
            href={link}
            target="_blank"
            className="text-lg font-semibold underline"
          >
            Visit
          </Link>
          <Link href={github} target="_blank">
            <FaGithub className="text-3xl" />
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = () => {
  return (
    <main className="">
      <HomeLayout className="pt-16">
        <AnimatedText
          text="Imagination Trumps Knowledge!"
          className="mb-16 !text-4xl text-center lg:!text-left sm:!text-6xl md:!text-7xl lg:!text-8xl"
        />

        <div className="grid grid-cols-12 gap-24 yap-y-32 max-lg:gap-x-8 max-md:gap-y-24 ">
          <div className="col-span-12">
            <FeaturedProject
              title="E-Commerce Application"
              summary="A simple e-commerce application using Vanilla JS, Tailwind CSS. It shows basic cart functionalities like - add, clear, apply coupon."
              link="https://ikr-delibird.netlify.app/"
              type="Featured Project"
              img="/profile/ikr-delibird.png"
              github="https://github.com/ikReza/ostad-learning/tree/main/Week-4/assignment"
            />
          </div>
          <div className="col-span-6 max-sm:col-span-12">
            <Projects
              title="Agency Website"
              link="https://agency-website1.vercel.app/"
              type="Featured Project"
              img="/profile/agency-website.png"
              github="https://github.com/ikReza/agency-website1"
            />
          </div>
          <div className="col-span-6 max-sm:col-span-12">
            <Projects
              title="Blog Application"
              link="https://ikr-blog-ikreza.vercel.app/"
              type="Featured Project"
              img="/profile/blog-1.png"
              github="https://github.com/ikReza/ostad-learning/tree/main/Module-12/assignment"
            />
          </div>
        </div>
      </HomeLayout>
    </main>
  );
};

export default Project;
