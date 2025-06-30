import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import Logo from '../assets/logo.png';

const Navbar = () => {
  const { user, logout, loading } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const handleLogin = (e) => {
    e.preventDefault();
    navigate('/login');
  };

  const handleRegister = (e) => {
    e.preventDefault();
    navigate('/register');
  };

  // Add this handler for logo click
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 right-0 w-full z-50 bg-white/70 backdrop-blur-xl py-2 sm:py-4 px-2 sm:px-4 md:px-10 border-b border-cyan-200/60 shadow-xl flex justify-between items-center transition-all duration-300">
      {/* Logo */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={handleLogoClick}
        title="Go to Home"
      >
        <img
          src={Logo}
          alt="Logo"
          className="h-10 w-10 object-cover rounded-full border-2 border-cyan-400 shadow-md transition-transform duration-300 hover:scale-105"
        />
        <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-cyan-800 uppercase">
          Aqua
        </h1>
      </div>
      {/* Hamburger for mobile */}
      <button
        className="sm:hidden text-cyan-800 text-3xl focus:outline-none"
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
      >
        ☰
      </button>
      {/* Nav Items */}
      <nav className={`flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 items-center text-sm md:text-base font-semibold text-gray-800 sm:flex ${open ? 'flex absolute top-16 left-0 w-full bg-white/95 py-4 px-2 z-50' : 'hidden sm:flex'}`}>
        <Link
          to={user?.role === 'expert' ? '/dashboard-expert' : '/dashboard-user'}
          className="hover:text-cyan-600 transition block py-1"
        >
          Dashboard
        </Link>
        <Link to="/species" className="hover:text-cyan-600 transition block py-1">
          Species
        </Link>
        <Link to="/trip" className="hover:text-cyan-600 transition block py-1">
          Trip
        </Link>
        <Link to="/sightings" className="hover:text-cyan-600 transition block py-1">
          Sightings
        </Link>
{user?.role === 'expert' && (
  <Link to="/crimes" className="hover:text-rose-600 transition block py-1">
    Crimes
  </Link>
)}


        {user && (
          <Link to="/profile" className="hover:text-cyan-600 transition block py-1">
            Profile
          </Link>
        )}

 

        {user ? (
          <button
            onClick={handleLogout}
            className="ml-0 sm:ml-2 bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-1.5 rounded-md text-white font-bold hover:from-blue-700 hover:to-cyan-600 transition block"
            disabled={loading}
          >
            {loading ? 'Logging out...' : 'Logout'}
          </button>
        ) : (
          <>
            <button
              onClick={handleLogin}
              className="ml-0 sm:ml-2 bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-1.5 rounded-md text-white font-bold hover:from-blue-700 hover:to-cyan-600 transition block"
            >
              Login
            </button>
            <button
              onClick={handleRegister}
              className="ml-0 sm:ml-2 bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-1.5 rounded-md text-white font-bold hover:from-cyan-600 hover:to-blue-700 transition block"
            >
              Register
            </button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Navbar;




// the following code is commented out as it was not part of the recent edits
// If you need to use it, you can uncomment it and adjust as necessary


// import React, { useState, useEffect, useRef } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useAuth } from '../auth/AuthContext';
// import Logo from '../assets/logo.png';

// const Navbar = () => {
//   const { user, logout, loading } = useAuth();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);
//   const navRef = useRef();

//   const handleLogout = () => {
//     logout();
//     navigate('/login');
//   };

//   const handleLogin = (e) => {
//     e.preventDefault();
//     navigate('/login');
//   };

//   const handleRegister = (e) => {
//     e.preventDefault();
//     navigate('/register');
//   };

//   const handleLogoClick = () => {
//     navigate('/');
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (navRef.current && !navRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };
//     if (open) {
//       document.addEventListener('mousedown', handleClickOutside);
//     }
//     return () => {
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [open]);

//   return (
//     <>
//       {/* Backdrop Overlay */}
//       {open && (
//         <div
//           className="fixed inset-0 z-40 bg-black bg-opacity-40 backdrop-blur-sm sm:hidden"
//           onClick={() => setOpen(false)}
//         ></div>
//       )}

//       <header className="fixed top-0 right-0 w-full z-50 bg-white/70 backdrop-blur-xl py-2 sm:py-4 px-2 sm:px-4 md:px-10 border-b border-cyan-200/60 shadow-xl flex justify-between items-center transition-all duration-300">
//         <div
//           className="flex items-center gap-3 cursor-pointer"
//           onClick={handleLogoClick}
//           title="Go to Home"
//         >
//           <img
//             src={Logo}
//             alt="Logo"
//             className="h-10 w-10 object-cover rounded-full border-2 border-cyan-400 shadow-md transition-transform duration-300 hover:scale-105"
//           />
//           <h1 className="text-lg sm:text-xl md:text-2xl font-bold tracking-wide text-cyan-800 uppercase">
//             Aqua
//           </h1>
//         </div>
//         <button
//           className="sm:hidden text-cyan-800 text-3xl focus:outline-none z-50"
//           onClick={() => setOpen(!open)}
//           aria-label="Toggle navigation"
//         >
//           {open ? '✕' : '☰'}
//         </button>

//         <nav
//           ref={navRef}
//           className={`fixed top-16 left-0 w-full bg-white/95 py-4 px-6 z-50 transition-transform duration-300 ease-in-out transform sm:static sm:translate-x-0 sm:opacity-100 sm:flex sm:bg-transparent sm:items-center ${open ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'} flex-col sm:flex-row gap-2 sm:gap-4 md:gap-8 items-center text-sm md:text-base font-semibold text-gray-800`}
//         >
//           <Link
//             to={user?.role === 'expert' ? '/dashboard-expert' : '/dashboard-user'}
//             className="hover:text-cyan-600 transition block py-1"
//           >
//             Dashboard
//           </Link>
//           <Link to="/species" className="hover:text-cyan-600 transition block py-1">
//             Species
//           </Link>
//           <Link to="/trip" className="hover:text-cyan-600 transition block py-1">
//             Trip
//           </Link>
//           <Link to="/sightings" className="hover:text-cyan-600 transition block py-1">
//             Sightings
//           </Link>
//           {user?.role === 'expert' && (
//             <Link to="/crimes" className="hover:text-rose-600 transition block py-1">
//               Crimes
//             </Link>
//           )}
//           {user && (
//             <Link to="/profile" className="hover:text-cyan-600 transition block py-1">
//               Profile
//             </Link>
//           )}
//           {user ? (
//             <button
//               onClick={handleLogout}
//               className="ml-0 sm:ml-2 bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-1.5 rounded-md text-white font-bold hover:from-blue-700 hover:to-cyan-600 transition block"
//               disabled={loading}
//             >
//               {loading ? 'Logging out...' : 'Logout'}
//             </button>
//           ) : (
//             <>
//               <button
//                 onClick={handleLogin}
//                 className="ml-0 sm:ml-2 bg-gradient-to-r from-cyan-600 to-blue-700 px-4 py-1.5 rounded-md text-white font-bold hover:from-blue-700 hover:to-cyan-600 transition block"
//               >
//                 Login
//               </button>
//               <button
//                 onClick={handleRegister}
//                 className="ml-0 sm:ml-2 bg-gradient-to-r from-blue-700 to-cyan-600 px-4 py-1.5 rounded-md text-white font-bold hover:from-cyan-600 hover:to-blue-700 transition block"
//               >
//                 Register
//               </button>
//             </>
//           )}
//         </nav>
//       </header>
//     </>
//   );
// };

// export default Navbar;
