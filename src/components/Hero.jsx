import React from "react";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { motion } from "framer-motion";
import { personalInfo } from "../constants";

const Hero = () => {
  return (
    <section className="relative w-full min-h-screen h-[100svh] mx-auto overflow-hidden">
      <div
        className={`${styles.paddingX} absolute top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-3 md:gap-5 inset-0 z-10`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-electric-purple" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm{" "}
            <span className="text-electric-purple">{personalInfo.name}</span>
          </h1>
          <p className={`${styles.heroSubText} text-white-100 mt-2`}>
            {personalInfo.roleDetail}
          </p>
        </div>
      </div>

      <div className="w-full h-full hero-canvas">
        <ComputersCanvas />
      </div>

      <div className="absolute xs:bottom-2 bottom-12 w-full flex justify-center items-center z-10">
        <a href="#about">
          <div className="w-[30px] h-[55px] md:w-[35px] md:h-[64px] rounded-3xl border-3 md:border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
