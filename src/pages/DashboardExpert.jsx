// import { Link } from 'react-router-dom';

// export default function DashboardExpert() {
//   const user = JSON.parse(localStorage.getItem('user'));
//   return (
//     <div className="p-6 text-white bg-gradient-to-r from-blue-800 to-cyan-700 min-h-screen">
//       <img src="/images/dashboard-expert.jpg" alt="Expert Hero" className="rounded w-full h-48 object-cover mb-4" />
//       <h2 className="text-2xl font-bold mb-2">Welcome, {user?.name || 'Expert'}!</h2>
//       <p className="mb-6">Quick actions: Add sighting, report incident, view trip logs.</p>
//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
//         <Link to="/report-sighting" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
//           <span className="text-3xl">📋</span>
//           <div className="mt-2 font-semibold">Report Sighting</div>
//         </Link>
//         <Link to="/report-incident" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
//           <span className="text-3xl">🚨</span>
//           <div className="mt-2 font-semibold">Report Incident</div>
//         </Link>
//         <Link to="/trip" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
//           <span className="text-3xl">🧭</span>
//           <div className="mt-2 font-semibold">View Trips</div>
//         </Link>
//         <Link to="/species" className="block p-6 bg-white/10 backdrop-blur rounded-lg shadow hover:bg-white/20 text-center">
//           <span className="text-3xl">🐠</span>
//           <div className="mt-2 font-semibold">Species Catalog</div>
//         </Link>
//       </div>
//     </div>
//   );
// }





import { Link } from 'react-router-dom';

export default function DashboardExpert() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-900 via-cyan-800 to-blue-700 text-white">
      <div className="max-w-5xl mx-auto">
        <img
          src="/assets/dashboard-expert.jpg"
          alt="Expert Hero"
          className="w-full h-52 md:h-64 object-cover rounded-3xl shadow-xl mb-6"
        />

        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3 drop-shadow">
          Welcome, {user?.name || 'Expert'} 👨‍🔬
        </h2>
        <p className="text-cyan-100 text-base sm:text-lg mb-8 max-w-2xl">
          Your dashboard provides quick access to field data, incident logs, and species records. Stay informed and contribute to marine conservation efforts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link
            to="/report-sighting"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">📋</span>
            <div className="mt-3 font-semibold text-lg">Report Sighting</div>
          </Link>

          <Link
            to="/report-incident"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🚨</span>
            <div className="mt-3 font-semibold text-lg">Report Incident</div>
          </Link>

          <Link
            to="/trip"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🧭</span>
            <div className="mt-3 font-semibold text-lg">View Trips</div>
          </Link>

          <Link
            to="/species"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-xl p-6 rounded-2xl text-center shadow-md transition-all duration-200 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="text-4xl">🐠</span>
            <div className="mt-3 font-semibold text-lg">Species Catalog</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
