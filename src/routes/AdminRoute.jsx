import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user?.role !== 'admin') {
    return <Navigate to="/user-panel" replace />;
  }

  return children;
}
