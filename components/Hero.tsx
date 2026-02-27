"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import PackagePopup from "./PackagePopup";

const Hero = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  const btnPrimary =
    "bg-[#6ba9f2] text-white py-4 px-10 rounded-[50px] font-semibold text-[1.1rem] " +
    "cursor-pointer no-underline inline-block transition-all duration-300 " +
    "shadow-[0_10px_25px_rgba(107,169,242,0.4)] " +
    "hover:bg-[#43e017] hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(67,224,23,0.4)]";

  const btnSecondary =
    "bg-white/15 backdrop-blur-[10px] text-white py-4 px-10 rounded-[50px] font-semibold " +
    "text-[1.1rem] border-2 border-white/30 cursor-pointer transition-all duration-300 " +
    "hover:bg-white/25 hover:border-white/50 hover:-translate-y-[3px]";

  return (
    <section
      id="home"
      className="min-h-[80vh] relative flex items-center overflow-hidden pt-[100px] bg-[url('/assets/images/alphaHeroWeb.png')] dark:bg-[url('/assets/images/alphaWebBanner.png')] bg-center bg-cover"
    >
      <PackagePopup showPopup={showPopup} setShowPopup={setShowPopup} />

      {/* Background overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-black/40 to-transparent dark:from-black/75 dark:to-[rgba(18,18,18,0.5)]" />

      <div className="max-w-[1200px] px-5 z-[2] relative">
        <motion.div
          className="max-w-[700px] md:max-w-full flex flex-col gap-[30px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-block bg-black/60 backdrop-blur-[10px] px-6 py-3 rounded-[50px] border border-white/30 text-white text-[0.95rem] sm:text-[0.85rem] sm:px-5 sm:py-[10px] font-semibold w-fit shadow-[0_8px_20px_rgba(0,0,0,0.4)] [text-shadow:1px_1px_4px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>🏥 Trusted Medical Laboratory</span>
          </motion.div>

          <motion.h1
            className="text-[4.5rem] md:text-[3.5rem] sm:text-[2.8rem] xs:text-[2.2rem] font-extrabold leading-[1.1] text-white [text-shadow:3px_3px_10px_rgba(0,0,0,0.8),0_0_20px_rgba(0,0,0,0.6)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to <br />
            <span className="text-9xl text-[#43e017] block [text-shadow:3px_3px_10px_rgba(0,0,0,0.8),0_0_25px_rgba(67,224,23,0.5)]">
              Alpha Medi Lab
            </span>
          </motion.h1>

          <motion.p
            className="text-[1.25rem] sm:text-[1.1rem] xs:text-base text-white leading-[1.7] [text-shadow:2px_2px_8px_rgba(0,0,0,0.8),0_0_15px_rgba(0,0,0,0.5)]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Accurate diagnostics, cutting-edge technology, and compassionate
            care for your peace of mind. Experience excellence in medical
            testing.
          </motion.p>

          <motion.div
            className="flex gap-5 flex-wrap xs:flex-col xs:gap-[15px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#services"
              className={btnPrimary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
            <motion.button
              onClick={() => setShowPopup(true)}
              className={btnSecondary}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Packages
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
