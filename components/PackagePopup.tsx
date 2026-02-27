'use client'
import { motion, AnimatePresence } from 'framer-motion';

interface Package {
  name: string; originalPrice: string; offerPrice: string;
  discountText: string; includes: string[];
}
interface PackagePopupProps { showPopup: boolean; setShowPopup: (v: boolean) => void; }

const PackagePopup = ({ showPopup, setShowPopup }: PackagePopupProps) => {
  const packages: Package[] = [
    { name: 'Rose Package',   originalPrice: '5,000/-', offerPrice: '3,500/-', discountText: '30% OFF', includes: ['Fasting Blood Sugar','Lipid Profile','SGOT/SGPT','S Creatinine - eGFR','Full Blood Count','Urine Full Report(UFR)','ECG'] },
    { name: 'Lotus Package',  originalPrice: '9,900/-', offerPrice: '7,000/-', discountText: '30% OFF', includes: ['Fasting Blood Sugar','Lipid Profile','Liver Profile','Reanal Profile','FBC','UFR','ECG'] },
    { name: 'Orchid Package', originalPrice: '11,850/-',offerPrice: '8,500/-', discountText: '30% OFF', includes: ['Fasting Blood Sugar','HbA1C','Lipid Profile','Liver Profile','Reanal Profile','FBC','UFR','ECG'] },
  ];


  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed inset-0 bg-black/70 flex justify-center items-center z-[1000] backdrop-blur-[5px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowPopup(false)}
        >
          <motion.div
            className="bg-white dark:bg-[#252525] dark:text-[#e0e0e0] p-8 rounded-[15px] max-w-[800px] w-[90%] max-h-[90vh] overflow-y-auto relative shadow-[0_10px_30px_rgba(0,0,0,0.2)] sm:px-4 sm:py-6"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              className="absolute top-[15px] right-[15px] bg-transparent border-none text-2xl cursor-pointer text-[#666666] dark:text-[#a0a0a0] hover:text-[#333333] dark:hover:text-[#e0e0e0] transition-colors duration-200"
              onClick={() => setShowPopup(false)}
            >
              &times;
            </button>

            <h2 className="text-[#6ba9f2] mb-2 text-center text-2xl font-bold">Our Current Health Packages</h2>
            <p className="text-center text-[#666666] dark:text-[#a0a0a0] mb-8 text-[1.1rem]">Special limited-time offers</p>

            {/* Package grid */}
            <div className="grid gap-6 mb-8 sm:[grid-template-columns:1fr] [grid-template-columns:repeat(auto-fit,minmax(250px,1fr))]">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  className="bg-[#f9f9f9] dark:bg-[#1e1e1e] rounded-[10px] p-6 border border-[#eeeeee] dark:border-[#333333] transition-all duration-300 hover:shadow-[0_5px_15px_rgba(0,0,0,0.1)] hover:-translate-y-[5px]"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-[#6ba9f2] mb-4 text-[1.2rem] font-semibold">{pkg.name}</h3>
                  <div className="flex flex-col mb-4 relative">
                    <span className="line-through text-[#999999] text-base">{pkg.originalPrice}</span>
                    <span className="text-2xl font-bold text-[#43e017] my-[0.2rem]">{pkg.offerPrice}</span>
                    <span className="absolute top-0 right-0 bg-[#ff4444] text-white px-2 py-[0.2rem] rounded-[20px] text-[0.7rem] font-bold">{pkg.discountText}</span>
                  </div>
                  <ul className="list-none pl-0">
                    {pkg.includes.map((item, i) => (
                      <li key={i} className="py-[0.3rem] relative pl-6 dark:text-[#e0e0e0] before:content-['✓'] before:text-[#43e017] before:absolute before:left-0">
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <button
              className="block mx-auto px-8 py-[0.8rem] bg-[#6ba9f2] text-white border-none rounded-[50px] cursor-pointer text-base transition-all duration-300 hover:bg-[#43e017] hover:-translate-y-[2px]"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PackagePopup;
