import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { color, motion, useAnimation } from "framer-motion";
import { FaEnvelope, FaPhoneAlt, FaLinkedin, FaGithub, FaBlog } from "react-icons/fa";

const boxVariant = {
  visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  hidden: { opacity: 0, scale: 0 },
};

const ContactSection = ({ darkMode, lightBG, darkBG }) => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("visible");
    }
  }, [control, inView]);

  return (
    <section className="py-12 v">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8  p-6">Contact Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6  mx-3">
          <motion.a
            href="mailto:example@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "bg-transparent  " : lightBG
            } shadow-lg rounded-lg p-6 flex flex-col items-center justify-center`}
            style={{
              color: !darkMode ? lightBG : darkBG,
              borderColor: darkMode ?  'transparent' : lightBG,
              boxShadow:
              darkMode && "2px 2px 2px rgba(255, 255, 255, 0.08), -2px -2px 2px rgba(0, 0, 0, 0.56), 2px 2px 2px rgba(255, 255, 255, 0.08) inset, -2px -2px 2px rgba(0, 0, 0, 0.56) inset",
              border:darkMode && "1px solid rgba(0, 0, 0, 0.08)",
              backgroundColor:darkMode && "linear-gradient(330deg, #333, #111)",
            }}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <FaEnvelope
              className="text-4xl mb-4"
              style={{ color: !darkMode ? lightBG : darkBG }}
            />
            <h3 className="text-xl font-bold mb-2">Email</h3>
            <p className={`${darkMode ? "text-gray-500" : "text-gray-700"}`}>
              ankiitamalik22@gmail.com
            </p>
          </motion.a>
          <motion.a
            href="tel:+1234567890"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "bg-transparent border " : lightBG
            } shadow-lg rounded-lg p-6 flex flex-col items-center justify-center`}
            style={{
              color: !darkMode ? lightBG : darkBG,
              borderColor: darkMode ?  'transparent' : lightBG,
              boxShadow:
              darkMode && "2px 2px 2px rgba(255, 255, 255, 0.08), -2px -2px 2px rgba(0, 0, 0, 0.56), 2px 2px 2px rgba(255, 255, 255, 0.08) inset, -2px -2px 2px rgba(0, 0, 0, 0.56) inset",
              border:darkMode && "1px solid rgba(0, 0, 0, 0.08)",
              backgroundColor:darkMode && "linear-gradient(330deg, #333, #111)",
            }}
            ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
          >
            <FaPhoneAlt
              className="text-4xl  mb-4"
              style={{ color: !darkMode ? lightBG : darkBG }}
            />
          
            <h3 className="text-xl font-bold mb-2">Phone</h3>
            <p className={`${darkMode ? "text-gray-500" : "text-gray-700"}`}>
              +1234567890
            </p>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "bg-transparent border " : lightBG
            } shadow-lg rounded-lg p-6 flex flex-col items-center justify-center`}
            style={{
              color: !darkMode ? lightBG : darkBG,
              borderColor: darkMode ?  'transparent' : lightBG,
              boxShadow:
              darkMode && "2px 2px 2px rgba(255, 255, 255, 0.08), -2px -2px 2px rgba(0, 0, 0, 0.56), 2px 2px 2px rgba(255, 255, 255, 0.08) inset, -2px -2px 2px rgba(0, 0, 0, 0.56) inset",
              border: darkMode && "1px solid rgba(0, 0, 0, 0.08)",
              backgroundColor: darkMode && "linear-gradient(330deg, #333, #111)",
            }}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <FaLinkedin
              className="text-4xl  mb-4"
              style={{ color: !darkMode ? lightBG : darkBG }}
            />
            <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
            <p className={`${darkMode ? "text-gray-500" : "text-gray-700"}`}>
              linkedin.com/in/ankitamalik22
            </p>
          </motion.a>
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className={`${
              darkMode ? "bg-transparent border " : lightBG
            } shadow-lg rounded-lg p-6 flex flex-col items-center justify-center`}
            style={{
              color: !darkMode ? lightBG : darkBG,
              borderColor: darkMode ?  'transparent' : lightBG,
              boxShadow:
              darkMode && "2px 2px 2px rgba(255, 255, 255, 0.08), -2px -2px 2px rgba(0, 0, 0, 0.56), 2px 2px 2px rgba(255, 255, 255, 0.08) inset, -2px -2px 2px rgba(0, 0, 0, 0.56) inset",
              border: darkMode && "1px solid rgba(0, 0, 0, 0.08)",
              backgroundColor: darkMode &&"linear-gradient(330deg, #333, #111)",
            }}
            ref={ref}
            variants={boxVariant}
            initial="hidden"
            animate={control}
          >
            <FaGithub
              className="text-4xl  mb-4"
              style={{ color: !darkMode ? lightBG : darkBG }}
            />
            <h3 className="text-xl font-bold mb-2">GitHub</h3>
            <p className={`${darkMode ? "text-gray-500" : "text-gray-700"}`}>
              github.com/AnkitaMalik22
            </p>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
