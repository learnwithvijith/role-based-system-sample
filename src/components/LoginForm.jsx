import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/authSlice';
import { useNavigate, Navigate } from 'react-router-dom';

export default function LoginForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  // 🔁 Redirect if already logged in
  if (isAuthenticated && user?.role === 'admin') {
    return <Navigate to="/admin-panel" />;
  }
  if (isAuthenticated && user?.role === 'user') {
    return <Navigate to="/user-panel" />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;

    if (username === 'admin' && password === 'admin') {
      dispatch(login({ username, role: 'admin' }));
      navigate('/admin-panel');
    } else if (username === 'user' && password === 'user') {
      dispatch(login({ username, role: 'user' }));
      navigate('/user-panel');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="username" placeholder="Username" required />
      <input name="password" type="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  );
}
