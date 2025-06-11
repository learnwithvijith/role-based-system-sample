import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

export default function UserRoute({ children }) {
  const { isAuthenticated, user } = useSelector(state => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (user?.role !== 'user') {
    return <Navigate to="/admin-panel" replace />;
  }

  return children;
}
