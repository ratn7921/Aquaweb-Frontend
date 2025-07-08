
import React, { useEffect, useState } from 'react';
import { useAuth } from '../auth/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import PostsFeed from '../components/PostsFeed';

export default function DashboardUser() {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [activity, setActivity] = useState([]);
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    axios.get('/users/activity')
      .then(res => setActivity(res.data))
      .catch(() => setActivity([]));

    axios.get('/users/me')
      .then(res => setProfile(res.data))
      .catch(() => {});
  }, []);

  const handleNavigation = (path) => {
    navigate(path);
  };

  if (loading || !profile) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60 text-lg">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden rounded-4xl">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-full opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      <div className="relative z-10 p-6 max-w-4xl mx-auto">
        {/* Profile Section */}
        <div className="relative mb-8 rounded-3xl overflow-hidden backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20"></div>
          <div className="relative p-8 flex items-center gap-6 mb-6">
            {/* Avatar */}
            <div className="relative">
              {profile.avatar ? (
                <img
                  src={profile.avatar}
                  alt={profile.name}
                  className="w-24 h-24 rounded-2xl border-4 border-cyan-300/50 shadow-2xl"
                />
              ) : (
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shadow-2xl border-4 border-cyan-300/50">
                  <span className="text-white text-3xl font-bold">
                    {profile.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
              )}
              <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-white/20 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {profile.name}
              </h2>
              <div className="flex items-center space-x-3 mb-2">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-semibold bg-cyan-400/20 text-cyan-300 border border-cyan-400/30">
                  {profile.role.toUpperCase()}
                </span>
              </div>
              <p className="text-cyan-200/80 text-lg">{profile.email}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          {[
            {
              path: '/species',
              icon: 'M11.48 3.499a.562.562 0 011.04 0l2.125 5.111...',
              label: 'Species Catalog',
              color: 'from-amber-400/80 to-orange-500/80',
              bgColor: 'bg-amber-500/10'
            },
            {
              path: '/report-sighting',
              icon: 'M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0...',
              label: 'Report Sighting',
              color: 'from-green-400/80 to-emerald-500/80',
              bgColor: 'bg-green-500/10'
            },
            {
              path: '/trip-history',
              icon: 'M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437...',
              label: 'Trip History',
              color: 'from-blue-400/80 to-sky-500/80',
              bgColor: 'bg-blue-500/10'
            }
          ].map(item => (
            <div
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className="group cursor-pointer transition-all hover:scale-105 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden rounded-2xl bg-white/10 border border-white/20 shadow-xl backdrop-blur-xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                <div className={`absolute inset-0 ${item.bgColor} opacity-50`}></div>
                <div className="relative p-6 flex flex-col items-center space-y-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm flex items-center justify-center rounded-2xl shadow-lg">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                    </svg>
                  </div>
                  <p className="text-white font-semibold text-center">{item.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Activity Feed */}
        <div className="mb-10">
          <h3 className="text-2xl text-white mb-6 font-bold">My Activity</h3>
          <div className="space-y-4">
            {activity.length === 0 ? (
              <div className="text-center py-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl">
                <p className="text-white/60 text-lg">No recent activity</p>
                <p className="text-white/40 text-sm mt-2">Start exploring to see your activity here</p>
              </div>
            ) : (
              activity.map((act, i) => (
                <div
                  key={i}
                  className="group bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                      <span className="text-2xl">
                        {act.type === 'sighting' ? '👁️' : act.type === 'incident' ? '🚨' : '🧭'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-bold text-lg">
                        {act.type === 'trip'
                          ? `Trip on ${new Date(act.createdAt).toLocaleDateString()}`
                          : `Reported ${act.type}`}
                      </p>
                      <p className="text-white/60 text-sm">{new Date(act.createdAt).toLocaleString()}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Community Feed */}
        <div className="mb-20">
          <h3 className="text-2xl text-white font-bold flex items-center space-x-2">
            <span>🌊</span><span>Community Feed</span>
          </h3>
          <PostsFeed />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="fixed top-10 right-10 w-4 h-4 bg-cyan-400/30 rounded-full animate-pulse"></div>
      <div className="fixed bottom-20 left-10 w-6 h-6 bg-blue-400/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="fixed top-1/2 left-10 w-2 h-2 bg-emerald-400/40 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
    </div>
  );
}
