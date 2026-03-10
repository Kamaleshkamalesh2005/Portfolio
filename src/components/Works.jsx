import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { personalInfo, projects } from "../constants";
import { Tilt } from "react-tilt";

const ProjectCard = ({
  index,
  name,
  category,
  date,
  description,
  tags,
  hosted_link,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const cardContent = (
    <div className="mt-4 p-2 md:p-0">
      <h3 className="text-white font-bold text-[20px] md:text-[22px] leading-tight">{name}</h3>
      <p className="mt-2 text-secondary text-[11px] md:text-[12px] font-medium">
        {category} | {date}
      </p>
      <ul className="mt-3 ml-4 list-disc space-y-1.5 md:space-y-2">
        {Array.isArray(description) ? (
          description.map((point, idx) => (
            <li
              key={idx}
              className="text-secondary text-[11px] md:text-[12px] leading-[18px] md:leading-[20px] pl-1"
            >
              {point}
            </li>
          ))
        ) : (
          <li className="text-secondary text-[11px] md:text-[12px] leading-[18px] md:leading-[20px] pl-1">
            {description}
          </li>
        )}
      </ul>
      <div className="mt-4 md:mt-6 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <p
            key={`${name}-${tag.name}`}
            className={`text-[11px] md:text-[12px] font-semibold ${tag.color}`}
          >
            #{tag.name}
          </p>
        ))}
      </div>
    </div>
  );

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)} className="w-full md:w-auto">
      {isMobile ? (
        <div className="bg-tertiary p-4 md:p-6 rounded-2xl w-full h-full">
          {cardContent}
        </div>
      ) : (
        <Tilt
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary p-6 rounded-2xl md:w-[380px] w-full h-full"
        >
          {cardContent}
        </Tilt>
      )}
    </motion.div>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          {personalInfo.projectsIntro}
        </motion.p>
      </div>

      <div className="mt-10 md:mt-20 flex flex-wrap gap-5 md:gap-8 justify-start">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
