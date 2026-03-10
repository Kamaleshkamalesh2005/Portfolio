import React from "react";
import { motion } from "framer-motion";
import SectionWrapper from "../hoc/SectionWrapper";
import { styles } from "../styles";
import { certificates, internships, nptelCertifications } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ItemCard = ({ index, name, link }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.1, 0.75)}
    className="bg-tertiary p-5 rounded-xl w-full flex justify-between items-center group hover:bg-black-100 transition-colors duration-300 cursor-pointer border border-transparent hover:border-white/10"
    onClick={() => window.open(link, "_blank", "noopener noreferrer")}
  >
    <span className="text-white font-medium text-[16px] md:text-[18px] group-hover:text-[#915eff] transition-colors duration-300 truncate pr-4">
      {name}
    </span>
    <div className="bg-black-200 w-10 h-10 rounded-full flex justify-center items-center group-hover:scale-110 transition-transform duration-300 shrink-0 border border-white/10">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-white"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
        />
      </svg>
    </div>
  </motion.div>
);

const Certificates = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Credentials</p>
        <h2 className={styles.sectionHeadText}>Certificates & Letters.</h2>
      </motion.div>

      <div className="mt-12 flex flex-col gap-16">
        <div>
           <h3 className="text-white font-bold text-[24px] mb-6">Certificates</h3>
           <div className="flex flex-col gap-4">
            {certificates.map((cert, index) => (
                <ItemCard key={`cert-${index}`} index={index} {...cert} />
            ))}
           </div>
        </div>

        <div>
           <h3 className="text-white font-bold text-[24px] mb-6">Internship Completion Letters</h3>
           <div className="flex flex-col gap-4">
            {internships.map((internship, index) => (
                <ItemCard key={`intern-${index}`} index={index + certificates.length} {...internship} />
            ))}
           </div>
        </div>

        <div>
           <h3 className="text-white font-bold text-[24px] mb-6">NPTEL Certifications</h3>
           <div className="flex flex-col gap-4">
            {nptelCertifications.map((nptel, index) => (
                <ItemCard key={`nptel-${index}`} index={index + certificates.length + internships.length} {...nptel} />
            ))}
           </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Certificates, "certificates");
