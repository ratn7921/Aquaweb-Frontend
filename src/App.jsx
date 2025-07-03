















// import React, { useState, useEffect } from 'react';
// import bgvideo from './assets/bg-video.mp4';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
// import RoleSelection from './pages/RoleSelection';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import DashboardExpert from './pages/DashboardExpert';
// import DashboardUser from './pages/DashboardUser';
// import ReportSighting from './pages/ReportSighting';
// import ReportIncident from './pages/ReportIncident';
// import Trip from './pages/Trip';
// import Species from './pages/Species';
// import PrivateRoute from './auth/PrivateRoute';
// import Sightings from './pages/Sightings';
// import Profile from './pages/Profile';
// import Footer from './components/Footer';
// import TripHistory from './pages/TripHistory';
// import { useAuth } from './auth/AuthContext';
// import { AnimatePresence, motion } from 'framer-motion';
// import RuleGuideTraveller from './pages/RuleGuideTraveller';
// import RuleGuideExpert from './pages/RuleGuideExpert';
// import Crimes from './pages/Crimes';
// import RoleVerification from './pages/RoleVerification';
// import Analytics from './pages/Analytics';
// import MediaGallery from './pages/MediaGallery';
// import OfflineQueue from './pages/OfflineQueue';
// import BookingTours from './pages/BookingTours';
// import BookingDiving from './pages/BookingDiving';
// import BookingFlights from './pages/BookingFlights';
// import RoleGate from './auth/RoleGate';

// const MainInfo = () => (
//   <section className="max-w-5xl mx-auto my-12 px-4 py-8 bg-white/80 rounded-xl shadow-lg">
//     <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">The Fight Against Whale Hunting</h2>
//     <p className="mb-4 text-gray-700">
//       Whale hunting, also known as whaling, has pushed many whale species to the brink of extinction. Despite international bans, illegal hunting and trafficking still threaten these majestic creatures. 
//       As a traveler or marine expert, your actions matter.
//     </p>
//     <ul className="list-disc pl-6 mb-4 text-gray-700">
//       <li>Report any suspicious or illegal whale hunting activity using AquaWeb's reporting tools.</li>
//       <li>Support responsible whale watching operators who follow ethical guidelines.</li>
//       <li>Educate others about the importance of whale conservation and the dangers of illegal hunting.</li>
//       <li>Participate in citizen science by mapping your whale sightings and sharing data with researchers.</li>
//       <li>Advocate for stronger marine protection laws and enforcement in your region.</li>
//     </ul>
//     <h3 className="text-xl font-semibold text-cyan-700 mb-2">Research & Conservation Efforts</h3>
//     <p className="mb-2 text-gray-700">
//       - According to the International Whaling Commission, global whale populations are still recovering from decades of overhunting.<br/>
//       - Modern tracking and reporting tools, like AquaWeb, empower the public to help monitor and protect whales.<br/>
//       - Marine experts use sighting data to study migration, population health, and the impact of climate change.
//     </p>
//     <p className="text-gray-700">
//       By joining AquaWeb, you become part of a global movement to protect whales and preserve our oceans for future generations.
//     </p>
//   </section>
// );

// const App = () => {
//   const { user } = useAuth();
//   const location = useLocation();
//   const [showCard, setShowCard] = useState(false);
//   const [cardType, setCardType] = useState(null);

//   useEffect(() => {
//     if (location.pathname === '/login' || location.pathname === '/register') {
//       setShowCard(true);
//       setCardType(location.pathname === '/login' ? 'login' : 'register');
//     } else {
//       setShowCard(false);
//       setCardType(null);
//     }
//   }, [location.pathname]);

//   return (
//     <div className="relative min-h-screen flex flex-col">
//       {/* Video Background */}
//       <div className="fixed inset-0 z-[-2] overflow-hidden">
//         <video
//           src={bgvideo}
//           autoPlay
//           muted
//           loop
//           playsInline
//           className="w-full h-full object-cover scale-110 brightness-110 blur-[1px]"
//         />
//       </div>

//       {/* Optional glass overlay for foggy glass feel */}
//       <div className="fixed inset-0 z-[-1] bg-white/10 backdrop-blur-2xl border-t border-white/20" />

//       <Navbar />

//       <AnimatePresence>
//         {!user && !showCard && (
//           <motion.div
//             key="hero"
//             initial={{ opacity: 0, y: 40 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -40 }}
//             transition={{ duration: 0.5 }}
//           >
//             <Hero />
//             <MainInfo />
//           </motion.div>
//         )}

