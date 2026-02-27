import { motion, type Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface StatItem { number: string; label: string; }

const About = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1, y: 0,
      transition: { duration: 0.6, delay: i * 0.2 }
    })
  };

  const stats: StatItem[] = [
    { number: '25+',   label: 'Years Experience' },
    { number: '100k+', label: 'Patients Served'  },
    { number: '99%',   label: 'Accuracy Rate'    },
    { number: '24/7',  label: 'Customer Support' },
  ];

  const titleClass =
    "text-4xl sm:text-[2rem] mb-8 text-[#6ba9f2] relative inline-block " +
    "after:content-[''] after:absolute after:bottom-[-10px] after:left-0 " +
    "after:w-[50px] after:h-[5px] after:bg-[#43e017] after:rounded-full";

  return (
    <section id="about" className="px-5 py-20 sm:py-[60px] min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full" ref={ref}>
        <motion.h2
          className={titleClass}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[50px] mb-[50px]">
          <motion.div
            className="flex flex-col gap-5"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="leading-[1.7] opacity-90 dark:text-[#a0a0a0]">
              Alpha Medi Lab is a state-of-the-art medical laboratory committed to providing accurate,
              reliable, and timely diagnostic services. With cutting-edge technology and experienced
              professionals, we ensure the highest quality of medical testing services.
            </p>
            <p className="leading-[1.7] opacity-90 dark:text-[#a0a0a0]">
              Our mission is to empower healthcare providers and patients with accurate diagnostic
              information. We believe in continuous innovation and maintaining the highest standards
              in laboratory medicine.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img
              src="/assets/images/alphaHome.png"
              alt="Alpha Medi Lab"
              className="w-full rounded-[15px] shadow-[0_15px_30px_rgba(0,0,0,0.1)]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 xs:grid-cols-1 gap-5 mt-[50px]">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="bg-white dark:bg-[#252525] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-5 rounded-[10px] shadow-[0_8px_20px_rgba(107,169,242,0.1)] text-center transition-transform duration-300 hover:-translate-y-[10px]"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
            >
              <h3 className="text-[2.5rem] text-[#6ba9f2] mb-[10px]">{stat.number}</h3>
              <p className="text-[#333333] dark:text-[#e0e0e0] font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
