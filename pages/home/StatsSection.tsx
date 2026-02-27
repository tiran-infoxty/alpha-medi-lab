'use client';

const stats = [
  { value: '1M+',  label: 'Happy Patients'   },
  { value: '200+', label: 'Expert Doctors'   },
  { value: 'NABL', label: 'Certified Labs'   },
  { value: '24/7', label: 'Customer Support' },
];

export default function StatsSection() {
  return (
    <section className="stats-section">
      <div className="stats-inner">
        <div className="stats-grid">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="stat-value">{stat.value}</p>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
