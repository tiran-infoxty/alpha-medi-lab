"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

interface BranchCard {
  name: string;
  location: string;
  phone: string;
}

const BranchesSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const branches: BranchCard[] = [
    {
      name: "Main Branch",
      location: "Dalugama, Kelaniya",
      phone: "0112 906 949",
    },
    {
      name: "Kiribathgoda",
      location: "Kiribathgoda",
      phone: "0112 984 661",
    },
    {
      name: "Makola",
      location: "Makola",
      phone: "0112 269 949",
    },
    {
      name: "Kadawatha",
      location: "Kadawatha",
      phone: "0112 902 420",
    },
    {
      name: "Kohalwila",
      location: "Kohalwila",
      phone: "0112 269 858",
    },
    {
      name: "Hunupitiya",
      location: "Hunupitiya",
      phone: "0112 983 198",
    },
  ];

  return (
    <section className="home-branches-section" ref={ref}>
      <div className="container">
        <motion.div
          className="branches-intro"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Find Us Near You</h2>
          <p className="section-description">
            Visit any of our conveniently located branches for professional
            medical testing services
          </p>
        </motion.div>

        <div className="branches-grid">
          {branches.map((branch, index) => (
            <motion.div
              key={index}
              className="branch-card-home"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
            >
              <div className="branch-icon">🏥</div>
              <h3>{branch.name}</h3>
              <p className="branch-location">📍 {branch.location}</p>
              <p className="branch-phone">📞 {branch.phone}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="view-all-branches"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link href="/branches" className="btn btn-primary">
            View All Branches
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default BranchesSection;
