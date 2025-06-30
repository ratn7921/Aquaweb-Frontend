// --- src/pages/Dashboard.jsx ---
import { Link } from 'react-router-dom';

export default function Dashboard() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="p-6 text-white bg-gradient-to-r from-blue-800 to-cyan-700 min-h-screen">
      <h2 className="text-3xl font-bold mb-6">Welcome, {user?.name || 'User'}!</h2>
      <p className="mb-6 text-lg">Role: <span className="font-semibold">{user?.role || 'tourist'}</span></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Link to="/sightings" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
          <span className="text-3xl">🐋</span>
          <div className="mt-2 font-semibold">View Sightings</div>
        </Link>
        <Link to="/report-sighting" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
          <span className="text-3xl">📋</span>
          <div className="mt-2 font-semibold">Report Sighting</div>
        </Link>
        <Link to="/report-incident" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
          <span className="text-3xl">🚨</span>
          <div className="mt-2 font-semibold">Report Incident</div>
        </Link>
        <Link to="/trip" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
          <span className="text-3xl">🧭</span>
          <div className="mt-2 font-semibold">Record Trip</div>
        </Link>
        <Link to="/species" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
          <span className="text-3xl">🐠</span>
          <div className="mt-2 font-semibold">Species Catalog</div>
        </Link>
      </div>
    </div>
  );
}