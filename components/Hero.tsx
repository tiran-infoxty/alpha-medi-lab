"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import PackagePopup from "./PackagePopup";

const Hero = () => {
  const [showPopup, setShowPopup] = useState<boolean>(false);

  return (
    <section id="home" className="hero">
      <PackagePopup showPopup={showPopup} setShowPopup={setShowPopup} />

      {/* Background overlay for better text readability */}
      <div className="hero-overlay"></div>

      <div className="container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span>🏥 Trusted Medical Laboratory</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Welcome to <br />
            <span>Alpha Medi Lab</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Accurate diagnostics, cutting-edge technology, and compassionate
            care for your peace of mind. Experience excellence in medical
            testing.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.a
              href="#services"
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Services
            </motion.a>
            <motion.button
              onClick={() => setShowPopup(true)}
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Packages
            </motion.button>
          </motion.div>

          {/* <motion.div
            className="hero-features"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>ISO Certified Lab</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>24/7 Emergency</span>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <span>Expert Team</span>
            </div>
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
