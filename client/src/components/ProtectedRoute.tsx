import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute: React.FC = () => {
  const { user } = useAuth();

  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to="/signin" replace />;
  }
};

export default ProtectedRoute;
