import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BranchInfo {
  name: string; address: string; phone: string; hours: string;
  services: string[]; image: string; locationLink: string;
}
interface BranchesData { [key: string]: BranchInfo; }

const Branches = () => {
  const [ref, inView] = useInView({ triggerOnce: false, threshold: 0.2 });
  const [activeBranch, setActiveBranch] = useState<string>('main');
  const phoneNumber = '+94718227704';
  const handleBookCall = () => { window.location.href = `tel:${phoneNumber}`; };

  const branches: BranchesData = {
    main: {
      name: 'Main Branch',
      address: '222/B, Kandy Road, Dalugama,Kelaniya (Opposite of Kelaniya Univercity) ',
      phone: '0112 906 949 , 0112 993 917, 071 822 7704',
      hours: 'Mon-Sat: 6:00 AM - 8:00 PM, Sun/Poya: 6:00 AM - 6:00 PM',
      services: ['Full Laboratory Services', 'Doctor Channeling', 'Sample Collection', 'Emergency Testing', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/Jqj9mYvkkERfGcZM6?g_st=ipc',
    },
    north: {
      name: 'Kiribathgoda Branch',
      address: 'Sudarshanarama Rd, Kiribathgoda (Near Kiribathgoda Base Hospital)',
      phone: '0112 984 661 , 071 960 7974',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 6:00 PM, Poya: 6:30 AM - 12 Noon',
      services: ['Sample Collection', 'Dr Channeling', 'OPD', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/AgBphZidxNrHTmd9A?g_st=ipc',
    },
    east: {
      name: 'Makola Branch',
      address: ' Galpottha Junction, Makola South,Makola',
      phone: '0112 269 949',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/U8c8rZAoJ4UUSLMr5?g_st=ipc',
    },
    kohalwila: {
      name: 'Kohalwila Branch',
      address: ' Koahalwila Rd, Ataheraliyagahamula,Kelaniya',
      phone: '0112 269 858',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/qX325ZMtCAX84Ve7A?g_st=ipc',
    },
    Mvm: {
      name: 'Mavaramandiya Branch',
      address: ' Delgoda Rd,Mawaramandiya,Siyambalape',
      phone: '0112 927 837',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/vkvMUnqYCWgq3DjN7',
    },
    Kadawatha: {
      name: 'Kadawatha Branch',
      address: 'Ganemulla Rd, Ihalakaragahamuna,Kadawatha (Near Ekasath Mawatha)',
      phone: '0112 902 420',
      hours: 'Mon-Sat: 6:30 AM - 5:30 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/oQS1LJjkTg666nqS6?g_st=ipc',
    },
    Hunupitiya: {
      name: 'Hunupitiya Branch',
      address: ' Temple Junction,Dalupitiya Rd,Hunupitiya ',
      phone: '0112 983 198',
      hours: 'Mon-Sat: 6:30 AM - 6:30 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/DWCx64NiXZN6d2EC6?g_st=ipc',
    },
    Sapugaskanda: {
      name: 'Sapugaskanda Branch',
      address: 'Makola Rd, Sapugaskanda',
      phone: '0113 682 681',
      hours: 'Mon-Sat: 6:30 AM - 6:00 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/VXiqgxnUGDMAR3Qg8 ',
    },
    ThoranaJunction: {
      name: 'Thorana Junction Branch',
      address: 'Waragoda Rd,Thorana Junction, Kelaniya',
      phone: '0112 908 261',
      hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya:Closed',
      services: ['Sample Collection', 'ECG'],
      image: '/api/placeholder/600/400',
      locationLink: 'https://maps.app.goo.gl/VqjtyTdUM2fkSz3D8 ',
    },
  };

  const titleClass =
    "text-4xl sm:text-[2rem] mb-8 text-[#6ba9f2] relative inline-block " +
    "after:content-[''] after:absolute after:bottom-[-10px] after:left-0 " +
    "after:w-[50px] after:h-[5px] after:bg-[#43e017] after:rounded-full";

  const btnClass =
    "px-6 py-3 bg-[#6ba9f2] text-white border-none rounded-[30px] cursor-pointer text-base font-semibold " +
    "transition-all duration-300 inline-block no-underline w-full mt-[30px] " +
    "hover:bg-[#43e017] hover:-translate-y-[3px] hover:shadow-[0_10px_20px_rgba(0,0,0,0.1)]";

  return (
    <section id="branches" className="px-5 py-20 sm:py-[60px] min-h-screen flex flex-col justify-center">
      <div className="max-w-[1200px] mx-auto w-full" ref={ref}>
        <motion.h2
          className={titleClass}
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.6 }}
        >
          Our Branches
        </motion.h2>

        {/* Branch Tabs */}
        <motion.div
          className="flex justify-center gap-5 mb-10 flex-wrap sm:flex-col sm:max-w-[300px] sm:mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {Object.keys(branches).map((branch) => (
            <motion.button
              key={branch}
              className={`px-[25px] py-3 rounded-[30px] cursor-pointer text-base font-semibold transition-all duration-300 border-none ${
                activeBranch === branch
                  ? 'bg-[#6ba9f2] text-white dark:text-[#121212]'
                  : 'bg-[#f9f9f9] dark:bg-[#1e1e1e] text-[#333333] dark:text-[#e0e0e0]'
              }`}
              onClick={() => setActiveBranch(branch)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {branches[branch].name}
            </motion.button>
          ))}
        </motion.div>

        {/* Branch Details */}
        <div className="relative min-h-[400px]">
          {Object.keys(branches).map((branch) => (
            <motion.div
              key={branch}
              className="grid grid-cols-1 md:grid-cols-2 gap-[30px] top-0 left-0 w-full"
              initial={{ opacity: 0, x: 20 }}
              animate={{
                opacity: activeBranch === branch ? 1 : 0,
                x: activeBranch === branch ? 0 : 20,
                display: activeBranch === branch ? 'grid' : 'none',
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Info */}
              <div className="bg-white dark:bg-[#252525] dark:shadow-[0_8px_30px_rgba(0,0,0,0.3)] p-10 rounded-[20px] shadow-[0_15px_50px_rgba(107,169,242,0.15)]">
                <h3 className="mb-[30px] text-[#6ba9f2] dark:text-[#6ba9f2] text-[1.8rem]">
                  {branches[branch].name}
                </h3>

                {[
                  { icon: '📍', text: branches[branch].address },
                  { icon: '📱', text: branches[branch].phone   },
                  { icon: '⏰', text: branches[branch].hours   },
                ].map(({ icon, text }) => (
                  <div key={icon} className="flex items-start gap-[15px] mb-[15px]">
                    <span className="text-2xl text-[#6ba9f2]">{icon}</span>
                    <p className="dark:text-[#a0a0a0]">{text}</p>
                  </div>
                ))}

                {branches[branch].locationLink && (
                  <div className="flex items-start gap-[15px] mb-[15px]">
                    <span className="text-2xl text-[#6ba9f2]">🗺️</span>
                    <a href={branches[branch].locationLink} target="_blank" rel="noopener noreferrer" className="text-[#6ba9f2] hover:underline">
                      View on Map
                    </a>
                  </div>
                )}

                <div className="mt-[30px]">
                  <h4 className="mb-[15px] text-[#6ba9f2]">Available Services</h4>
                  <ul className="pl-5">
                    {branches[branch].services.map((service, i) => (
                      <motion.li
                        key={i}
                        className="mb-[10px] dark:text-[#e0e0e0]"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        {service}
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  className={btnClass}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleBookCall}
                >
                  Book An Appointment
                </motion.button>
              </div>

              {/* Image placeholder */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Branches;
