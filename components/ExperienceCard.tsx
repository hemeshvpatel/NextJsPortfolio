import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-10- flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        src={"/images/Hemesh - LinkedIn Headshot.jpg"}
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
      />

      <div className="px-0 md:px-10">
        {/* Title */}
        <h4 className="text-4xl font-light">Software Engineer</h4>

        {/* Company */}
        <p className="font-bold text-2xl mt-1">Hotel Engine</p>

        {/* Technologies */}
        <div className="flex space-x-2 my-2 mx-auto">
          <div className="relative h-10 w-10">
            <Image
              className="rounded-full object-contain w-32 h-32"
              src={"https://www.svgrepo.com/show/303500/react-1-logo.svg"}
              layout={"fill"}
              alt={""}
              priority
            />
          </div>
          <div className="relative h-10 w-10">
            <Image
              className="rounded-full object-contain w-32 h-32"
              src={"https://www.svgrepo.com/show/303500/react-1-logo.svg"}
              layout={"fill"}
              alt={""}
              priority
            />
          </div>
          <div className="relative h-10 w-10">
            <Image
              className="rounded-full object-contain w-32 h-32"
              src={"https://www.svgrepo.com/show/303500/react-1-logo.svg"}
              layout={"fill"}
              alt={""}
              priority
            />
          </div>
          <div className="relative h-10 w-10">
            <Image
              className="rounded-full object-contain w-32 h-32"
              src={"https://www.svgrepo.com/show/303500/react-1-logo.svg"}
              layout={"fill"}
              alt={""}
              priority
            />
          </div>
        </div>

        {/* Time */}
        <p className="uppercase py-5 text-gray-300">Started and Ended</p>

        {/* Job Description */}
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Job Description</li>
          <li>Job Description</li>
          <li>Job Description</li>
          <li>Job Description</li>
          <li>Job Description</li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
