

import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function DashboardExpert() {
  const user = JSON.parse(localStorage.getItem('user'));

  const cards = [
    { to: '/report-sighting', icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z', title: 'Report Sighting', gradient: 'from-green-500 to-emerald-400' },
    { to: '/report-incident', icon: 'M10.29 3.86l-6.2 10.77A1 1 0 005 16h14a1 1 0 00.87-1.53L13.71 3.86a1 1 0 00-1.72 0z M12 9v4m0 4h.01', title: 'Report Incident', gradient: 'from-red-500 to-rose-400' },
    { to: '/trip-history', icon: 'M9 20l-5-2.5V5.5L9 8l5-2.5 5 2.5V17.5l-5-2.5L9 20z', title: 'View Trips', gradient: 'from-blue-500 to-sky-400' },
    { to: '/species', icon: 'M8 2.5a2 2 0 012-2h4a2 2 0 012 2v10.334a2 2 0 01-.585 1.414l-3.414 3.414a2 2 0 01-2.828 0l-3.414-3.414A2 2 0 018 12.834V2.5z', title: 'Species Catalog', gradient: 'from-yellow-400 to-orange-300' },
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.img
          src="/assets/dashboard-expert.jpg"
          alt="Expert Hero"
          className="w-full h-60 object-cover rounded-3xl shadow-2xl mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        />

        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Welcome, <span className="text-cyan-300">{user?.name || 'Expert'}</span>
        </motion.h2>

        <motion.p
          className="text-cyan-100 text-lg mb-12 max-w-3xl leading-relaxed"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Dive into your dashboard to manage sightings, incidents, trips, and explore species data seamlessly.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.to}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: 'spring', stiffness: 280 }}
            >
              <Link
                to={card.to}
                className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${card.gradient} shadow-xl flex flex-col items-center justify-center space-y-4`}
              >
                {/* Solid Circle Background */}
                <div className="absolute inset-0 bg-white/10 rounded-2xl" />

                {/* Icon Container */}
                <div className="relative bg-white/20 rounded-full w-14 h-14 flex items-center justify-center">
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    {card.icon.split(' ').map((d, i) => (
                      <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
                    ))}
                  </svg>
                </div>

                {/* Title */}
                <div className="relative font-semibold text-lg text-white text-center">
                  {card.title}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}



// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// const MotionLink = motion(Link);

// export default function DashboardExpert() {
//   const user = JSON.parse(localStorage.getItem('user')) || {};

//   const cards = [
//     { to: '/report-sighting', icon: '👁️', label: 'Report Sighting', color: 'from-green-400 to-green-600' },
//     { to: '/report-incident', icon: '🚨', label: 'Report Incident', color: 'from-red-400 to-red-600' },
//     { to: '/trip-history', icon: '🧭', label: 'Trip History', color: 'from-blue-400 to-blue-600' },
//     { to: '/species', icon: '🐠', label: 'Species Catalog', color: 'from-yellow-400 to-yellow-600' },
//   ];

//   return (
//     <>
//       <motion.div
//         className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-900 p-8"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//       >
//         <h1 className="text-4xl text-white font-bold mb-4">Welcome, {user.name || 'Expert'}</h1>
//         <p className="text-cyan-200 mb-8">Manage and explore marine data with ease.</p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cards.map((c) => (
//             <MotionLink
//               to={c.to}
//               key={c.to}
//               whileHover={{ scale: 1.05 }}
//               className={`relative rounded-xl p-6 text-white bg-gradient-to-br ${c.color} shadow-2xl flex flex-col items-center`}
//             >
//               <span className="text-5xl mb-2">{c.icon}</span>
//               <span className="text-lg font-semibold">{c.label}</span>
//             </MotionLink>
//           ))}
//         </div>
//       </motion.div>
//     </>
//   );
// }
