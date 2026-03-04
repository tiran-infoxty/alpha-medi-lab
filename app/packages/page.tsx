'use client';

import { CheckCircle2, ShieldCheck, Zap, Heart, Info, ArrowRight, Star } from 'lucide-react';
import { motion } from 'motion/react';

const packages = [
  {
    id: 1,
    name: 'Basic Vital Check',
    tag: 'Essential',
    price: '$45',
    originalPrice: '$80',
    parameters: 42,
    features: ['CBC', 'Blood Sugar', 'Kidney Function', 'Urine Analysis'],
    color: 'emerald',
    popular: false
  },
  {
    id: 2,
    name: 'Comprehensive Gold',
    tag: 'Best Value',
    price: '$89',
    originalPrice: '$160',
    parameters: 78,
    features: ['Includes Basic Vital', 'Lipid Profile', 'Liver Function', 'Thyroid Profile', 'Vitamin D & B12'],
    color: 'blue',
    popular: true
  },
  {
    id: 3,
    name: 'Executive Platinum',
    tag: 'Full Body',
    price: '$149',
    originalPrice: '$280',
    parameters: 110,
    features: ['Includes Gold Package', 'Cardiac Markers', 'Cancer Markers (PSA/CA-125)', 'Iron Profile', 'Electrolytes'],
    color: 'purple',
    popular: false
  }
];

const comparisonFeatures = [
  { name: 'Complete Hemogram (CBC)', basic: true, gold: true, platinum: true },
  { name: 'Diabetes (HbA1c + Sugar)', basic: true, gold: true, platinum: true },
  { name: 'Kidney Function (KFT)', basic: true, gold: true, platinum: true },
  { name: 'Liver Function (LFT)', basic: false, gold: true, platinum: true },
  { name: 'Lipid Profile (Heart)', basic: false, gold: true, platinum: true },
  { name: 'Thyroid Profile (T3/T4/TSH)', basic: false, gold: true, platinum: true },
  { name: 'Vitamin Profile (D & B12)', basic: false, gold: true, platinum: true },
  { name: 'Cardiac Risk Markers', basic: false, gold: false, platinum: true },
  { name: 'Cancer Screening Markers', basic: false, gold: false, platinum: true },
  { name: 'Iron & Electrolytes', basic: false, gold: false, platinum: true },
];

