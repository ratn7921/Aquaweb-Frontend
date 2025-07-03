// // src/auth/RoleGate.jsx
// import { useUser } from './useUserContext';
// import { Navigate } from 'react-router-dom';

// export default function RoleGate({ requiredRole, children }) {
//   const { user, loading } = useUser();
//   if (loading) return <div>Loading…</div>;
//   if (!user || !user.roles.includes(requiredRole)) {
//     return <Navigate to="/dashboard" replace />;
//   }
//   return children;
// }



// src/auth/RoleGate.jsx
import React from 'react';
import { useAuth } from './AuthContext'; // Adjust path if needed

const RoleGate = ({ allowedRoles = [], children }) => {
  const { user } = useAuth();

  if (!user || !allowedRoles.includes(user.role)) {
    return null; // or return a message: <p>Access denied</p>
  }

  return <>{children}</>;
};

export default RoleGate;

