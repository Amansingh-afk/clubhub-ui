import {
  Navigate,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import "./App.css";

import useAuth from "./utils/UseAuth";
import Login from "./components/Auth/Login";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import Profile from "./components/Profile/Profile";
import Club from "./components/Club/Club";
import Event from "./components/Event/Event";
import SignIn from "./components/Auth/SignIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
import Settings from "./components/Profile/settings";
import ClubDetail from "./components/Club/ClubDetail";
import EventDetail from "./components/Event/EventDetail";
import SuperAdminDashboard from "./views/SuperAdminDashboard";
import ClubForm from "./components/Club/ClubForm";

const Home = () => {
  const { isAuthenticated, user } = useAuth();
  if (!isAuthenticated) return <Navigate to="/login" replace />;
  return (
    <Navigate
      to={
        isAuthenticated && user.role === "admin"
          ? "/admin"
          : user.role === "super_admin"
          ? "/super-admin"
          : "/student"
      }
      replace
    />
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/super-admin" element={<SuperAdminDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/change-password" element={<Settings />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/club" element={<Club />} />
        <Route path="/club/:id" element={<ClubDetail />} />
        <Route path="/club/new" element={<ClubForm />} />
      </Routes>
    </Router>
  );
};

export default App;
