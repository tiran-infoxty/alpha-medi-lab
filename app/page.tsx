'use client';

import Image from 'next/image';
import Link from 'next/link';
import { 
  Download, 
  Home, 
  MapPin, 
  CheckCircle2, 
  Timer, 
  ArrowRight, 
  Microscope, 
  Droplets, 
  Activity, 
  Heart,
  FileUp,
  PhoneCall
} from 'lucide-react';
import { motion } from 'motion/react';

// --- DATA ARRAYS (Keeps your JSX clean!) ---

const quickActionsData = [
  {
    title: "Download Reports",
    desc: "Get your test results online instantly with your ID.",
    linkText: "Access Now",
    icon: Download,
    wrapperHover: "hover:border-blue-600/30",
    iconColors: "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 group-hover:bg-blue-600 group-hover:text-white",
    linkColors: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
  },
  {
    title: "Home Collection",
    desc: "Schedule a safe sample pickup from your home.",
    linkText: "Book Visit",
    icon: Home,
    wrapperHover: "hover:border-teal-600/30",
    iconColors: "bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 group-hover:bg-teal-600 group-hover:text-white",
    linkColors: "text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300"
  },
  {
    title: "Find a Lab",
    desc: "Locate the nearest collection center near you.",
    linkText: "Locate Us",
    icon: MapPin,
    wrapperHover: "hover:border-purple-600/30",
    iconColors: "bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 group-hover:bg-purple-600 group-hover:text-white",
    linkColors: "text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300"
  }
];

const statsData = [
  { value: "1M+", label: "Happy Patients" },
  { value: "200+", label: "Expert Doctors" },
  { value: "NABL", label: "Certified Labs" },
  { value: "24/7", label: "Customer Support" }
];

