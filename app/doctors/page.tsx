'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, Star, School, ClipboardList, Languages, ChevronLeft, ChevronRight, Filter } from 'lucide-react';
import { motion } from 'motion/react';

const doctors = [
  {
    id: 1,
    name: 'Dr. Sarah Johnson',
    specialty: 'Cardiologist',
    rating: 4.9,
    reviews: 120,
    education: 'MD, DM (Cardiology)',
    experience: '12+ Years Experience',
    languages: 'English, Spanish',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDu6CEAiXTkHbI78Y1GXAf3VCXffN0iK3RZE5PCPwFACRkH6MprC3xTn9N4VNEsQiaHF_3q_jzC77FvSzWTckdZ7h4E00u9vSO1noAXOVx0KYC-SvLjJ1jZQUUSaQV4n1-Q0C0uFak_tw_VFT593AMPXfsp7UC55QYFpbCrXQMan2aqMTQvsiRNG8mkYfS3Y1WbV8wHxnGMaYItVEVMm9z5tAxGcsVYjqSKyArdjdTGvfzNJYnqSoFiFNtwlspfem_n64UK98DvUKhd',
    available: 'Available Today'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    specialty: 'Neurologist',
    rating: 4.8,
    reviews: 98,
    education: 'MBBS, MD (Neuro)',
    experience: '15+ Years Experience',
    languages: 'English, Mandarin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6gJ3Cwahi37uIJnHbU5OJNVrwl4MaGBw3nIlrL-ln49n-7Wn15fnb4d40GWTITgLemz7fc1r4LUnOpd6GRzUj6ThWtbBLuxN2O7spzIS1RZuF_BbPtW4pW3BtaZc4O-884DfPQpirMW0HPL_ppccWKJ-t5kc4jkUQUUeOwDJn2RiOAmQmNomidiMiL_jue3i3BfPPgsE85PCWIG24A1hfd4s-4sEodUywpRScEr2ZFH7W9HRflkCw6uKq_wmO9Cs2EIcU-tl0_Qw9',
    available: null
  },
  {
    id: 3,
    name: 'Dr. Emily Roberts',
    specialty: 'Pediatrician',
    rating: 5.0,
    reviews: 200,
    education: 'MD (Pediatrics)',
    experience: '8 Years Experience',
    languages: 'English, French',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCq3A5gCwWZxigzPTUkcdz2mubtuwbZDUGgaIGgs7M_nbw2jBcub4d289oP8NbAUKzfATb5-BOsajArAQho7WrXQrGbIMAzW9MhdTePWqgbm1SYh3yZoHYMOfmBX0GbIsOrzWLjaUyvwKnQttDwItAXs-RVOScsOFxkaXRF7rK7CFj0mTN5FDiy_UBGLCCXnbz7CCAvvQMT_WSVXq7_IlnxRKb3kFL1LkB_MOIcK9yvqCB9IacdcEIfrYFNiEEYJr_p-BYmJBCRdOVS',
    available: 'Next Available: Tomorrow'
  },
  {
    id: 4,
    name: 'Dr. James Wilson',
    specialty: 'Orthopedic Surgeon',
    rating: 4.7,
    reviews: 85,
    education: 'MS (Orthopedics)',
    experience: '20+ Years Experience',
    languages: 'English',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBt5_mMZo_H7Z6Xnl7XHsovOOLJJK6sAH9k4cx1ZhEnKdxLIhgPjYJzq3s03vEQpPcOnscDR7cMlbNysxSzCh3zw9rncmxqX6DyhiOc1KYEqfLSlflMVYV3hTvTxDJ1D-u4wsqfzGNS38s9mPsaQXkCutuJ84vaGbwxVKEX-mP8ORMMT3zCmkxQQKEvhoIaOVcPtQsA6wBrj3gEqTXUDY2lEuZVPuGkfjyV9n9LOvc_usytUuUokTXaBsH9qDytV_kRvDn-7PPSEuh7',
    available: null
  },
  {
    id: 5,
    name: 'Dr. Anita Patel',
    specialty: 'Dermatologist',
    rating: 4.9,
    reviews: 156,
    education: 'MD (Dermatology)',
    experience: '10 Years Experience',
    languages: 'English, Hindi',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD6Cmxv4WV2hkU_-DYhWtTfzVS98T6O2vIcfpSvgXNX9ubzxWcZB5TGwUPviGT0G6kWqqO25EPMcgLCiATY8zr6ElIjPmYulw4ghFGyUFuBVPcUaqf1Y4GotWpMMB3UEPZBffB8-lLm9DbIRecSRXP3CggGh9emNJMPpZ0r6b_68hJvk1Rdu3t7tQZGvNzaxJ-NkK29cUA8-nAkLqHu6DZPEyR88kuXq2Y1yOecbwS8uMITjdXCaNfe7O6jKo_hpCI3qskDVPJw6Ro5',
    available: 'Available Today'
  },
  {
    id: 6,
    name: 'Dr. Robert Lang',
    specialty: 'Endocrinologist',
    rating: 4.6,
    reviews: 64,
    education: 'MD, PhD (Endo)',
    experience: '18 Years Experience',
    languages: 'English, German',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJPzTBf5dUClOI0gmRImxw14OruJVIVIhJzkd-3mR2IhK5keH0ex_2TZURxsF3gqxrn-8WPSkCagjzQLwpd_92T1zB0dIAnPZkt0KzBkkfDWkefNUB9NGSFkRpw_szH22UHZ34_5AjcFi48RXXKyqT9CCw6RHhKwISb8wypKGyBLaLzopVf5tKY2K3oqBN_PxTnsf-hyB7Q97ITjZXJ6PWRtc4-NKYD0rjZml8XZRoXiAzd5_dypJbnu94gDiymS3KaJp4BjQGnQP3',
    available: null
  },
  {
    id: 7,
    name: 'Dr. Lisa Wang',
    specialty: 'Psychiatrist',
    rating: 4.9,
    reviews: 110,
    education: 'MD (Psychiatry)',
    experience: '14 Years Experience',
    languages: 'English, Mandarin',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAdhVVj9prxXTrONF8Zf-GAiPweeP45CLP5Fwl6LY-gCpHg3R3svGb0HtitmdpdV72XNlEnAGMvP97I0RqcfjzCFYY22KwYMuB4dZiSc089KF5yNrZr8EBXX5N-wHaPQARZBmaaTrGAZ479VMxQUIEW57IgSKEnT1hVOXwLxfPN670l-_TUS2bC7RBkC9j5QWBmaUJzL3vVVOS2nz37YIx7kuyKmyJ7mBUCDrXz-HAcApLbHbpGKwUBwSNTR6vTOHw8XxAdeVyHfyu8',
    available: 'Video Consult Only'
  },
  {
    id: 8,
    name: 'Dr. David Cohen',
    specialty: 'General Physician',
    rating: 4.5,
    reviews: 215,
    education: 'MD (Internal Medicine)',
    experience: '25+ Years Experience',
    languages: 'English, Hebrew',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxM2tH9hIKEJ9hj1WnH-wexn3d4y0TjHHC1u8uuf4yHtF_rpHciBAGtolVvVazydUtpM-zqtUP_miGMdwDlu6as26VULjlcHRrsKg6mpH8YKx25w5I3s9E2mV7Cv_XLd9oX6dd2zu90fbfuSKUHY1ri9-z1gVqgO6tYimkCxPw1t9iNBzSGHJ5k97Debf6Jh2XHoyuXWo2uNzaAUo1rqMCyenIwhycJi82AeihtCW3RVyvr2tWDXrELayUEVlr205pFnkHulFlcwC9',
    available: null
  }
];

