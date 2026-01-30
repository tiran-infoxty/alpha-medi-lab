"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface Service {
  title: string;
  description: string;
  icon: string;
}

const ServicesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services: Service[] = [
    {
      title: "Laboratory Testing",
      description:
        "Comprehensive range of blood tests, urine analysis, and diagnostic tests with accurate results.",
      icon: "🔬",
    },
    {
      title: "Doctor Channeling",
      description:
        "Book appointments with experienced doctors across multiple specialties at our main branch.",
      icon: "👨‍⚕️",
    },
    {
      title: "Sample Collection",
      description:
        "Home sample collection service available for your convenience. Call us to schedule.",
      icon: "💉",
    },
    {
      title: "Emergency Testing",
      description:
        "24/7 emergency testing services for urgent medical situations at our main branch.",
      icon: "🚨",
    },
    {
      title: "ECG Services",
      description:
        "Electrocardiogram testing available at all branches for heart health monitoring.",
      icon: "❤️",
    },
    {
      title: "Health Packages",
      description:
        "Specially designed health screening packages for individuals and families.",
      icon: "📋",
    },
  ];

  return (
    <section id="services" className="home-services-section" ref={ref}>
      <div className="container">
        <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Our Services</h2>
          <p className="section-description">
            Comprehensive medical testing and healthcare services delivered with
            precision and care
          </p>
        </motion.div>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card-home"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all-services"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link href="/services" className="btn btn-primary">
            View All Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
