import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Auth/Login";

import useAuth from "./hooks/UseAuth";
import AdminDashboard from "./views/AdminDashboard";
import StudentDashboard from "./views/StudentDashboard";
import Profile from "./components/Profile/Profile";
import Club from "./components/Club/Club";
import Event from "./components/Event/Event";
import SignIn from "./components/Auth/SignIn";
import ForgotPassword from "./components/Auth/ForgotPassword";
const Home = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <div>Home</div> : null;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/student" element={<StudentDashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/event" element={<Event />} />
        <Route path="/club" element={<Club />} />
      </Routes>
    </Router>
  );
};

export default App;
