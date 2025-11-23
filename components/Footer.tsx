'use client';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
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
            <a href="#home">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#packages">Packages</a>
            <a href="#contact">Contact</a>
          </div>
          
          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-icons">
              <a href="#" className="social-icon">FB</a>
              <a href="#" className="social-icon">TT</a>
              <a href="#" className="social-icon">IG</a>
              {/* <a href="#" className="social-icon">LI</a> */}
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="copyright"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} Alpha Medi Lab. All Rights Reserved.</p>
          <p>Made with Zeylentiq Solutions</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;