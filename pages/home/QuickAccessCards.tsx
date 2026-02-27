'use client';

const cards = [
  {
    href: '/contact',
    iconVariant: 'quick-card-icon-blue',
    ctaVariant: 'quick-cta-blue',
    title: 'Download Reports',
    desc: 'Get your test results online instantly with your ID.',
    cta: 'Access Now →',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
      </svg>
    ),
  },
  {
    href: '/contact',
    iconVariant: 'quick-card-icon-green',
    ctaVariant: 'quick-cta-green',
    title: 'Home Collection',
    desc: 'Schedule a safe sample pickup from your home.',
    cta: 'Book Visit →',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    href: '/branches',
    iconVariant: 'quick-card-icon-purple',
    ctaVariant: 'quick-cta-purple',
    title: 'Find a Lab',
    desc: 'Locate the nearest collection center near you.',
    cta: 'Locate Us →',
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

export default function QuickAccessCards() {
  return (
    <section className="quick-section">
      <div className="quick-grid">
        {cards.map((card) => (
          <a key={card.title} href={card.href} className="quick-card">
            <div className={`quick-card-icon ${card.iconVariant}`}>{card.icon}</div>
            <div>
              <h3 className="quick-card-title">{card.title}</h3>
              <p className="quick-card-desc">{card.desc}</p>
            </div>
            <span className={`quick-card-cta ${card.ctaVariant}`}>{card.cta}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
