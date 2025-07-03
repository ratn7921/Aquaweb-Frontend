// import { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from '../auth/AuthContext';
// import axios from '../api/axios';
// import PostsFeed from '../components/PostsFeed';

// export default function DashboardUser() {
//   const { user, loading } = useAuth();
//   const [activity, setActivity] = useState(null);
//   const [profile, setProfile] = useState(null);

//   useEffect(() => {
//     const fetchActivity = async () => {
//       try {
//         const res = await axios.get('/users/activity');
//         setActivity(res.data);
//       } catch (err) {
//         console.error('Failed to load activity:', err);
//         setActivity([]);
//       }
//     };
//     fetchActivity();
//   }, []);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await axios.get('/users/me');
//         setProfile(res.data);
//       } catch (err) {
//         console.error('Failed to load profile:', err);
//       }
//     };
//     fetchProfile();
//   }, []);

//   if (loading || !profile || activity === null) {
//     return <div className="text-center py-10 text-white">Loading...</div>;
//   }

//   if (!user) return null;

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-900/80 via-cyan-900/70 to-blue-700/60 rounded-3xl overflow-y-auto p-4 mb-4">
//       <div className="w-full max-w-3xl mx-auto glass-ios26 p-8 rounded-3xl shadow-2xl mb-8 mt-2">
//         <div className="flex items-center gap-6 mb-8">
//           {profile.avatar && (
//             <img
//               src={profile.avatar.startsWith('http') ? profile.avatar : `http://localhost:5000${profile.avatar}`}
//               alt="User"
//               className="w-24 h-24 rounded-2xl border-4 border-cyan-300 shadow-lg object-cover"
//             />
//           )}
//           <div>
//             <h2 className="text-3xl font-bold text-white drop-shadow">👋 {profile.name}</h2>
//             <div className="text-cyan-100">{profile.email}</div>
//             <div className="text-xs text-cyan-300 mt-1 uppercase tracking-wider">{profile.role}</div>
//             <div className="text-cyan-200 mt-2 text-sm">{profile.description}</div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
//           <Link to="/species" className="glass-tile-ios26 text-center hover:scale-105 transition-all duration-200">
//             <span className="text-4xl">🐠</span>
//             <div className="mt-2 font-semibold text-white">Species Catalog</div>
//           </Link>
//           <Link to="/report-sighting" className="glass-tile-ios26 text-center hover:scale-105 transition-all duration-200">
//             <span className="text-4xl">📋</span>
//             <div className="mt-2 font-semibold text-white">Report Sighting</div>
//           </Link>
//           <Link to="/trip-history" className="glass-tile-ios26 text-center hover:scale-105 transition-all duration-200">
//             <span className="text-4xl">🧭</span>
//             <div className="mt-2 font-semibold text-white">Trip Activity</div>
//           </Link>
//         </div>

//         <h3 className="text-xl font-bold mb-4 text-white/90">My Activity Timeline</h3>
//         <div className="space-y-4">
//           {activity.length === 0 && (
//             <div className="text-cyan-200 text-center">No activity yet.</div>
//           )}
//           {activity.map((item, idx) => (
//             <div key={idx} className="flex items-center gap-4 glass-tile-ios26 px-4 py-3">
//               <span className="text-2xl">
//                 {item.type === 'sighting' && '👁️'}
//                 {item.type === 'incident' && '🚨'}
//                 {item.type === 'trip' && '🧭'}
//               </span>
//               <div className="flex-1">
//                 <div className="font-semibold text-white">
//                   {item.type === 'sighting' && `Reported a sighting: ${item.data?.species || 'Unknown species'}`}
//                   {item.type === 'incident' && `Reported an incident: ${item.data?.type || 'Unknown type'}`}
//                   {item.type === 'trip' && `Trip from ${item.data?.startTime ? new Date(item.data.startTime).toLocaleString() : 'N/A'} to ${item.data?.endTime ? new Date(item.data.endTime).toLocaleString() : 'N/A'}`}
//                 </div>
//                 <div className="text-xs text-cyan-200">
//                   {new Date(item.timestamp || item.createdAt).toLocaleString()}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* <h2 className="text-2xl font-bold text-white mt-8 mb-4">🌊 Public Ocean Activity Feed</h2> */}
//       <PostsFeed />

