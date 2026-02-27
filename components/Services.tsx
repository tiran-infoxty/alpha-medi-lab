import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface Service {
  id: string; title: string; icon: string; shortDesc: string;
  fullDesc: string; tests?: string[]; specialties?: string[];
}

const Services = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeService, setActiveService] = useState<string | null>(null);

  const services: Service[] = [
    { id: 'blood1', title: 'Hematology', icon: '🩸', shortDesc: 'Checks your blood for signs of infections, anemia, and other conditions.', fullDesc: "We analyze your blood to detect issues like low hemoglobin, infections, and clotting problems. It's a key test to understand your overall health and immune system.", tests: ['Full Blood Count','WBC/DC','Haemoglobin(Hb)','PCV','Platelet Count','ESR','Malaria Parasite (MP)ASIRI','Blood Grouping','HbA1c','Blood Picture+FBC','PT/INR'] },
    { id: 'blood2', title: 'Chemical Pathology - 1', icon: '🌡️', shortDesc: 'Measures your blood sugar levels for diabetes and glucose control.', fullDesc: 'This set of tests tracks how your body handles sugar — helpful for diagnosing and managing diabetes or blood sugar-related concerns.', tests: ['Fasting Blood Sugar(FBS)','Post Prandial Blood Sugar(PPBS)','Random Blood Sugar(RBS)','Random Blood Sugar(capillary)','OGTT','Blood Sugar Series(BSS)','Glucose challenge test(GCT)'] },
    { id: 'blood3', title: 'Chemical Pathology - 2', icon: '💉', shortDesc: 'Tests your cholesterol, kidney health, and basic body chemistry.', fullDesc: 'We check fat levels, kidney function, and essential minerals to assess heart health and body balance. Great for routine checkups and chronic condition monitoring.', tests: ['S.Cholesterole','Lipid Profile','Blood Urea with BUN','S.Creatinine & E GFR','S.Electrolytes','Reanal Profile(RFT)','Total Calcium(Ca2+)','Ionized Calcium','Corrected Calcium','Uric Acid','Inorganic Phosphorus(PO4-)','CPK'] },
    { id: 'blood4', title: 'Chemical Pathology - 3', icon: '🩹', shortDesc: 'Evaluates your liver function and checks vital body enzymes.', fullDesc: 'Helps diagnose liver issues, digestive health, and enzyme imbalances. It gives a clearer picture of how your organs are working.', tests: ['TIBC(UIBC)','S.Iron','LDH','Amylase','Liver Profile (LFT)','AST(SGOT)','ALT (SGPT)','Alkaline Phosphatase(ALP)','Gama GT (YGT)','S.Albumin','S.Protein(Albumin/Globulin)','Bilirubin Total','Bilirubin Total/Direct'] },
    { id: 'blood5', title: 'Chemical Pathology - 4', icon: '🧪', shortDesc: 'Detects infections like dengue, HIV, and autoimmune issues.', fullDesc: 'This panel screens for viruses, bacterial infections, and immune responses. Crucial for detecting illnesses early and managing chronic conditions.', tests: ['ANA','Leptospira AB','Influanza Ag(H1N1)','Dengue NS1 Ag','Dengue Ab Igg/Ige','FAT','CRP','Rhematoid factor','HIV','SAT','ASOT','VDRL','HepBSAg','Hep A Ab','Hep C Ab'] },
    { id: 'urine & Stool', title: 'Urine & Stool Analysis', icon: '🧫', shortDesc: 'Detects infections and tracks kidney and gut health.', fullDesc: 'Through urine and stool tests, we check for signs of infections, diabetes, kidney issues, and digestive disorders — a full-body check from the inside out.', tests: ['Urine Full Report(UFR)','Pregnancy Test (URINE)','Urine Micro Albumin(UMA)','Urine Protein Creatinine Ratio(UPCR)','Stool Full Report (SFR)','Stool Occult Blood'] },
    { id: 'hormone', title: 'Hormone Tests', icon: '⚗️', shortDesc: 'Advanced hormone level testing for various conditions.', fullDesc: 'We measure hormones like thyroid, reproductive, and stress-related hormones to find imbalances and guide treatment for conditions like infertility or fatigue.', tests: ['Troponin I - Titre','Ferritin','T3','T4','TSH','FSH','LH','Prolactin','Testosterone','Progesterone','Vitamin D','Serum beta HCG','Total PSA','CA 125','CEA'] },
    { id: 'doctor', title: 'Doctor Channeling', icon: '👨‍⚕️', shortDesc: 'Connect with specialized healthcare professionals.', fullDesc: 'Get expert medical advice and treatment by connecting with our panel of specialized doctors — from general health to complex care.', specialties: ['General Physician','Demartologist','Paediatrition','Chest Physician','Hemartologist','Psychatrist','Cardiologist','Councillar'] },
    { id: 'animal', title: 'Animal Testing', icon: '🐶', shortDesc: "Lab tests to monitor your pet's health accurately.", fullDesc: 'Just like humans, pets need medical checkups too! We provide reliable lab testing for animals to detect and monitor various health conditions.', specialties: ['FBC','SGPT','SGOT','Creatinine','And Many More'] },
    { id: 'other', title: 'Other Services', icon: '🩺', shortDesc: 'Extra care services like ECG and home visits made easy.', fullDesc: 'We offer convenient services such as ECGs, home doctor visits, and blood pressure checks — bringing healthcare right to your doorstep.', specialties: ['ECG','Home Visits','Blood Pressure Monitoring'] },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const titleClass =
    "text-4xl sm:text-[2rem] mb-8 text-[#6ba9f2] relative inline-block " +
    "after:content-[''] after:absolute after:bottom-[-10px] after:left-0 " +
    "after:w-[50px] after:h-[5px] after:bg-[#43e017] after:rounded-full";

  const btnClass =
    "mt-[15px] px-6 py-3 bg-[#6ba9f2] text-white border-none rounded-[30px] cursor-pointer text-base font-semibold " +
    "transition-all duration-300 inline-block no-underline " +
    "hover:bg-[#43e017] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]";

  return (
    <section id="services" className="px-5 py-20 sm:py-[60px] min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full" ref={ref}>
        <motion.h2
          className={titleClass}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h2>

        <motion.div
          className="grid gap-[30px] [grid-template-columns:repeat(auto-fit,minmax(300px,1fr))] sm:[grid-template-columns:1fr]"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          {services.map((service) => {
            const isActive = activeService === service.id;
            return (
              <motion.div
                key={service.id}
                className={`relative overflow-hidden cursor-pointer rounded-[15px] p-[30px] transition-all duration-300 bg-white dark:bg-[#252525] dark:text-[#e0e0e0] ${
                  isActive
                    ? 'shadow-[0_15px_40px_rgba(107,169,242,0.2)] dark:shadow-[0_15px_40px_rgba(100,181,246,0.3)]'
                    : 'shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)]'
                }`}
                variants={itemVariants}
                onClick={() => setActiveService(isActive ? null : service.id)}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="text-[3.5rem] mb-5">{service.icon}</div>
                <h3 className="text-2xl mb-[10px] text-[#6ba9f2]">{service.title}</h3>
                <p className="dark:text-[#a0a0a0]">{service.shortDesc}</p>

                {/* Expand button */}
                <div className={`absolute top-5 right-5 w-[30px] h-[30px] flex items-center justify-center rounded-full text-[1.2rem] transition-all duration-300 ${
                  isActive
                    ? 'rotate-45 bg-[#6ba9f2] text-white'
                    : 'bg-[#f9f9f9] dark:bg-[#1e1e1e] dark:text-[#e0e0e0]'
                }`}>
                  +
                </div>

                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      className="mt-5 overflow-hidden"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="mb-[15px] leading-[1.6] opacity-90 dark:text-[#a0a0a0]">{service.fullDesc}</p>
                      <div className="mb-5">
                        <h4 className="mb-[10px] text-[#6ba9f2]">
                          {['doctor','animal','other'].includes(service.id) ? 'Specialties:' : 'Available Tests:'}
                        </h4>
                        <ul className="grid gap-[10px] pl-5 sm:[grid-template-columns:1fr] [grid-template-columns:repeat(2,1fr)]">
                          {(service.tests || service.specialties)?.map((item, i) => (
                            <li key={i} className="dark:text-[#a0a0a0]">{item}</li>
                          ))}
                        </ul>
                      </div>
                      <button className={btnClass}>Learn More</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
