

// src/pages/DashboardExpert.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function DashboardExpert() {
  const [user] = React.useState({ name: 'Expert' });
  const navigate = useNavigate();

  const cards = [
    {
      to: '/verify-reports',
      icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z',
      title: 'Monitor Reports',
      desc: 'Review and validate sightings and incidents submitted by travellers.',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      to: '/marine-crimes',
      icon: 'M12 9v4m0 4h.01 M10.29 3.86l-6.2 10.77A1 1 0 005 16h14a1 1 0 00.87-1.53L13.71 3.86a1 1 0 00-1.72 0z',
      title: 'Use Legal Authority',
      desc: 'Coordinate with authorities on illegal activities like whale hunting.',
      color: 'from-red-500 to-rose-500',
    },
    {
      to: '/education',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422M12 14L5.84 10.578M12 14v7',
      title: 'Educate Tourists',
      desc: 'Provide best practices and legal guidance to tourists and operators.',
      color: 'from-green-500 to-emerald-500',
    },
    {
      to: '/data-research',
      icon: 'M11 5H6a2 2 0 00-2 2v11h16V7a2 2 0 00-2-2h-5v3h-2V5z',
      title: 'Contribute Research',
      desc: 'Leverage AquaWeb data for marine studies and planning.',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      to: '/campaigns',
      icon: 'M8 9l3 3-3 3m5-6l3 3-3 3M5 3a1 1 0 00-1 1v16a1 1 0 001 1h14a1 1 0 001-1V4a1 1 0 00-1-1H5z',
      title: 'Lead Campaigns',
      desc: 'Launch awareness programs with NGOs & the public.',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      to: '/compliance',
      icon: 'M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z',
      title: 'Ensure Compliance',
      desc: 'Promote ethical practices and enforce marine protection laws.',
      color: 'from-sky-500 to-blue-600',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyan-400/10 via-transparent to-transparent"></div>

      {/* Page Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Welcome Header */}
        <header className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-3">
            Welcome, <span className="text-cyan-400">{user?.name}</span>
          </h1>
          <p className="text-white/70 text-lg">
            👨‍🔬 <strong>Expert's Guide:</strong> Legal Powers & Platform Benefits
          </p>
          <ul className="mt-4 text-white/60 text-sm space-y-2 list-disc list-inside">
            <li>🧐 Monitor and verify reports from the field</li>
            <li>⚖️ Use legal authority to address marine crimes</li>
            <li>🎓 Educate tourists on conservation practices</li>
            <li>📊 Contribute research and support planning</li>
            <li>🌍 Collaborate with NGOs for awareness</li>
            <li>🛡️ Enforce marine law and ethical behavior</li>
          </ul>
        </header>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card) => (
            <div
              key={card.to}
              onClick={() => navigate(card.to)}
              className="group cursor-pointer p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 hover:shadow-2xl transition-all duration-300"
            >
              {/* Icon */}
              <div className={`w-14 h-14 mb-4 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg`}>
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                </svg>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-semibold mb-1">{card.title}</h3>
              <p className="text-white/60 text-sm">{card.desc}</p>
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="mt-20 text-center text-white/50 text-sm">
          🌊 Your actions help protect marine life. <br />
          Use AquaWeb to make every report count.
        </footer>
      </div>
    </div>
  );
}
