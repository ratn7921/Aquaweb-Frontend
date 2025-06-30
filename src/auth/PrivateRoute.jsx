// // --- src/auth/PrivateRoute.jsx ---
// import { useContext } from 'react';
// import { Navigate } from 'react-router-dom';
// import { AuthContext } from './AuthContext';

// const PrivateRoute = ({ children, role: requiredRole }) => {
//   const { user, role } = useContext(AuthContext);
//   if (!user || role !== requiredRole) {
//     return <Navigate to="/login" replace />;
//   }
//   return children;
// };

// export default PrivateRoute;



// --- src/auth/PrivateRoute.jsx ---
import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

export default function PrivateRoute({ children, role }) {
  const { user, loading } = useAuth();
  if (loading) return <div className="text-center py-10 text-white">Loading...</div>;
  if (!user) return <Navigate to="/login" />;
  if (role && user.role !== role) return <Navigate to="/" />;
  return children;
}