//         {!user && showCard && (
//           <motion.div
//             key="card"
//             initial={{ opacity: 0, scale: 0.8, y: 40 }}
//             animate={{ opacity: 1, scale: 1, y: 0 }}
//             exit={{ opacity: 0, scale: 0.8, y: -40 }}
//             transition={{ duration: 0.5 }}
//             className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur"
//           >
//             <div className="bg-white/90 rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
//               <button
//                 onClick={() => {
//                   setShowCard(false);
//                   setCardType(null);
//                   window.history.pushState({}, '', '/');
//                 }}
//                 className="absolute top-4 right-4 text-cyan-700 font-bold text-2xl hover:text-blue-700"
//                 aria-label="Close"
//               >
//                 ×
//               </button>
//               {cardType === 'login' ? <Login /> : <Register />}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>

//       <main className="flex-1 pt-24 px-2 sm:px-4">
//         <Routes>
//           <Route path="/" element={<RoleSelection />} />
//           <Route path="/login" element={null} />
//           <Route path="/register" element={null} />
//           <Route path="/dashboard-expert" element={<PrivateRoute role="expert"><DashboardExpert /></PrivateRoute>} />
//           <Route path="/dashboard-user" element={<PrivateRoute role="tourist"><DashboardUser /></PrivateRoute>} />
//           <Route path="/trip" element={<PrivateRoute><Trip /></PrivateRoute>} />
//           <Route path="/species" element={<PrivateRoute><Species /></PrivateRoute>} />
//           <Route path="/sightings" element={<PrivateRoute><Sightings /></PrivateRoute>} />
//           <Route path="/report-sighting" element={<PrivateRoute><ReportSighting /></PrivateRoute>} />
//           <Route path="/report-incident" element={<PrivateRoute><ReportIncident /></PrivateRoute>} />
//           <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
//           <Route path="/trip-history" element={<PrivateRoute><TripHistory /></PrivateRoute>} />
//           <Route path="/rule-guide-traveller" element={<RuleGuideTraveller />} />
//           <Route path="/rule-guide-expert" element={<RuleGuideExpert />} />
//           <Route path="/crimes" element={<PrivateRoute role="expert"><Crimes /></PrivateRoute>} />
//           <Route path="/verify-role" element={<RoleVerification />} />
//           <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
//           <Route path="/media" element={<PrivateRoute><MediaGallery /></PrivateRoute>} />
//           <Route path="/offline-queue" element={<PrivateRoute><OfflineQueue /></PrivateRoute>} />
//           <RoleGate allowedRoles={['expert']}>
//   <DashboardExpert />
// </RoleGate>
//           <Route path="*" element={<Navigate to="/" />} />

//                 <Route
//         path="/analytics"
//         element={
//           <PrivateRoute>
//             <Analytics />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/media"
//         element={
//           <PrivateRoute>
//             <MediaGallery />
//           </PrivateRoute>
//         }
//       />
//       <Route
//         path="/offline-queue"
//         element={
//           <PrivateRoute>
//             <OfflineQueue />
//           </PrivateRoute>
//         }
//       />


//   <Route path="/book/tours" element={<BookingTours />} />
//   <Route path="/book/diving" element={<BookingDiving />} />
//   <Route path="/book/flights" element={<BookingFlights />} />

//         </Routes>
//       </main>

//       <Footer />
//     </div>
//   );
// };

// export default App;



import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import bgvideo from './assets/bg-video.mp4';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';

import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import Register from './pages/Register';
import DashboardExpert from './pages/DashboardExpert';
import DashboardUser from './pages/DashboardUser';
import ReportSighting from './pages/ReportSighting';
import ReportIncident from './pages/ReportIncident';
import Trip from './pages/Trip';
import Species from './pages/Species';
import Sightings from './pages/Sightings';
import Profile from './pages/Profile';
import TripHistory from './pages/TripHistory';
import RuleGuideTraveller from './pages/RuleGuideTraveller';
import RuleGuideExpert from './pages/RuleGuideExpert';
import Crimes from './pages/Crimes';
import RoleVerification from './pages/RoleVerification';
import Analytics from './pages/Analytics';
import MediaGallery from './pages/MediaGallery';
import OfflineQueue from './pages/OfflineQueue';
import BookingTours from './pages/BookingTours';
import BookingDiving from './pages/BookingDiving';
import BookingFlights from './pages/BookingFlights';

import PrivateRoute from './auth/PrivateRoute';
import RoleGate from './auth/RoleGate';
import { useAuth } from './auth/AuthContext';

