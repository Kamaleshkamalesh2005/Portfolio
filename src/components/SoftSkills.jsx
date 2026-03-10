import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { softSkills } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const SoftSkills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Abilities</p>
        <h2 className={styles.sectionHeadText}>Soft Skills.</h2>
      </motion.div>

      <div className="mt-10 flex flex-wrap gap-4">
        {softSkills.map((skill, index) => (
          <motion.div
            key={skill}
            variants={fadeIn("up", "spring", index * 0.1, 0.75)}
            className="bg-tertiary px-6 py-4 rounded-full border border-white/10 hover:border-[#915eff] hover:bg-black-100 transition-colors duration-300 cursor-default"
          >
            <p className="text-white text-[16px] font-medium tracking-wider">
              {skill}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(SoftSkills, "softskills");
