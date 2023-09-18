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
        subTitle: "Civil Engineer",
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
      <h2 className="mb-32 text-8xl font-bold text-center">Skills</h2>
      <div className="flex flex-col w-full h-[360px]">
        <div className="flex gap-x-4 xl:gap-x-8 mx-auto mb-4">
          {aboutData.map((item, itemIdx) => (
            <button
              key={itemIdx}
              className={`${
                index === itemIdx ? "text-black" : "text-slate-500"
              }`}
              onClick={() => setIndex(itemIdx)}
            >
              {item.title}
            </button>
          ))}
        </div>
        <div className="py-2 md:py-6 flex flex-col items-center gap-y-2 md:gap-y-4">
          {aboutData[index].info.map((item, itemIdx) => (
            <div
              key={itemIdx}
              className="flex flex-col items-center md:flex-row gap-x-2"
            >
              <div className="font-light mb-2 text-center md:mb-0">
                {item.subTitle}
              </div>
              <div className="hidden md:flex">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {item.icons?.map((icon, iconIdx) => (
                  <div key={iconIdx} className="text-2xl">
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

//flex flex-col w-full xl:max-w-[48%] h-[480px]
