"use client";

import { useMemo, useRef } from "react";
import AnimationWrapper from "../animation-wrapper";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Image from "next/image";
import aiImage from "../../../assets/shyam_image.jpg";

function variants() {
  return {
    offscreen: {
      y: 150,
      opacity: 0,
    },
    onscreen: ({ duration = 2 } = {}) => ({
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration,
      },
    }),
  };
}

const socialIcons = [
  {
    id: "facebook",
    icon: <FaFacebookF className="w-10 h-10 text-green-600 cursor-pointer" />,
  },
  {
    id: "twitter",
    icon: <FaTwitter className="w-10 h-10 text-green-600 cursor-pointer" />,
  },
  {
    id: "linkedin",
    icon: <FaLinkedinIn className="w-10 h-10 text-green-600 cursor-pointer" />,
  },
  {
    id: "instagram",
    icon: <FaInstagram className="w-10 h-10 text-green-600 cursor-pointer" />,
  },
];

export default function ClientHomeView({ data }) {
  const setVariants = useMemo(() => variants(), []);
  const containerRef = useRef(null);

  return (
    <div className="max-w-screen-xl mt-24 px-8 xl:px-16 mx-auto" id="home">
      <AnimationWrapper>
        <motion.div
          className="grid grid-flow-row sm:grid-flow-col grid-rows-2 md:grid-rows-1 sm:grid-cols-2 gap-8 py-6 sm:py-16"
          variants={setVariants}
        >
          {/* Left Side: Text */}
          <div className="flex flex-col justify-center items-start row-start-2 sm:row-start-1">
            <h1 className="mb-4 text-3xl lg:text-4xl xl:text-6xl font-medium leading-normal flex flex-wrap gap-1">
              {data && data.length
                ? data[0]?.heading.split(" ").map((word, index) => (
                    <span
                      key={index}
                      className={`${
                        index === 2 || index === 3
                          ? "text-green-600"
                          : "text-black"
                      }`}
                    >
                      {word}
                    </span>
                  ))
                : null}
            </h1>

            <p className="text-black mt-4 mb-8 font-bold text-lg">
              {data && data.length ? data[0]?.summary : ""}
            </p>

            <motion.div className="flex gap-4">
              {socialIcons.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ scale: 0 }}
                  animate={{ rotate: 360, scale: 1 }}
                  transition={{
                    type: "spring",
                    damping: 20,
                    stiffness: 80,
                    duration: 2,
                  }}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  whileTap={{ scale: 0.8, rotate: -360, borderRadius: "100%" }}
                >
                  {item.icon}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Image */}
          <motion.div ref={containerRef} className="flex w-full justify-end">
            <motion.div
              drag
              dragConstraints={containerRef}
              className="relative w-[300px] h-[400px] sm:w-[300px] sm:h-[400px] border-[6px] border-green-500 rounded-2xl overflow-hidden shadow-2xl shadow-green-700"
            >
              <Image
                src={aiImage}
                alt="Profile Picture"
                fill
                quality={100}
                className="object-cover"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </AnimationWrapper>
    </div>
  );
}
