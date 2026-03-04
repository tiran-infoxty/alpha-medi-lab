'use client';

import { useState } from 'react';
import { Search, Microscope, Droplets, Activity, Heart, Brain, Bone, ShieldCheck, ChevronRight, Info } from 'lucide-react';
import { motion } from 'motion/react';

const categories = [
  { id: 'all', name: 'All Services', icon: ShieldCheck },
  { id: 'pathology', name: 'Pathology', icon: Microscope },
  { id: 'radiology', name: 'Radiology', icon: Activity },
  { id: 'cardiology', name: 'Cardiology', icon: Heart },
  { id: 'neurology', name: 'Neurology', icon: Brain },
  { id: 'orthopedics', name: 'Orthopedics', icon: Bone },
];

const services = [
  {
    id: 1,
    category: 'pathology',
    name: 'Complete Blood Count (CBC)',
    description: 'A comprehensive test that measures different components of your blood.',
    price: '$25',
    tat: '4-6 Hours',
    prep: 'No fasting required'
  },
  {
    id: 2,
    category: 'pathology',
    name: 'Lipid Profile',
    description: 'Measures cholesterol and triglyceride levels to assess heart health risk.',
    price: '$35',
    tat: '8-12 Hours',
    prep: '10-12 hours fasting required'
  },
  {
    id: 3,
    category: 'radiology',
    name: 'Chest X-Ray',
    description: 'Imaging test to view the lungs, heart, and chest cavity.',
    price: '$50',
    tat: '2 Hours',
    prep: 'Remove metal objects'
  },
  {
    id: 4,
    category: 'cardiology',
    name: 'ECG (Electrocardiogram)',
    description: 'Records the electrical signals in your heart to check for heart conditions.',
    price: '$40',
    tat: 'Instant',
    prep: 'No special prep'
  },
  {
    id: 5,
    category: 'pathology',
    name: 'HbA1c (Diabetes)',
    description: 'Measures your average blood sugar levels over the past 3 months.',
    price: '$30',
    tat: '6 Hours',
    prep: 'No fasting required'
  },
  {
    id: 6,
    category: 'radiology',
    name: 'Ultrasound Whole Abdomen',
    description: 'Imaging of internal organs using high-frequency sound waves.',
    price: '$80',
    tat: '4 Hours',
    prep: 'Full bladder required'
  },
  {
    id: 7,
    category: 'neurology',
    name: 'EEG (Electroencephalogram)',
    description: 'Test that detects electrical activity in your brain.',
    price: '$120',
    tat: '24 Hours',
    prep: 'Clean hair, no products'
  },
  {
    id: 8,
    category: 'orthopedics',
    name: 'Bone Density Scan (DEXA)',
    description: 'Measures bone mineral density to screen for osteoporosis.',
    price: '$90',
    tat: '24 Hours',
    prep: 'No calcium supplements 24h before'
  }
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredServices = services.filter(service => {
    const matchesCategory = activeCategory === 'all' || service.category === activeCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero Section */}
      <section className="bg-blue-600 py-16 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 -mt-20 -mr-20 opacity-10">
          <Microscope size={400} />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-black mb-6">Test Directory & Services</h1>
            <p className="text-xl text-blue-100 mb-8">
              Browse our extensive list of diagnostic tests and specialized services. We offer over 2,000+ tests with guaranteed accuracy.
            </p>
            <div className="relative max-w-xl">
              <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="text-blue-400" size={20} />
              </div>
              <input 
                type="text"
                className="block w-full pl-12 pr-4 py-4 rounded-xl bg-white dark:bg-slate-900 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-400/30 shadow-lg"
                placeholder="Search for a test (e.g. CBC, Vitamin D, MRI)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Categories */}
            <aside className="w-full lg:w-64 shrink-0">
              <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 p-4 sticky top-24">
                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-wider px-4 mb-4">Categories</h3>
                <nav className="space-y-1">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-bold transition-all ${
                        activeCategory === cat.id 
                        ? 'bg-blue-600 text-white shadow-md shadow-blue-600/20' 
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800'
                      }`}
                    >
                      <cat.icon size={18} />
                      {cat.name}
                    </button>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Services Grid */}
            <div className="flex-1">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  {activeCategory === 'all' ? 'All Services' : categories.find(c => c.id === activeCategory)?.name}
                  <span className="ml-3 text-sm font-medium text-slate-400">({filteredServices.length} results)</span>
                </h2>
                <div className="flex gap-2">
                  <button className="px-4 py-2 text-sm font-bold text-slate-600 dark:text-slate-400 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800">Sort by: Popular</button>
                </div>
              </div>

              {filteredServices.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredServices.map((service) => (
                    <motion.div 
                      key={service.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-md transition-all flex flex-col"
                    >
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="text-lg font-bold text-slate-900 dark:text-white">{service.name}</h3>
                        <span className="text-xl font-black text-blue-600 dark:text-blue-400">{service.price}</span>
                      </div>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 flex-1">{service.description}</p>
                      
                      <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-50 dark:border-slate-800">
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Turnaround Time</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{service.tat}</p>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">Preparation</p>
                          <p className="text-sm font-bold text-slate-700 dark:text-slate-300">{service.prep}</p>
                        </div>
                      </div>

                      <div className="flex gap-3">
                        <button className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">
                          Book Now
                        </button>
                        <button className="p-2.5 rounded-lg border border-slate-200 text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all">
                          <Info size={20} />
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="bg-white dark:bg-slate-900 rounded-2xl p-12 text-center border border-dashed border-slate-200 dark:border-slate-800">
                  <div className="size-16 rounded-full bg-slate-50 dark:bg-slate-800 flex items-center justify-center mx-auto mb-4">
                    <Search className="text-slate-300 dark:text-slate-600" size={32} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">No services found</h3>
                  <p className="text-slate-500 dark:text-slate-400">Try adjusting your search or category filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-16 bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl text-center md:text-left">
              <h2 className="text-3xl font-black mb-4">Can&apos;t find what you&apos;re looking for?</h2>
              <p className="text-slate-400 text-lg">Our customer support team is available 24/7 to help you find the right test or schedule an appointment.</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-blue-600 text-white font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-600/20">
                Chat with Us
              </button>
              <button className="px-8 py-4 rounded-xl border border-white/20 text-white font-bold hover:bg-white/10 transition-all">
                Call Support
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