//       <style>{`
//         .glass-ios26 {
//           background: rgba(255,255,255,0.18);
//           box-shadow: 0 8px 32px 0 rgba(31,38,135,0.37);
//           backdrop-filter: blur(24px) saturate(180%);
//           -webkit-backdrop-filter: blur(24px) saturate(180%);
//           border-radius: 32px;
//           border: 1.5px solid rgba(255,255,255,0.22);
//         }
//         .glass-tile-ios26 {
//           background: rgba(255,255,255,0.14);
//           border-radius: 20px;
//           box-shadow: 0 4px 24px 0 rgba(31,38,135,0.13);
//           backdrop-filter: blur(12px) saturate(180%);
//           -webkit-backdrop-filter: blur(12px) saturate(180%);
//           border: 1px solid rgba(255,255,255,0.18);
//           transition: box-shadow 0.2s, transform 0.2s;
//         }
//       `}</style>
//     </div>
//   );
// }


import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import axios from '../api/axios';
import PostsFeed from '../components/PostsFeed';
import { motion } from 'framer-motion';

const MotionLink = motion(Link);

export default function DashboardUser() {
  const { user, loading } = useAuth();
  const [activity, setActivity] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/users/activity').then(res => setActivity(res.data)).catch(() => setActivity([]));
    axios.get('/users/me').then(res => setProfile(res.data)).catch(() => {});
  }, []);

  if (loading || !profile) {
    return <div className="text-center py-20">Loading...</div>;
  }

  return (
    <>
      <motion.div
        className="min-h-screen bg-gradient-to-br from-blue-900 to-cyan-800 p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-3xl p-8 shadow-xl">
          {/* Profile Header */}
          <div className="flex items-center gap-6 mb-8">
            {profile.avatar && (
              <img
                src={profile.avatar}
                alt={profile.name}
                className="w-24 h-24 rounded-xl border-4 border-cyan-300 shadow"
              />
            )}
            <div>
              <h2 className="text-3xl font-bold text-white">{profile.name}</h2>
              <p className="text-cyan-100">{profile.role.toUpperCase()}</p>
              <p className="text-cyan-200">{profile.email}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { path: '/species', icon: '🐠', label: 'Species Catalog' },
              { path: '/report-sighting', icon: '📋', label: 'Report Sighting' },
              { path: '/trip-history', icon: '🧭', label: 'Trip History' },
            ].map((item) => (
              <MotionLink
                to={item.path}
                key={item.path}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center bg-white/30 rounded-xl p-6 shadow-lg"
              >
                <span className="text-4xl">{item.icon}</span>
                <p className="mt-2 text-white font-semibold">{item.label}</p>
              </MotionLink>
            ))}
          </div>

          {/* Activity */}
          <h3 className="text-xl text-white mb-4">My Activity</h3>
          <div className="space-y-4">
            {activity.length === 0 ? (
              <p className="text-cyan-200">No recent activity.</p>
            ) : (
              activity.map((act, i) => (
                <motion.div
                  key={i}
                  className="bg-white/30 rounded-lg p-4 flex items-center gap-4"
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl">
                    {act.type === 'sighting' ? '👁️' : act.type === 'incident' ? '🚨' : '🧭'}
                  </span>
                  <div>
                    <p className="text-white font-bold">
                      {act.type === 'trip'
                        ? `Trip on ${new Date(act.createdAt).toLocaleDateString()}`
                        : `Reported ${act.type}`}
                    </p>
                    <p className="text-cyan-200 text-sm">{new Date(act.createdAt).toLocaleString()}</p>
                  </div>
                </motion.div>
              ))
            )}
          </div>
        </div>

        {/* Community Feed */}
        <div className="mt-10">
          <h3 className="text-2xl text-white mb-4">🌊 Community Feed</h3>
          <PostsFeed />
        </div>
      </motion.div>
    </>
  );
}
