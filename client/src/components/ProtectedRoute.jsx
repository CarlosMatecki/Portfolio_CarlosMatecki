import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

export default function ProtectedRoute({ children, roles }) {
  const { user, loadingProfile } = useAuth();

  if (loadingProfile) {
    return <div className="page-loading">Checking permissions...</div>;
  }

  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (roles && !roles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
}

