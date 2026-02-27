'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

interface Package { name: string; price: string; features: string[]; recommended: boolean; }
interface PackagesData { [key: string]: Package; }

const Packages = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 })
  const [selectedPackage, setSelectedPackage] = useState<string>('basic')
  const phoneNumber = '+94718227704'
  const handleBookCall = () => { window.location.href = `tel:${phoneNumber}` }

  const packages: PackagesData = {
    basic: {
      name: 'Rose Package', price: '3500LKR', recommended: false,
      features: ['Fasting Blood Sugar','Lipid Profile','SGOT/SGPT','S Creatinine - eGFR','Full Blood Count','Urine Full Report(UFR)','ECG'],
    },
    comprehensive: {
      name: 'Lotus Package', price: '7000LKR', recommended: true,
      features: ['Fasting Blood Sugar','Lipid Profile','Liver Profile','Reanal Profile','FBC','UFR','ECG'],
    },
    executive: {
      name: 'Orchid Package', price: '8500LKR', recommended: false,
      features: ['Fasting Blood Sugar','HbA1C','Lipid Profile','Liver Profile','Reanal Profile','FBC','UFR','ECG'],
    },
  }

  const springVariants = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1, transition: { type: 'spring' as const, stiffness: 300, damping: 20 } },
    exit: { scale: 0.9, opacity: 0 },
  }

  const titleClass =
    "text-4xl sm:text-[2rem] mb-8 text-[#6ba9f2] relative inline-block " +
    "after:content-[''] after:absolute after:bottom-[-10px] after:left-0 " +
    "after:w-[50px] after:h-[5px] after:bg-[#43e017] after:rounded-full"

  const btnClass =
    "px-6 py-3 bg-[#6ba9f2] text-white border-none rounded-[30px] cursor-pointer text-base font-semibold " +
    "transition-all duration-300 inline-block no-underline w-full py-[15px] text-[1.1rem] " +
    "hover:bg-[#43e017] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]"

  return (
    <section id="packages" className="px-5 py-20 sm:py-[60px] min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full" ref={ref}>
        <motion.h2
          className={titleClass}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Health Packages &amp; Offers
        </motion.h2>

        {/* Package Tabs */}
        <motion.div
          className="flex justify-center gap-5 mb-10 flex-wrap"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.keys(packages).map((pkg) => (
            <motion.button
              key={pkg}
              className={`relative px-[25px] py-3 rounded-[30px] cursor-pointer text-base font-semibold border-none transition-all duration-300 ${
                selectedPackage === pkg
                  ? 'bg-[#6ba9f2] text-white dark:text-[#121212]'
                  : 'bg-[#f9f9f9] dark:bg-[#1e1e1e] text-[#333333] dark:text-[#e0e0e0]'
              }`}
              onClick={() => setSelectedPackage(pkg)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {packages[pkg].name}
              {packages[pkg].recommended && (
                <span className="absolute top-[-10px] right-[-10px] bg-[#43e017] text-white text-[0.7rem] px-2 py-[3px] rounded-[10px] font-semibold">
                  Recommended
                </span>
              )}
            </motion.button>
          ))}
        </motion.div>

        {/* Package Details */}
        <motion.div
          className="max-w-[700px] mx-auto bg-white dark:bg-[#252525] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 rounded-[20px] shadow-[0_15px_50px_rgba(107,169,242,0.15)]"
          key={selectedPackage}
          variants={springVariants}
          initial="initial"
          animate="animate"
          exit="exit"
        >
          <div className="flex justify-between items-center mb-[30px] xs:flex-col xs:text-center xs:gap-[10px]">
            <h3 className="text-[1.8rem] text-[#6ba9f2]">{packages[selectedPackage].name}</h3>
            <div className="text-[2.5rem] font-bold text-[#43e017]">{packages[selectedPackage].price}</div>
          </div>

          <ul className="mb-[30px]">
            {packages[selectedPackage].features.map((feature, i) => (
              <motion.li
                key={i}
                className="mb-[15px] list-none flex items-center dark:text-[#e0e0e0]"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <span className="text-[#43e017] font-bold mr-[10px] text-[1.2rem]">✓</span>
                {feature}
              </motion.li>
            ))}
          </ul>

          <motion.button
            className={btnClass}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleBookCall}
          >
            Book This Package
          </motion.button>

          <div className="mt-5 p-[15px] bg-[#f9f9f9] dark:bg-[#1e1e1e] dark:text-[#a0a0a0] rounded-[10px] text-[0.9rem] text-center">
            <p>Special offer: 10% discount for senior citizens and students</p>
          </div>
        </motion.div>

        {/* Industrial Packages */}
        <motion.div
          className="mt-16 p-8 bg-white dark:bg-[#252525] rounded-[20px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-[1.8rem] text-[#6ba9f2] mb-3">Industrial Packages</h3>
          <p className="dark:text-[#a0a0a0] leading-[1.6]">
            We provide specialized health assessments for both Food Handler Companies and Non-Food Handler Companies.
            Our industrial packages ensure compliance with health regulations and promote workplace well-being.
          </p>
        </motion.div>

        {/* Special Promotions */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-center mb-[30px] text-[#6ba9f2] text-[1.8rem]">Special Promotions</h3>
          <div className="grid gap-[30px] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
            {[
              { title: 'Family Package',  body: '20% discount when 3 or more family members book together' },
              { title: 'Seasonal Offer',  body: 'Free vitamin D test with any package booked this month'   },
            ].map(({ title, body }) => (
              <div key={title} className="bg-white dark:bg-[#252525] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-[25px] rounded-[15px] shadow-[0_8px_30px_rgba(0,0,0,0.08)] border-l-[5px] border-[#43e017]">
                <h4 className="text-[#6ba9f2] mb-[10px] text-[1.3rem]">{title}</h4>
                <p className="dark:text-[#a0a0a0]">{body}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Packages
