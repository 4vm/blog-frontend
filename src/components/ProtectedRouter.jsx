import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export const ProtectedRoute = ({ roleRequired }) => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  let isAuthorized = true;
  let isTokenInvalid = false;

  try {
    const decoded = jwtDecode(token);
    const role = decoded.role;
    
    if (roleRequired && role !== roleRequired) {
      isAuthorized = false;
    }
  } catch (error) {
    isTokenInvalid = true;
    console.error(error);
  }

  if (isTokenInvalid) {
    localStorage.removeItem('token');
    return <Navigate to="/login" replace />;
  }

  if (!isAuthorized) {
    return <Navigate to="/" replace />;
  }

  return <Outlet />;
};