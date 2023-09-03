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
// import {TbBrandNextjs} from "react-icons/tb"
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
    <div>
      <h2 className="mb-10 text-3xl font-medium text-center">Skills</h2>
      <div className="">
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
        <div className="">
          {aboutData[index].info.map((item, itemIdx) => (
            <div key={itemIdx}>
              <div>{item.subTitle}</div>
              <div className="hidden">-</div>
              <div>{item.stage}</div>
              <div className="flex gap-x-4">
                {item.icons?.map((icon, iconIdx) => (
                  <div key={iconIdx} className="text-2xl">{icon}</div>
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

//py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start
//hidden md:flex
