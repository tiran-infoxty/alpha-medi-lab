'use client';
import Link from 'next/link';

const services = [
  {
    title: 'Microbiology',
    desc: 'Advanced analysis of microorganisms to detect infectious diseases.',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-500',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15M14.25 3.104c-.251.023-.501.05-.75.082M19.8 15a2.25 2.25 0 01.45 2.311L18 20.25m1.8-5.25H4.2m0 0a2.25 2.25 0 01.45-2.311L9 9.75" />
      </svg>
    ),
  },
  {
    title: 'Hematology',
    desc: 'Comprehensive blood tests including CBC, clotting factors, and more.',
    iconBg: 'bg-teal-50',
    iconColor: 'text-teal-500',
    linkColor: 'text-teal-500',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
      </svg>
    ),
  },
  {
    title: 'Radiology',
    desc: 'High-resolution imaging services including X-rays and Ultrasounds.',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
      </svg>
    ),
  },
  {
    title: 'Cardiology',
    desc: 'Specialized heart health monitoring and lipid profile assessments.',
    iconBg: 'bg-purple-50',
    iconColor: 'text-purple-400',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div className="max-w-lg">
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">Our Services</h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              Comprehensive diagnostic services utilizing state-of-the-art technology for precise results.
            </p>
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-blue-600 hover:text-blue-800 no-underline whitespace-nowrap flex items-center gap-1 shrink-0"
          >
            View All Services
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col gap-4"
            >
              <div className={`w-12 h-12 rounded-xl ${s.iconBg} ${s.iconColor} flex items-center justify-center`}>
                {s.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-900 mb-1">{s.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