export default function PackagesPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-slate-50 dark:bg-slate-950">
      {/* Hero */}
      <section className="bg-white dark:bg-slate-900 py-20 border-b border-slate-100 dark:border-slate-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
              <ShieldCheck size={14} />
              Preventive Healthcare
            </span>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-6 leading-tight">
              Health Packages for <br />
              <span className="text-blue-600 dark:text-blue-400">Every Lifestyle</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
              Early detection saves lives. Choose from our curated health checkup packages designed by medical experts to give you a complete picture of your health.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <Zap className="text-yellow-500" size={18} />
                NABL Accredited
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <Heart className="text-rose-500" size={18} />
                Home Collection
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-300">
                <ShieldCheck className="text-blue-600 dark:text-blue-400" size={18} />
                Accurate Results
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`relative flex flex-col bg-white dark:bg-slate-900 rounded-3xl overflow-hidden border-2 transition-all duration-500 ${
                  pkg.popular ? 'border-blue-600 shadow-2xl scale-105 z-10' : 'border-slate-100 dark:border-slate-800 shadow-sm hover:shadow-xl'
                }`}
              >
                {pkg.popular && (
                  <div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-bl-xl tracking-widest uppercase">
                    Most Popular
                  </div>
                )}
                <div className="p-8 flex-1 flex flex-col">
                  <span className={`text-xs font-black uppercase tracking-widest mb-2 ${
                    pkg.color === 'emerald' ? 'text-emerald-600' : pkg.color === 'blue' ? 'text-blue-600' : 'text-purple-600'
                  }`}>
                    {pkg.tag}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-4">{pkg.name}</h3>
                  <div className="flex items-baseline gap-2 mb-6">
                    <span className="text-4xl font-black text-slate-900 dark:text-white">{pkg.price}</span>
                    <span className="text-slate-400 line-through font-bold">{pkg.originalPrice}</span>
                    <span className="text-emerald-600 text-xs font-bold bg-emerald-50 dark:bg-emerald-900/20 px-2 py-0.5 rounded">Save 50%</span>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-8 p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                    <div className="size-8 rounded-lg bg-white dark:bg-slate-700 flex items-center justify-center text-slate-900 dark:text-white font-bold shadow-sm">
                      {pkg.parameters}
                    </div>
                    <span className="text-sm font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wide">Test Parameters</span>
                  </div>

                  <ul className="space-y-4 mb-10 flex-1">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                        <CheckCircle2 className={`shrink-0 ${
                          pkg.color === 'emerald' ? 'text-emerald-500' : pkg.color === 'blue' ? 'text-blue-500' : 'text-purple-500'
                        }`} size={18} />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className={`w-full py-4 rounded-xl font-black text-sm transition-all shadow-lg ${
                    pkg.popular 
                    ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-600/20' 
                    : 'bg-slate-900 dark:bg-slate-800 text-white hover:bg-slate-800 dark:hover:bg-slate-700'
                  }`}>
                    Book Now
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-white dark:bg-slate-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Compare Packages</h2>
            <p className="text-slate-500 dark:text-slate-400">Find the perfect balance of depth and value for your health needs.</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-slate-100 dark:border-slate-800">
                  <th className="py-6 px-4 text-sm font-black text-slate-400 uppercase tracking-widest">Feature / Test</th>
                  <th className="py-6 px-4 text-center text-slate-900 dark:text-white font-bold">Basic</th>
                  <th className="py-6 px-4 text-center text-blue-600 dark:text-blue-400 font-black bg-blue-50/50 dark:bg-blue-900/10 rounded-t-2xl">Gold</th>
                  <th className="py-6 px-4 text-center text-slate-900 dark:text-white font-bold">Platinum</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50 dark:divide-slate-800">
                {comparisonFeatures.map((feature, i) => (
                  <tr key={i} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors">
                    <td className="py-5 px-4 text-sm font-bold text-slate-700 dark:text-slate-300">{feature.name}</td>
                    <td className="py-5 px-4 text-center">
                      {feature.basic ? <CheckCircle2 className="mx-auto text-emerald-500" size={20} /> : <span className="text-slate-200 dark:text-slate-800">—</span>}
                    </td>
                    <td className="py-5 px-4 text-center bg-blue-50/50 dark:bg-blue-900/10">
                      {feature.gold ? <CheckCircle2 className="mx-auto text-blue-600 dark:text-blue-400" size={20} /> : <span className="text-slate-200 dark:text-slate-800">—</span>}
                    </td>
                    <td className="py-5 px-4 text-center">
                      {feature.platinum ? <CheckCircle2 className="mx-auto text-purple-500" size={20} /> : <span className="text-slate-200 dark:text-slate-800">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ / Info */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">Why choose our health packages?</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                    <Star size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Expert Consultation</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Free report consultation with our senior doctors for all Gold and Platinum packages.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Fastest Turnaround</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Digital reports delivered within 24 hours of sample collection, guaranteed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="size-12 rounded-2xl bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0">
                    <Info size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">Smart Reports</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Easy-to-understand visual reports that explain your health trends over time.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-slate-900 dark:bg-slate-900 rounded-3xl p-10 text-white">
              <h3 className="text-2xl font-black mb-6">Ready to start your health journey?</h3>
              <p className="text-slate-400 mb-8">Book a home collection today and get an additional 10% off on your first booking.</p>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="font-bold">Home Collection Fee</span>
                  <span className="text-emerald-400 font-black">FREE</span>
                </div>
                <div className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/10">
                  <span className="font-bold">Report Consultation</span>
                  <span className="text-emerald-400 font-black">INCLUDED</span>
                </div>
              </div>
              <button className="w-full mt-8 py-4 bg-blue-600 rounded-xl font-black hover:bg-blue-700 transition-all flex items-center justify-center gap-2">
                Book Home Collection <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
