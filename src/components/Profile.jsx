// components/Profile.jsx
import { useSelector } from 'react-redux';

export default function Profile() {
  const user = useSelector(state => state.auth.user);

  return (
    <div>
      <h2>Profile Page</h2>
      <p>Username: {user.username}</p>
      <p>Member since: Jan 2025</p>
    </div>
  );
}
