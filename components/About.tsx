import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItem {
  number: string;
  label: string;
}

interface CardVariants {
  hidden: {
    opacity: number;
    y: number;
  };
  visible: (i: number) => {
    opacity: number;
    y: number;
    transition: {
      duration: number;
      delay: number;
    };
  };
}

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2
  });
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: i * 0.2
      }
    })
  };
  
  const stats: StatItem[] = [
    { number: "25+", label: "Years Experience" },
    { number: "100k+", label: "Patients Served" },
    { number: "99%", label: "Accuracy Rate" },
    { number: "24/7", label: "Customer Support" }
  ];
  
  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>Alpha Medi Lab is a state-of-the-art medical laboratory committed to providing accurate, reliable, and timely diagnostic services. With cutting-edge technology and experienced professionals, we ensure the highest quality of medical testing services.</p>
            <p>Our mission is to empower healthcare providers and patients with accurate diagnostic information. We believe in continuous innovation and maintaining the highest standards in laboratory medicine.</p>
          </motion.div>
          
          <motion.div 
  className="about-image"
  initial={{ opacity: 0, x: 50 }}
  animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
  transition={{ duration: 0.6, delay: 0.2 }}
>
  <img src="/assets/images/alphaHome.png" alt="Alpha Medi Lab" />
</motion.div>

        </div>
        
        <div className="stats-container">
          {stats.map((stat, i) => (
            <motion.div 
              className="stat-card"
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              <h3>{stat.number}</h3>
              <p>{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;