const servicesData = [
  { title: "Laboratory Testing", desc: "Comprehensive range of blood tests, urine analysis, and diagnostic tests with accurate results.", icon: Microscope, colorClasses: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  { title: "Doctor Channeling", desc: "Book appointments with experienced doctors across multiple specialties at our main branch.", icon: Droplets, colorClasses: "bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
  { title: "Sample Collection", desc: "Home sample collection service available for your convenience. Call us to schedule.", icon: Activity, colorClasses: "bg-rose-100 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400" },
  { title: "Emergency Testing", desc: "24/7 emergency testing services for urgent medical situations at our main branch.", icon: Heart, colorClasses: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400" }
];

const departmentsData = [
  { title: "Main Branch", desc: "Advanced analysis of microorganisms to detect infectious diseases.", icon: Microscope, colorClasses: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400" },
  { title: "Kiribathgoda", desc: "Comprehensive blood tests including CBC, clotting factors, and more.", icon: Droplets, colorClasses: "bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400" },
  { title: "Makola", desc: "High-resolution imaging services including X-rays and Ultrasounds.", icon: Activity, colorClasses: "bg-rose-100 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400" },
  { title: "Kadawatha", desc: "Specialized heart health monitoring and lipid profile assessments.", icon: Heart, colorClasses: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400" },
  { title: "Kohalwila", desc: "Specialized heart health monitoring and lipid profile assessments.", icon: Heart, colorClasses: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400" },
  { title: "Hunupitiya", desc: "Specialized heart health monitoring and lipid profile assessments.", icon: Heart, colorClasses: "bg-indigo-100 dark:bg-indigo-900/20 text-indigo-500 dark:text-indigo-400" }

];

const packagesData = [
  {
    title: "Basic Wellness",
    subtitle: "Ideal for young adults",
    price: "49",
    oldPrice: "99",
    features: ["Complete Hemogram", "Diabetes Screening (HbA1c)", "Liver Function Test", "45+ Parameters"],
    isPopular: false,
    topBar: "bg-teal-600",
    textHighlight: "text-teal-600 dark:text-teal-400",
    buttonStyle: "border-2 border-teal-600 text-teal-600 dark:text-teal-400 hover:bg-teal-600 hover:text-white"
  },
  {
    title: "Comprehensive Gold",
    subtitle: "Total body analysis",
    price: "99",
    oldPrice: "199",
    features: ["Includes Basic Wellness", "Thyroid Profile (T3, T4, TSH)", "Lipid Profile", "80+ Parameters"],
    isPopular: true,
    topBar: "", 
    textHighlight: "text-blue-600 dark:text-blue-400",
    buttonStyle: "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/20"
  },
  {
    title: "Senior Care",
    subtitle: "Designed for 60+ age",
    price: "79",
    oldPrice: "149",
    features: ["Diabetes & Cardiac Risk", "Bone Health (Calcium)", "Arthritis Screening", "60+ Parameters"],
    isPopular: false,
    topBar: "bg-purple-500",
    textHighlight: "text-purple-500 dark:text-purple-400",
    buttonStyle: "border-2 border-purple-500 text-purple-500 dark:text-purple-400 hover:bg-purple-500 hover:text-white"
  }
];

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-white dark:bg-slate-950 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-6 max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 w-fit">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                </span>
                <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">Leading Pathology Services</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                Your Health, <br />
                <span className="text-blue-600 dark:text-blue-400">Our Priority</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
                Accurate diagnostics, cutting-edge technology, and compassionate care for your peace of mind. Experience excellence in medical testing.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a href="/services">
                  <button className="flex items-center justify-center rounded-lg bg-blue-600 px-6 py-3.5 text-base font-bold text-white shadow-lg shadow-blue-600/25 hover:bg-blue-700 hover:-translate-y-0.5 transition-all">
                    Explore Services
                  </button> 
                </a>
                <a href="/packages">
                  <button className="flex items-center justify-center rounded-lg bg-slate-100 dark:bg-slate-800 px-6 py-3.5 text-base font-bold text-slate-900 dark:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-all">
                    View Packages
                  </button>
                </a>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiQR7t9SHXmv0koqf7OKazDJei0ZB6FhI_v8bKQj8uklGc7HdStJmmvrln0X-6Fc8eDmwCi4DIfGY6bSueClzSTvZNXI10_umhf0tvCrbvTe1oDOML5jssV0GagRWckKF4TKGWpCu0PKpYX5LR7aleeIGEsYmXWU7XdawWbsA1xMWY27sabXa8OIz8XJlxxzcEw-S0CyJ8xw43VHoOLFsLKlrc9QCx27P6Y6ZQp9rONV4aq35bIqlvXWUWfEYHEkGBch8WTnsuBdcz"
                alt="Modern laboratory equipment"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-6 left-6 right-6 z-20 hidden sm:flex items-center gap-4 p-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm rounded-xl border border-white/20 dark:border-slate-800 shadow-lg">
                <div className="flex-1">
                  <p className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="text-green-500" size={18} />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Lab Operational</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200 dark:bg-slate-700"></div>
                <div className="flex-1">
                  <p className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider mb-1">Report TAT</p>
                  <div className="flex items-center gap-2">
                    <Timer className="text-blue-600 dark:text-blue-400" size={18} />
                    <span className="text-sm font-bold text-slate-900 dark:text-white">Avg. 6 Hours</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="relative z-20 -mt-8 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {quickActionsData.map((action, i) => {
              const Icon = action.icon;
              return (
                <div key={i} className={`group bg-white dark:bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-100 dark:border-slate-800 transition-all hover:-translate-y-1 ${action.wrapperHover}`}>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg transition-colors ${action.iconColors}`}>
                      <Icon size={32} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{action.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 mb-3">{action.desc}</p>
                      <a href="#" className={`inline-flex items-center text-sm font-semibold ${action.linkColors}`}>
                        {action.linkText} <ArrowRight size={14} className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Trust Stats */}
      <section className="py-16 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-y border-slate-100 dark:border-slate-800 py-10">
            {statsData.map((stat, i) => (
              <div key={i} className="text-center">
                <p className="text-4xl font-black text-slate-900 dark:text-white mb-1">{stat.value}</p>
                <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Our Services</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">Comprehensive medical testing and healthcare services delivered with precision and care.</p>
            </div>
            <Link href="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center">
              View All Services <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {servicesData.map((service, i) => {
              const Icon = service.icon;
              return (
                <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all cursor-pointer">
                  <div className={`size-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${service.colorClasses}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{service.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{service.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

       {/* Branches / Departments */}
      <section className="py-16 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Find Us Near You</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-xl">Visit any of our conveniently located branches for professional medical testing services</p>
            </div>
            <Link href="/services" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline inline-flex items-center">
              View All Branches <ArrowRight size={18} className="ml-1" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {departmentsData.map((dept, i) => {
              const Icon = dept.icon;
              return (
                <div key={i} className="group bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all cursor-pointer">
                  {/* <div className={`size-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform ${dept.colorClasses}`}>
                    <Icon size={24} />
                  </div> */}
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{dept.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">{dept.desc}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Health Packages */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-teal-600 dark:text-teal-400 font-bold text-sm tracking-wider uppercase">Preventive Care</span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mt-3 mb-6">Popular Health Packages</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Affordable full-body checkups designed for every lifestyle and age group.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packagesData.map((pkg, i) => (
              <div 
                key={i} 
                className={`flex flex-col bg-white dark:bg-slate-900 overflow-hidden transition-all duration-300 ${
                  pkg.isPopular 
                    ? "relative border-2 border-blue-600 shadow-2xl scale-105 z-10 rounded-2xl" 
                    : "rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl"
                }`}
              >
                {pkg.isPopular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                    MOST POPULAR
                  </div>
                )}
                {!pkg.isPopular && <div className={`h-3 ${pkg.topBar}`}></div>}
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mb-6">{pkg.subtitle}</p>
                  <div className="flex items-baseline gap-1 mb-6">
                    <span className={`text-3xl font-black ${pkg.isPopular ? "text-blue-600 dark:text-blue-400" : "text-slate-900 dark:text-white"}`}>
                      ${pkg.price}
                    </span>
                    <span className="text-slate-400 line-through text-sm">${pkg.oldPrice}</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-1">
                    {pkg.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className={`${pkg.textHighlight} shrink-0`} size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 rounded-lg font-bold transition-colors ${pkg.buttonStyle}`}>
                    {pkg.isPopular ? "Explore Packages" : "Add to Cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 bg-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm border border-white/10">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-4">Need a specialized test?</h2>
              <p className="text-blue-100 text-lg mb-8">Upload your prescription and our team will assist you with booking the right tests at the best prices.</p>
              <div className="flex flex-wrap gap-4">
                <button className="flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors">
                  <FileUp size={20} />
                  Upload Prescription
                </button>
                <a href="tel:+94718227704" className="flex items-center gap-2 border border-white/30 text-white px-6 py-3 rounded-lg font-bold hover:bg-white/10 transition-colors">
                  <PhoneCall size={20} />
                  Call for Support
                </a>
              
              </div>
            </div>
            <div className="hidden md:block">
              <Activity size={180} className="text-white/20 rotate-12" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}