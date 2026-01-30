"use client";
import { motion } from "framer-motion";
import { AiFillTikTok } from "react-icons/ai";
import { FaInstagramSquare, FaYoutubeSquare } from "react-icons/fa";
import {
  FaFacebook,
  FaLinkedin,
  FaSquareFacebook,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa6";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="footer" ref={ref}>
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-logo">
            <h3>Alpha Medi Lab</h3>
            <p>Your Trusted Partner in Medical Diagnostics</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About Us</a>
            <a href="/services">Services</a>
            <a href="/packages">Packages</a>
            <a href="/contact">Contact</a>
          </div>

          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a
                href="https://www.facebook.com/alphamedilabgampaha"
                className="social-icon"
              >
                <FaSquareFacebook />
              </a>
              <a
                href="https://www.linkedin.com/company/alphamedilab/"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.instagram.com/alphamedilabsl/?hl=en"
                className="social-icon"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.youtube.com/@AlphaMediLab"
                className="social-icon"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.tiktok.com/@alphamedilab?_r=1&_t=ZS-93Um1sBKfzR"
                className="social-icon"
              >
                <AiFillTikTok />
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="copyright"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>
            &copy; {new Date().getFullYear()} Alpha Medi Lab. All Rights
            Reserved.
          </p>
          <p>Made with Zeylentiq Solutions</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
