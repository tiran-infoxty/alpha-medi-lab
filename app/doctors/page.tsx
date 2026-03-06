'use client';

import { useState } from 'react';
import Image from 'next/image';
import { 
  MapPin, Phone, Clock, ArrowLeft, 
  ChevronRight, Beaker, Calendar, Building2, ExternalLink 
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const branches = [
  {
    id: 'main',
    name: 'Main Branch',
    address: '222/B, Kandy Road, Dalugama, Kelaniya (Opposite of Kelaniya University)',
    phones: ['0112 906 949', '0112 993 917', '071 822 7704'],
    hours: 'Mon-Sat: 6:00 AM - 8:00 PM, Sun/Poya: 6:00 AM - 6:00 PM',
    services: ['Full Laboratory Services', 'Doctor Channeling', 'Sample Collection', 'Emergency Testing', 'ECG'],
    image: '/assets/banner.jpg', 
    mapLink: '#'
  },
  {
    id: 'kiribathgoda',
    name: 'Kiribathgoda Branch',
    address: 'Sudarshanarama Rd, Kiribathgoda (Near Kiribathgoda Base Hospital)',
    phones: ['0112 984 661', '071 960 7974'],
    hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 6:00 PM, Poya: 6:30 AM - 12 Noon',
    services: ['Sample Collection', 'Dr Channeling', 'OPD', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'makola',
    name: 'Makola Branch',
    address: 'Galpottha Junction, Makola South, Makola',
    phones: ['0112 269 949'],
    hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'kohalwila',
    name: 'Kohalwila Branch',
    address: 'Koahalwila Rd, Ataheraliyagahamula, Kelaniya',
    phones: ['0112 269 858'],
    hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'mavaramandiya',
    name: 'Mavaramandiya Branch',
    address: 'Delgoda Rd, Mawaramandiya, Siyambalape',
    phones: ['0112 927 837'],
    hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'kadawatha',
    name: 'Kadawatha Branch',
    address: 'Ganemulla Rd, Ihalakaragahamuna, Kadawatha (Near Ekasath Mawatha)',
    phones: ['0112 902 420'],
    hours: 'Mon-Sat: 6:30 AM - 5:30 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'hunupitiya',
    name: 'Hunupitiya Branch',
    address: 'Temple Junction, Dalupitiya Rd, Hunupitiya',
    phones: ['0112 983 198'],
    hours: 'Mon-Sat: 6:30 AM - 6:30 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'sapugaskanda',
    name: 'Sapugaskanda Branch',
    address: 'Makola Rd, Sapugaskanda',
    phones: ['0113 682 681'],
    hours: 'Mon-Sat: 6:30 AM - 6:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  },
  {
    id: 'thorana',
    name: 'Thorana Junction Branch',
    address: 'Waragoda Rd, Thorana Junction, Kelaniya',
    phones: ['0112 908 261'],
    hours: 'Mon-Sat: 6:30 AM - 7:00 PM, Sun: 6:30 AM - 12 Noon, Poya: Closed',
    services: ['Sample Collection', 'ECG'],
    image: '/assets/banner.jpg',
    mapLink: '#'
  }
];

export default function BranchesPage() {
  const [selectedBranch, setSelectedBranch] = useState<typeof branches[0] | null>(null);

  const handleCall = () => {
    window.location.href = "tel:+94718227704";
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {!selectedBranch ? (
            /* HUB VIEW */
            <motion.div 
              key="common"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
            >
              <div className="text-center mb-16">
                <h2 className="text-5xl font-black mb-4 text-slate-900">Our Branches</h2>
                <p className="text-slate-500 max-w-2xl mx-auto text-lg">
                  Access world-class diagnostic services across our network of 9 specialized locations.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {branches.map((branch) => (
                  <button
                    key={branch.id}
                    onClick={() => setSelectedBranch(branch)}
                    className="group bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col h-full"
                  >
                    <div className="size-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      <Building2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">{branch.name}</h3>
                    <p className="text-slate-500 text-sm line-clamp-2 mb-8">{branch.address}</p>
                    <div className="mt-auto flex items-center text-blue-600 font-bold text-sm gap-1">
                      Explore Branch <ChevronRight size={16} />
                    </div>
                  </button>
                ))}
              </div>
            </motion.div>
          ) : (
            /* BRANCH DETAIL VIEW */
            <motion.div 
              key={selectedBranch.id}
              initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            >
              <button 
                onClick={() => setSelectedBranch(null)}
                className="flex items-center gap-2 text-slate-400 hover:text-blue-600 font-bold text-sm mb-10 transition-colors"
              >
                <ArrowLeft size={18} /> Back to Locations
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
                <div className="space-y-10">
                  <div>
                    <h1 className="text-5xl font-black mb-6 text-slate-900 leading-tight">{selectedBranch.name}</h1>
                    <div className="flex gap-4 items-start group">
                      <div className="size-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <p className="font-bold text-slate-700 text-lg leading-snug">{selectedBranch.address}</p>
                        <a href={selectedBranch.mapLink} className="text-blue-600 text-xs font-black uppercase tracking-widest mt-2 inline-flex items-center gap-1 hover:underline">
                          View on Map <ExternalLink size={12} />
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Contact Information</h4>
                      {selectedBranch.phones.map(p => (
                        <div key={p} className="flex items-center gap-3">
                          <Phone size={16} className="text-blue-600" />
                          <p className="text-lg font-bold text-slate-800">{p}</p>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Service Hours</h4>
                      <div className="flex items-start gap-3">
                        <Clock size={16} className="text-blue-600 mt-1" />
                        <p className="text-slate-600 font-medium leading-relaxed">{selectedBranch.hours}</p>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleCall}
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 text-white font-black rounded-2xl shadow-xl shadow-blue-200 hover:bg-blue-700 transition-all flex items-center justify-center gap-3 transform hover:-translate-y-1"
                  >
                    <Calendar size={20} /> BOOK AN APPOINTMENT
                  </button>
                </div>

                <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm">
                  <h4 className="font-black text-blue-600 uppercase tracking-[0.2em] text-[10px] mb-8 flex items-center gap-2">
                    <Beaker size={16} /> Available Services
                  </h4>
                  <ul className="space-y-5">
                    {selectedBranch.services.map(s => (
                      <li key={s} className="flex items-center gap-4 font-bold text-slate-700">
                        <div className="size-2 rounded-full bg-blue-600 shadow-[0_0_8px_rgba(37,99,235,0.5)]" /> 
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* IMAGE AT BOTTOM */}
              <div className="relative h-[450px] w-full rounded-[3rem] overflow-hidden shadow-2xl group">
                <Image 
                  src="/assets/banner.jpg" 
                  alt={selectedBranch.name} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent flex items-end p-12">
                   <p className="text-white font-black text-xl italic drop-shadow-md">
                     {selectedBranch.name} Facility
                   </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}