const MainInfo = () => (
  <section className="max-w-5xl mx-auto my-12 px-4 py-8 bg-white/80 rounded-xl shadow-lg">
    <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4">The Fight Against Whale Hunting</h2>
    <p className="mb-4 text-gray-700">
      Whale hunting, also known as whaling, has pushed many whale species to the brink of extinction. Despite international bans, illegal hunting and trafficking still threaten these majestic creatures. 
      As a traveler or marine expert, your actions matter.
    </p>
    <ul className="list-disc pl-6 mb-4 text-gray-700">
      <li>Report any suspicious or illegal whale hunting activity using AquaWeb's reporting tools.</li>
      <li>Support responsible whale watching operators who follow ethical guidelines.</li>
      <li>Educate others about the importance of whale conservation and the dangers of illegal hunting.</li>
      <li>Participate in citizen science by mapping your whale sightings and sharing data with researchers.</li>
      <li>Advocate for stronger marine protection laws and enforcement in your region.</li>
    </ul>
    <h3 className="text-xl font-semibold text-cyan-700 mb-2">Research & Conservation Efforts</h3>
    <p className="mb-2 text-gray-700">
      - According to the International Whaling Commission, global whale populations are still recovering from decades of overhunting.<br />
      - Modern tracking and reporting tools, like AquaWeb, empower the public to help monitor and protect whales.<br />
      - Marine experts use sighting data to study migration, population health, and the impact of climate change.
    </p>
    <p className="text-gray-700">
      By joining AquaWeb, you become part of a global movement to protect whales and preserve our oceans for future generations.
    </p>
  </section>
);

const App = () => {
  const { user } = useAuth();
  const location = useLocation();
  const [showCard, setShowCard] = useState(false);
  const [cardType, setCardType] = useState(null);

  useEffect(() => {
    if (location.pathname === '/login' || location.pathname === '/register') {
      setShowCard(true);
      setCardType(location.pathname === '/login' ? 'login' : 'register');
    } else {
      setShowCard(false);
      setCardType(null);
    }
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Video */}
      <div className="fixed inset-0 z-[-2] overflow-hidden">
        <video
          src={bgvideo}
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-110 brightness-110 blur-[1px]"
        />
      </div>

      {/* Overlay */}
      <div className="fixed inset-0 z-[-1] bg-white/10 backdrop-blur-2xl border-t border-white/20" />

      <Navbar />

      {/* Hero & Card Section */}
      <AnimatePresence>
        {!user && !showCard && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -40 }}
            transition={{ duration: 0.5 }}
          >
            <Hero />
            <MainInfo />
          </motion.div>
        )}

        {!user && showCard && (
          <motion.div
            key="card"
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -40 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur"
          >
            <div className="bg-white/90 rounded-2xl shadow-2xl p-8 max-w-md w-full relative">
              <button
                onClick={() => {
                  setShowCard(false);
                  setCardType(null);
                  window.history.pushState({}, '', '/');
                }}
                className="absolute top-4 right-4 text-cyan-700 font-bold text-2xl hover:text-blue-700"
                aria-label="Close"
              >
                ×
              </button>
              {cardType === 'login' ? <Login /> : <Register />}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main App Routes */}
      <main className="flex-1 pt-24 px-2 sm:px-4">
        <Routes>
          <Route path="/" element={<RoleSelection />} />
          <Route path="/login" element={null} />
          <Route path="/register" element={null} />

          <Route
            path="/dashboard-expert"
            element={
              <PrivateRoute role="expert">
                <RoleGate allowedRoles={['expert']}>
                  <DashboardExpert />
                </RoleGate>
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard-user"
            element={<PrivateRoute role="tourist"><DashboardUser /></PrivateRoute>}
          />
          <Route path="/trip" element={<PrivateRoute><Trip /></PrivateRoute>} />
          <Route path="/species" element={<PrivateRoute><Species /></PrivateRoute>} />
          <Route path="/sightings" element={<PrivateRoute><Sightings /></PrivateRoute>} />
          <Route path="/report-sighting" element={<PrivateRoute><ReportSighting /></PrivateRoute>} />
          <Route path="/report-incident" element={<PrivateRoute><ReportIncident /></PrivateRoute>} />
          <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
          <Route path="/trip-history" element={<PrivateRoute><TripHistory /></PrivateRoute>} />
          <Route path="/rule-guide-traveller" element={<RuleGuideTraveller />} />
          <Route path="/rule-guide-expert" element={<RuleGuideExpert />} />
          <Route path="/crimes" element={<PrivateRoute role="expert"><Crimes /></PrivateRoute>} />
          <Route path="/verify-role" element={<RoleVerification />} />
          <Route path="/analytics" element={<PrivateRoute><Analytics /></PrivateRoute>} />
          <Route path="/media" element={<PrivateRoute><MediaGallery /></PrivateRoute>} />
          <Route path="/offline-queue" element={<PrivateRoute><OfflineQueue /></PrivateRoute>} />
          <Route path="/book/tours" element={<BookingTours />} />
          <Route path="/book/diving" element={<BookingDiving />} />
          <Route path="/book/flights" element={<BookingFlights />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
};

export default App;
