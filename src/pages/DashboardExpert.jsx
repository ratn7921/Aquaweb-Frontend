

// import React from 'react';
// import { Link } from 'react-router-dom';
// import { motion } from 'framer-motion';

// export default function DashboardExpert() {
//   const user = JSON.parse(localStorage.getItem('user'));

//   const cards = [
//     { to: '/report-sighting', icon: 'M9 12h6m-6 4h6m2 4H7a2 2 0 01-2-2V6a2 2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z', title: 'Report Sighting', gradient: 'from-green-500 to-emerald-400' },
//     { to: '/report-incident', icon: 'M10.29 3.86l-6.2 10.77A1 1 0 005 16h14a1 1 0 00.87-1.53L13.71 3.86a1 1 0 00-1.72 0z M12 9v4m0 4h.01', title: 'Report Incident', gradient: 'from-red-500 to-rose-400' },
//     { to: '/trip-history', icon: 'M9 20l-5-2.5V5.5L9 8l5-2.5 5 2.5V17.5l-5-2.5L9 20z', title: 'View Trips', gradient: 'from-blue-500 to-sky-400' },
//     { to: '/species', icon: 'M8 2.5a2 2 0 012-2h4a2 2 0 012 2v10.334a2 2 0 01-.585 1.414l-3.414 3.414a2 2 0 01-2.828 0l-3.414-3.414A2 2 0 018 12.834V2.5z', title: 'Species Catalog', gradient: 'from-yellow-400 to-orange-300' },
//   ];

//   return (
//     <div className="min-h-screen p-6 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white">
//       <div className="max-w-7xl mx-auto">
//         <motion.img
//           src="/assets/dashboard-expert.jpg"
//           alt="Expert Hero"
//           className="w-full h-60 object-cover rounded-3xl shadow-2xl mb-8"
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         />

//         <motion.h2
//           className="text-4xl lg:text-5xl font-extrabold mb-4 drop-shadow-lg"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.2 }}
//         >
//           Welcome, <span className="text-cyan-300">{user?.name || 'Expert'}</span>
//         </motion.h2>

//         <motion.p
//           className="text-cyan-100 text-lg mb-12 max-w-3xl leading-relaxed"
//           initial={{ x: -50, opacity: 0 }}
//           animate={{ x: 0, opacity: 1 }}
//           transition={{ delay: 0.3 }}
//         >
//           Dive into your dashboard to manage sightings, incidents, trips, and explore species data seamlessly.
//         </motion.p>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {cards.map((card, idx) => (
//             <motion.div
//               key={card.to}
//               whileHover={{ scale: 1.03 }}
//               whileTap={{ scale: 0.97 }}
//               transition={{ type: 'spring', stiffness: 280 }}
//             >
//               <Link
//                 to={card.to}
//                 className={`relative overflow-hidden rounded-2xl p-6 bg-gradient-to-br ${card.gradient} shadow-xl flex flex-col items-center justify-center space-y-4`}
//               >
//                 {/* Solid Circle Background */}
//                 <div className="absolute inset-0 bg-white/10 rounded-2xl" />

//                 {/* Icon Container */}
//                 <div className="relative bg-white/20 rounded-full w-14 h-14 flex items-center justify-center">
//                   <svg
//                     className="w-7 h-7 text-white"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     viewBox="0 0 24 24"
//                   >
//                     {card.icon.split(' ').map((d, i) => (
//                       <path key={i} strokeLinecap="round" strokeLinejoin="round" d={d} />
//                     ))}
//                   </svg>
//                 </div>

//                 {/* Title */}
//                 <div className="relative font-semibold text-lg text-white text-center">
//                   {card.title}
//                 </div>
//               </Link>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }



import React from 'react';