export default function DoctorsPage() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Header Section */}
      <section className="bg-white dark:bg-slate-900 py-12 border-b border-gray-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block py-1 px-3 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-semibold tracking-wider uppercase mb-4">Expert Care</span>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-4">Our Medical Specialists</h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Meet our team of highly qualified doctors and specialists dedicated to providing accurate diagnostics and personalized care.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-gray-100 dark:border-slate-800 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-96">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="text-gray-400" size={18} />
              </div>
              <input 
                type="text"
                className="block w-full pl-10 pr-3 py-2.5 border border-gray-300 dark:border-slate-700 rounded-lg leading-5 bg-white dark:bg-slate-800 text-slate-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 sm:text-sm transition-all"
                placeholder="Search doctors by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <div className="flex gap-3 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 no-scrollbar">
              <select className="block w-full md:w-48 pl-3 pr-10 py-2.5 text-base border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                <option>All Departments</option>
                <option>Cardiology</option>
                <option>Neurology</option>
                <option>Pediatrics</option>
                <option>Dermatology</option>
                <option>Orthopedics</option>
              </select>
              <select className="block w-full md:w-40 pl-3 pr-10 py-2.5 text-base border-gray-300 dark:border-slate-700 focus:outline-none focus:ring-blue-600 focus:border-blue-600 sm:text-sm rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white">
                <option>Availability</option>
                <option>Today</option>
                <option>Tomorrow</option>
                <option>This Week</option>
              </select>
              <button className="hidden md:flex items-center justify-center p-2.5 border border-gray-300 dark:border-slate-700 rounded-lg hover:bg-gray-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400">
                <Filter size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {doctors.map((doctor) => (
              <motion.div 
                key={doctor.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group bg-white dark:bg-slate-900 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-slate-100 dark:border-slate-800 flex flex-col"
              >
                <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-slate-800">
                  <Image 
                    src={doctor.image}
                    alt={doctor.name}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {doctor.available && (
                    <div className="absolute top-3 right-3 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-blue-600 dark:text-blue-400 border border-blue-600/20">
                      {doctor.available}
                    </div>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{doctor.name}</h3>
                      <p className="text-sm font-medium text-teal-600 dark:text-teal-400">{doctor.specialty}</p>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                        <Star size={16} fill="currentColor" />
                        <span>{doctor.rating}</span>
                      </div>
                      <span className="text-xs text-slate-400 dark:text-slate-500">({doctor.reviews}+ reviews)</span>
                    </div>
                  </div>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <School size={18} />
                      <span>{doctor.education}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <ClipboardList size={18} />
                      <span>{doctor.experience}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                      <Languages size={18} />
                      <span>{doctor.languages}</span>
                    </div>
                  </div>
                  <div className="mt-auto pt-4 border-t border-slate-100 dark:border-slate-800 flex gap-2">
                    <button className="flex-1 py-2.5 rounded-lg border border-blue-600 text-blue-600 dark:text-blue-400 font-semibold text-sm hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors">
                      View Profile
                    </button>
                    <button className="flex-1 py-2.5 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 shadow-lg shadow-blue-600/20 transition-all">
                      Book Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex items-center justify-center gap-2">
            <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50">
              <ChevronLeft size={20} />
            </button>
            <button className="flex items-center justify-center size-10 rounded-lg bg-blue-600 text-white font-bold">1</button>
            <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">2</button>
            <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 font-medium">3</button>
            <span className="px-2 text-slate-400 dark:text-slate-600">...</span>
            <button className="flex items-center justify-center size-10 rounded-lg border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
