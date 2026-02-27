'use client';
import Link from 'next/link';

const packages = [
  {
    name: 'Basic Wellness',
    tagline: 'Ideal for young adults',
    price: 4900,
    original: 9900,
    accent: 'border-t-4 border-teal-500',
    btnClass: 'border border-teal-500 text-teal-600 hover:bg-teal-50',
    checkColor: 'text-teal-500',
    featured: false,
    tests: ['Complete Hemogram', 'Diabetes Screening (HbA1c)', 'Liver Function Test', '45+ Parameters'],
  },
  {
    name: 'Comprehensive Gold',
    tagline: 'Total body analysis',
    price: 9900,
    original: 19900,
    accent: 'border-t-4 border-blue-600 ring-2 ring-blue-600',
    btnClass: 'bg-blue-700 hover:bg-blue-800 text-white',
    checkColor: 'text-blue-500',
    featured: true,
    badge: 'MOST POPULAR',
    tests: ['Includes Basic Wellness', 'Thyroid Profile (T3, T4, TSH)', 'Lipid Profile', 'Kidney Function Test', 'Vitamin B12 & D', '80+ Parameters'],
  },
  {
    name: 'Senior Care',
    tagline: 'Designed for 60+ age',
    price: 7900,
    original: 14900,
    accent: 'border-t-4 border-purple-500',
    btnClass: 'border border-purple-500 text-purple-600 hover:bg-purple-50',
    checkColor: 'text-purple-400',
    featured: false,
    tests: ['Diabetes & Cardiac Risk', 'Bone Health (Calcium)', 'Arthritis Screening', '60+ Parameters'],
  },
];

const fmt = (n: number) => (n / 100).toFixed(0);

export default function PackagesSection() {
  return (
    <section className="bg-white py-16 lg:py-20">
      <div className="px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-bold tracking-widest uppercase text-teal-500 mb-2">Preventive Care</p>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-3">Popular Health Packages</h2>
          <p className="text-sm text-gray-500 max-w-md mx-auto">Affordable full-body checkups designed for every lifestyle and age group.</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-white rounded-2xl shadow-sm ${pkg.accent} flex flex-col overflow-hidden ${pkg.featured ? 'shadow-xl' : ''}`}
            >
              {pkg.badge && (
                <div className="absolute top-0 right-6 bg-blue-600 text-white text-[0.6rem] font-bold tracking-widest px-3 py-1 rounded-b-lg">
                  {pkg.badge}
                </div>
              )}
              <div className="p-7 flex flex-col gap-5 flex-1">
                <div>
                  <h3 className="text-lg font-extrabold text-gray-900">{pkg.name}</h3>
                  <p className="text-sm text-gray-400 mt-0.5">{pkg.tagline}</p>
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-gray-900">Rs. {fmt(pkg.price)}</span>
                  <span className="text-sm text-gray-400 line-through">Rs. {fmt(pkg.original)}</span>
                </div>
                <ul className="flex flex-col gap-2.5">
                  {pkg.tests.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className={`w-4 h-4 shrink-0 ${pkg.checkColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-auto w-full text-center py-3 px-6 rounded-xl font-semibold text-sm transition-colors duration-200 no-underline ${pkg.btnClass}`}
                >
                  {pkg.featured ? 'Book Now' : 'Add to Cart'}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