export default function DashboardExpert() {
  // Using state instead of localStorage for demo purposes
  const [user] = React.useState({ name: 'Expert' });

  const cards = [
    { 
      to: '/report-sighting', 
      icon: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z M15 12a3 3 0 11-6 0 3 3 0 016 0z', 
      title: 'Report Sighting', 
      color: 'from-green-400/80 to-emerald-500/80',
      bgColor: 'bg-green-500/10',
      accentColor: 'text-green-400'
    },
    { 
      to: '/report-incident', 
      icon: 'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z', 
      title: 'Report Incident', 
      color: 'from-red-400/80 to-rose-500/80',
      bgColor: 'bg-red-500/10',
      accentColor: 'text-red-400'
    },
    { 
      to: '/trip-history', 
      icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z', 
      title: 'View Trips', 
      color: 'from-blue-400/80 to-sky-500/80',
      bgColor: 'bg-blue-500/10',
      accentColor: 'text-blue-400'
    },
    { 
      to: '/species', 
      icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z', 
      title: 'Species Catalog', 
      color: 'from-amber-400/80 to-orange-500/80',
      bgColor: 'bg-amber-500/10',
      accentColor: 'text-amber-400'
    },
  ];

  const handleCardClick = (to) => {
    console.log(`Navigating to: ${to}`);
    // In a real app, you would handle navigation here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* iOS 26 Dynamic Background Elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>
      
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        {/* Hero Section with iOS 26 Glassmorphism */}
        <div className="relative mb-12 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl transform transition-all duration-700 hover:scale-[1.01]">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative p-8 lg:p-12">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-lg">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-white mb-2">
                  Hello, <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">{user?.name || 'Expert'}</span>
                </h1>
                <p className="text-white/70 text-lg">Ready to explore marine data</p>
              </div>
            </div>
            
            <p className="text-white/60 text-base leading-relaxed max-w-2xl">
              Dive into your dashboard to manage sightings, incidents, trips, and explore species data with our advanced iOS 26 interface.
            </p>
          </div>
        </div>

        {/* Cards Grid with iOS 26 Design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, idx) => (
            <div
              key={card.to}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:-translate-y-2"
              onClick={() => handleCardClick(card.to)}
            >
              <div className="block relative overflow-hidden rounded-2xl backdrop-blur-xl bg-white/10 border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                
                {/* Background Pattern */}
                <div className={`absolute inset-0 ${card.bgColor} opacity-50`}></div>
                
                {/* Content */}
                <div className="relative p-8 flex flex-col items-center space-y-4">
                  {/* Icon Container with iOS 26 Style */}
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:bg-white/30">
                      <svg
                        className={`w-8 h-8 ${card.accentColor} group-hover:text-white transition-colors duration-300`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d={card.icon} />
                      </svg>
                    </div>
                    
                    {/* Glow Effect */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${card.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`}></div>
                  </div>

                  {/* Title */}
                  <div className="text-center">
                    <h3 className="font-semibold text-lg text-white group-hover:text-white transition-colors duration-300">
                      {card.title}
                    </h3>
                    <div className="w-0 group-hover:w-full h-0.5 bg-white/30 transition-all duration-300 mt-2 mx-auto"></div>
                  </div>
                </div>

                {/* Subtle Border Animation */}
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-colors duration-300"></div>
                
                {/* iOS 26 Style Ripple Effect */}
                <div className="absolute inset-0 rounded-2xl bg-white/0 group-active:bg-white/10 transition-colors duration-100"></div>
              </div>
            </div>
          ))}
        </div>

        {/* iOS 26 Style Footer */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-white/60 text-sm">All systems operational</span>
          </div>
        </div>

        {/* Additional iOS 26 Elements */}
        <div className="mt-8 flex justify-center space-x-4">
          <div className="w-12 h-1 bg-white/20 rounded-full"></div>
          <div className="w-12 h-1 bg-white/40 rounded-full"></div>
          <div className="w-12 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>

      {/* Floating iOS 26 Style Elements */}
      <div className="fixed top-10 right-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="fixed bottom-20 left-10 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="fixed top-1/2 left-10 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{animationDelay: '2s'}}></div>
    </div>
  );
}