"use client";

import { useScroll } from "framer-motion";
import { useRef } from "react";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="relative my-8 w-[60%] mx-auto flex flex-col border">
      <div className="absolute w-8 h-8 rounded-full border-4 border-black -left-[11.3rem] top-1 bg-white" />
      <div className="absolute w-4 h-4 rounded-full bg-pink-700 -left-[10.8rem] top-3 animate-pulse"/>
      <div>
        <h3 className="font-bold text-2xl">
          {position}&nbsp;
          <a href={companyLink} target="_blank" className="text-pink-700   ">
            @{company}
          </a>
        </h3>
        <span className="font-medium text-black/75">
          {time} | {address}
        </span>
        <p className="font-medium">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  return (
    <div className="my-64">
      <h2 className="text-8xl font-bold text-center mb-32">Experience</h2>
      <div className="w-[75%] mx-auto relative border-2">
        <div className="absolute w-[4px] h-full bg-black left-8" />
        <ul className="w-full flex flex-col items-center justify-between ml-4 border border-green-600">
          <Details
            position="Civil Engineer"
            company="NKB"
            companyLink="https://nkbangladesh.co.bd/"
            time="2021-Present"
            address="Dhaka, BD"
            work="Consulting Services (Detailed Design, Construction Supervision) for Dhaka Mass Rapid Transit Development Project (Line-1)"
          />
          <Details
            position="Environmental Engineer"
            company="HDD"
            companyLink=""
            time="2020-2021"
            address="Dhaka, BD"
            work="Provide technical advice regarding design, construction, or program modifications by analyzing survey reports, maps, drawings, blueprints, aerial photography, and other topographical or geographical data"
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;

//absolute left-8 top-0 w-[4px] h-full bg-black origin-top
