// App.jsx
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import AdminRoute from "./routes/AdminRoute";
import UserRoute from "./routes/UserRoute";
import AdminPanel from "./components/AdminPanel";
import UserPanel from "./components/UserPanel";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<LoginForm />} />

<Route path="/admin-panel" element={
  <AdminRoute>
    <AdminPanel />
  </AdminRoute>
} />

<Route path="/user-panel" element={
  <UserRoute>
    <UserPanel />
  </UserRoute>
} />

</Routes>
    </BrowserRouter>
  );
}
