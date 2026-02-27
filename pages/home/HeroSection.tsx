'use client';
import { useState } from 'react';
import Image from 'next/image';
import PackagePopup from '@/components/PackagePopup';

export default function HeroSection() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <PackagePopup showPopup={showPopup} setShowPopup={setShowPopup} />

      <section className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-100 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
              <span className="text-xs font-semibold text-blue-600 tracking-widest uppercase">Leading Pathology Services</span>
            </div>

            <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Accurate Diagnostics,<br /> <span className="text-blue-600">Compassionate</span> <span className="text-blue-600">Care</span>
            </h1>

            <p className="text-gray-500 relaxed leading-relaxed">
              Experience world-class pathology services delivered with{' '}
              <span className="text-blue-500 font-medium">speed and precision</span>. From routine{' '}
              <span className="text-blue-500 font-medium">blood work</span> to advanced{' '}
              <span className="text-blue-500 font-medium">genetic testing</span>, we are your partners in{' '}
              <span className="text-blue-500 font-medium">health</span>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a href="/contact" className="w-full sm:w-auto text-center px-6 py-3 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-sm no-underline">
                Book Appointment
              </a>
              <button
                onClick={() => setShowPopup(true)}
                className="px-6 py-3 border border-gray-300 hover:border-gray-400 text-gray-700 font-semibold rounded-lg transition-all duration-200 text-sm hover:bg-gray-50 bg-white cursor-pointer"
              >
                View Packages
              </button>
            </div> 
          </div>

          {/* Right */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <div className="relative h-80 lg:h-[420px]">
                <Image
                  src="/assets/images/alphaHeroWeb2.png"
                  alt="Lab professionals"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority
                />
              </div>

              {/* Status bar */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-5 py-3 shadow-lg flex items-center divide-x divide-gray-200">
                <div className="flex-1 flex flex-col gap-0.5 pr-5">
                  <span className="text-[0.62rem] text-gray-400 uppercase tracking-wider font-semibold">Status</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-green-600">Lab Operational</span>
                  </div>
                </div>
                <div className="flex-1 flex flex-col gap-0.5 pl-5">
                  <span className="text-[0.62rem] text-gray-400 uppercase tracking-wider font-semibold">Report TAT</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-4 h-4 text-blue-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-semibold text-blue-600">Avg. 6 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
