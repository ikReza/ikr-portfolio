"use client";

import { useState } from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaGithub,
  FaPython,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiPrisma,
  SiTensorflow,
  SiStreamlit,
} from "react-icons/si";

const aboutData = [
  {
    title: "Skills",
    info: [
      {
        subTitle: "Web Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <FaGithub />,
        ],
      },
      {
        subTitle: "Machine Learning",
        icons: [<FaPython />, <SiTensorflow />, <SiStreamlit />],
      },
    ],
  },
  {
    title: "Education",
    info: [
      {
        subTitle: "MSc in Data Science - UIU, Dhaka, BD",
        stage: "2023",
      },
      {
        subTitle: "BSc in Civil Engineering - BUET, Dhaka, BD",
        stage: "2019",
      },
    ],
  },
  {
    title: "Online Courses",
    info: [
      {
        subTitle:
          "Introduction to TensorFlow for Artificial Intelligence, Machine Learning, and Deep Learning",
        stage: "Coursera",
      },
      {
        subTitle:
          "Traffic Sign Classification Using Deep Learning in Python/Keras",
        stage: "Coursera",
      },
      {
        subTitle: "Perform Real-Time Object Detection with YOLOv3",
        stage: "Coursera",
      },
    ],
  },
  {
    title: "Work Experience",
    info: [
      {
        subTitle: "Jr. Civil Engineer",
        stage: "2021 - Present",
      },
      {
        subTitle: "Environmental Engineer",
        stage: "2020 - 2021",
      },
    ],
  },
];
const Skills = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-48 mx-auto flex flex-col items-center">
      <h2 className="mb-32 font-bold !text-4xl text-center lg:!text-left sm:!text-6xl md:!text-7xl lg:!text-8xl">
        Skills
      </h2>
      <div className="flex flex-col w-full h-[420px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-4">
          {aboutData.map((item, itemIdx) => (
            <button
              key={itemIdx}
              className={`${
                index === itemIdx
                  ? "text-black underline underline-offset-2"
                  : "text-slate-600"
              } font-semibold`}
              onClick={() => setIndex(itemIdx)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="py-2 md:py-6 flex flex-col w-9/12 mx-auto gap-y-2 md:gap-y-4">
          {aboutData[index].info.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="w-full flex flex-col items-center md:flex-row md:justify-between gap-x-2"
            >
              <div className="font-light mb-2 text-center md:text-left md:mb-0">
                {item.subTitle}
              </div>

              <div className="flex">
                <span className="hidden md:flex mr-4">-</span>
                {item.stage}
              </div>
              <div className={`flex gap-x-4 ${item.stage && "hidden"}`}>
                {item.icons?.map((icon, iconIdx) => (
                  <div key={iconIdx} className="text-2xl text-black">
                    {icon}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
