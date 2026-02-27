'use client';
import Link from 'next/link';

const branches = [
  { name: 'Main Branch',  location: 'Dalugama, Kelaniya', phone: '0112 906 949' },
  { name: 'Kiribathgoda', location: 'Kiribathgoda',       phone: '0112 984 661' },
  { name: 'Makola',       location: 'Makola',             phone: '0112 269 949' },
  { name: 'Kadawatha',    location: 'Kadawatha',          phone: '0112 902 420' },
  { name: 'Kohalwila',    location: 'Kohalwila',          phone: '0112 269 858' },
  { name: 'Hunupitiya',   location: 'Hunupitiya',         phone: '0112 983 198' },
];

export default function BranchesSection() {
  return (
    <section className="bg-gray-50 py-16 lg:py-20">
      <div className="px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-gray-900 mb-2">Find Us Near You</h2>
            <p className="text-sm text-gray-500">Visit any of our conveniently located branches for professional testing services.</p>
          </div>
          <Link href="/branches" className="text-sm font-semibold text-blue-600 hover:text-blue-800 no-underline whitespace-nowrap flex items-center gap-1 shrink-0">
            View All Branches
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {branches.map((b) => (
            <div key={b.name} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-500 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 mb-1">{b.name}</h3>
                <p className="text-xs text-gray-500 flex items-center gap-1 mb-0.5">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"/></svg>
                  {b.location}
                </p>
                <p className="text-xs text-gray-500 flex items-center gap-1">
                  <svg className="w-3.5 h-3.5 text-gray-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"/></svg>
                  {b.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
