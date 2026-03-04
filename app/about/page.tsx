'use client';

import Image from 'next/image';
import { ShieldCheck, Users, Globe, Award, Microscope, Heart, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full min-h-screen bg-white dark:bg-slate-950">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-600 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-6">Our Legacy</span>
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white mb-8 leading-tight">
                Pioneering the Future of <span className="text-blue-600 dark:text-blue-400">Diagnostics</span>
              </h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                Founded in 1995, Alpha Medi Lab has grown from a single collection center to a nationwide network of state-of-the-art laboratories. We are driven by a single mission: to provide accurate, timely, and affordable diagnostics to everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-3xl font-black text-blue-600 dark:text-blue-400 mb-1">28+</p>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Years of Excellence</p>
                </div>
                <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800">
                  <p className="text-3xl font-black text-teal-600 dark:text-teal-400 mb-1">500+</p>
                  <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wide">Lab Locations</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl"
            >
              <Image 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiQR7t9SHXmv0koqf7OKazDJei0ZB6FhI_v8bKQj8uklGc7HdStJmmvrln0X-6Fc8eDmwCi4DIfGY6bSueClzSTvZNXI10_umhf0tvCrbvTe1oDOML5jssV0GagRWckKF4TKGWpCu0PKpYX5LR7aleeIGEsYmXWU7XdawWbsA1xMWY27sabXa8OIz8XJlxxzcEw-S0CyJ8xw43VHoOLFsLKlrc9QCx27P6Y6ZQp9rONV4aq35bIqlvXWUWfEYHEkGBch8WTnsuBdcz"
                alt="Our laboratory"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">The Values That Drive Us</h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">Our core values define who we are and how we serve our patients every single day.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center group">
              <div className="size-20 rounded-3xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <ShieldCheck size={40} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Uncompromising Quality</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">We adhere to the highest international standards of quality and accuracy in every test we perform.</p>
            </div>
            <div className="text-center group">
              <div className="size-20 rounded-3xl bg-teal-50 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400 flex items-center justify-center mx-auto mb-8 group-hover:bg-teal-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <Users size={40} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Patient Centricity</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">Every decision we make is guided by the well-being and comfort of our patients.</p>
            </div>
            <div className="text-center group">
              <div className="size-20 rounded-3xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 flex items-center justify-center mx-auto mb-8 group-hover:bg-purple-600 group-hover:text-white transition-all duration-500 group-hover:rotate-6">
                <Globe size={40} />
              </div>
              <h3 className="text-xl font-black text-slate-900 dark:text-white mb-4">Innovation</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed">We continuously invest in the latest technology to bring advanced diagnostics to your doorstep.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-slate-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <div>
              <p className="text-5xl font-black text-blue-500 mb-2">10M+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tests Performed</p>
            </div>
            <div>
              <p className="text-5xl font-black text-teal-500 mb-2">2M+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Annual Patients</p>
            </div>
            <div>
              <p className="text-5xl font-black text-purple-500 mb-2">150+</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Expert Pathologists</p>
            </div>
            <div>
              <p className="text-5xl font-black text-rose-500 mb-2">99.9%</p>
              <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Accuracy Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-4">Our Leadership</h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">Guided by a team of visionary medical professionals and industry veterans.</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-bold hover:underline">
              View All Team <ArrowRight size={20} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDu6CEAiXTkHbI78Y1GXAf3VCXffN0iK3RZE5PCPwFACRkH6MprC3xTn9N4VNEsQiaHF_3q_jzC77FvSzWTckdZ7h4E00u9vSO1noAXOVx0KYC-SvLjJ1jZQUUSaQV4n1-Q0C0uFak_tw_VFT593AMPXfsp7UC55QYFpbCrXQMan2aqMTQvsiRNG8mkYfS3Y1WbV8wHxnGMaYItVEVMm9z5tAxGcsVYjqSKyArdjdTGvfzNJYnqSoFiFNtwlspfem_n64UK98DvUKhd"
                  alt="Dr. Alexander Reed"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">Dr. Alexander Reed</h4>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Founder & Chairman</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">A pioneer in molecular diagnostics with over 35 years of experience in clinical pathology.</p>
            </div>
            <div className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq3A5gCwWZxigzPTUkcdz2mubtuwbZDUGgaIGgs7M_nbw2jBcub4d289oP8NbAUKzfATb5-BOsajArAQho7WrXQrGbIMAzW9MhdTePWqgbm1SYh3yZoHYMOfmBX0GbIsOrzWLjaUyvwKnQttDwItAXs-RVOScsOFxkaXRF7rK7CFj0mTN5FDiy_UBGLCCXnbz7CCAvvQMT_WSVXq7_IlnxRKb3kFL1LkB_MOIcK9yvqCB9IacdcEIfrYFNiEEYJr_p-BYmJBCRdOVS"
                  alt="Dr. Elena Martinez"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">Dr. Elena Martinez</h4>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">Chief Medical Officer</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Specializes in advanced hematology and leads our quality assurance programs nationwide.</p>
            </div>
            <div className="group">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6">
                <Image 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6Cmxv4WV2hkU_-DYhWtTfzVS98T6O2vIcfpSvgXNX9ubzxWcZB5TGwUPviGT0G6kWqqO25EPMcgLCiATY8zr6ElIjPmYulw4ghFGyUFuBVPcUaqf1Y4GotWpMMB3UEPZBffB8-lLm9DbIRecSRXP3CggGh9emNJMPpZ0r6b_68hJvk1Rdu3t7tQZGvNzaxJ-NkK29cUA8-nAkLqHu6DZPEyR88kuXq2Y1yOecbwS8uMITjdXCaNfe7O6jKo_hpCI3qskDVPJw6Ro5"
                  alt="Sarah Jenkins"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="text-xl font-black text-slate-900 dark:text-white mb-1">Sarah Jenkins</h4>
              <p className="text-blue-600 dark:text-blue-400 font-bold text-sm uppercase tracking-widest mb-4">CEO</p>
              <p className="text-slate-500 dark:text-slate-400 text-sm">Driving our digital transformation and expanding our reach to underserved communities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-24 bg-slate-50 dark:bg-slate-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-black text-slate-900 dark:text-white mb-4">Our Accreditations</h2>
            <p className="text-slate-500 dark:text-slate-400">Recognized by leading international health organizations for our excellence.</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-3">
              <Award size={48} className="text-slate-900 dark:text-white" />
              <span className="text-xl font-black text-slate-900 dark:text-white">NABL</span>
            </div>
            <div className="flex items-center gap-3">
              <ShieldCheck size={48} className="text-slate-900 dark:text-white" />
              <span className="text-xl font-black text-slate-900 dark:text-white">CAP</span>
            </div>
            <div className="flex items-center gap-3">
              <Microscope size={48} className="text-slate-900 dark:text-white" />
              <span className="text-xl font-black text-slate-900 dark:text-white">ISO 15189</span>
            </div>
            <div className="flex items-center gap-3">
              <Heart size={48} className="text-slate-900 dark:text-white" />
              <span className="text-xl font-black text-slate-900 dark:text-white">NABH</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
